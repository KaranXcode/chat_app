import React from 'react'
import './chat.css'
import LeftSidebar from '../../components/LeftSidebar/LestSidebar'
import Chatbox from '../../components/Chatbox/Chatbox'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
const Chat = () => {
  return (
    <div className='chat1' >
      <div className='chat-container' >
        <LeftSidebar />
        <Chatbox />
         <RightSidebar/>
      </div>
    </div>
  )
}
export default Chat