import React from "react";
import { Component, useEffect, useState } from "react";
import  { ChatLayout }  from "./chatLayout";

var ws = null;
var messages = []

messages.unshift( { name : "bot", message: 'Hi welcome to my Beta version Bot, I am currently testing some AI models and also searching the best hosting site so you can communicate with my chatbot'} )
messages.unshift( { name : "bot", message: 'To let you know I am a C++ Developer'} )
messages.unshift( { name : "bot", message: 'I am currently working in a mission at VEDECOM where I develop C++ drivers in a Linux Environment'} )




export default function Bot() {

  const [Message, setMessage] = useState('');

  if (ws==null) ws = new WebSocket ('ws://localhost:8765');

     ws.onopen = () => {
    console.log("connected")
    }

    ws.onclose = () => {
    console.log("Connection closed")
  }

   ws.onmessage = (ev) => {
    messages.unshift({ name : "bot", message: ev.data})
    console.log(messages)
    setMessage(' ')
  }

    ws.onerror = (ev) => {
    console.log(ev)
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
         < ChatLayout onChange={onChange} onClick={onClick} messages = {messages} msg = {Message}/>
    )
   

    }
