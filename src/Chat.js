import React, { useEffect, useState } from 'react';
import "./Chat.css"
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from "@material-ui/icons";

const Chat = () => {
  const [input, setInput] = useState('')
  const [seed, setSeed] = useState('')

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()
    console.log('You typed >>> ', input)
    setInput('')
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`http://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>last seen ...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined/>
          </IconButton>
          <IconButton>
            <AttachFile/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className={`chat__message ${true && 'chat__reciever'}`}>
          <span className="chat__name">John Doe</span>Hey fags
          <span className="chat__timestamp">4:20pm</span>
        </p>

      </div>

      <div className="chat__footer">
        <InsertEmoticon/>
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
          <button onClick={sendMessage}>send a message</button>
        </form>
        <Mic/>
      </div>

    </div>
  );
};

export default Chat;
