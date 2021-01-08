import React, { useEffect, useState } from 'react';
import './SidebarChat.css'
import { Avatar } from "@material-ui/core";

const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState('')
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const createChat = () => {
    const roomname = prompt("Please enter the name of the chat")

    if(roomname) {}
  }

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`http://avatars.dicebear.com/api/human/${seed}.svg`}/>
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  )
};

export default SidebarChat;
