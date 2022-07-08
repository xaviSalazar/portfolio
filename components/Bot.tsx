import React from "react";
import { Component, useEffect, useState } from "react";
import  { ChatLayout }  from "./chatLayout";
import { RiWechat2Line } from 'react-icons/ri'
import { AiOutlineCloseCircle } from 'react-icons/ai'

var ws = null;
var messages = []

messages.unshift( { name : "bot", message: 'Hi welcome to my Beta version Bot, I am currently testing some NLP knowledge, but I need data!!!'} )
messages.unshift( { name : "bot", message: 'To let you know I am a C++ Developer'} )
messages.unshift( { name : "bot", message: 'I am currently developing C++ drivers in an Embedded System'} )
messages.unshift( { name : "bot", message: 'What would you like to know?'} )

export default function Bot() {


  const [Message, setMessage] = useState('');
  const [chatButton, setChatButton] = useState(false);
  const [connectStatus, setConnectStatus] = useState(false);

  useEffect(() => {
    const timer = setTimeout(openConnection, 2000);
  }, []);
 
  const openConnection = () => {
    
    setChatButton(true)
    ws = new WebSocket ('wss://stormy-mountain-52583.herokuapp.com/');

    ws.onopen = () => {
      console.log("connected")
      setConnectStatus(true);
    }

    ws.onclose = () => {
      console.log("Connection closed")
      setConnectStatus(false);
    }

    ws.onmessage = (ev) => {
      messages.unshift({ name : "bot", message: ev.data})
      console.log(messages)
      setMessage(' ')
    }

    ws.onerror = (ev) => {
      console.log(ev)
    }

  }

  const closeConnection = () => {
    setChatButton(false)
    ws.close();
  }

  const onClick = (e) => {
      messages.unshift({ name :"me", message :Message})
      ws.send(Message)
      setMessage('')
    }

    const onChange = (e) => {
        setMessage(e.target.value);
    }

return (
    <div>
      {
        !chatButton ? (
    < button className=" animate-bounce fixed p-1 rounded-full bottom-0 right-0 focus:outline-none bg-rose-500 dark:bg-dark-200" onClick={ openConnection }>
      <RiWechat2Line size={50}/>
    </button> )  : (

    < button onClick={ closeConnection }>
    <AiOutlineCloseCircle size={30} className="fixed p-1 z-30 rounded-full bottom-0 right-0 focus:outline-none bg-gray-200 dark:bg-dark-200" />
    </button> 
    )
      }
     { 
        chatButton ? (
        < ChatLayout onChange={onChange} onClick={onClick} messages = {messages} msg = {Message} connectStatus = {connectStatus}/>
        ) : null
     }
    </div>
)
   
    }
