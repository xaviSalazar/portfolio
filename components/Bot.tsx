import React from "react";
import { Component, useEffect, useState } from "react";
import  { ChatLayout }  from "./chatLayout";

var ws = null;
var messages = []

messages.unshift( { name : "bot", message: 'Hi welcome to my beta Bot, currently I am still testing ai models and playing with web dev for fun '} )
messages.unshift( { name : "bot", message: 'To let you know I am a C++ Developer'} )
messages.unshift( { name : "bot", message: 'I am currently working in a mission at VEDECOM where I develop C++ drivers'} )
messages.unshift( { name : "bot", message: 'I am always using Linux or any Embedded Linux variant'} )



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
    setMessage('')
  }

    ws.onerror = (ev) => {
    console.log(ev)
  }

    const onClick = (e) => {
      messages.unshift({ name :"me", message :Message})
      ws.send(Message)

    }

     const onChange = (e) => {
        setMessage(e.target.value);
    }

    return (
         < ChatLayout onChange={onChange} onClick={onClick} messages = {messages} />
    )
   

    }

// export default Bot;
    

 // if (ws==null) ws = new WebSocket ('ws://localhost:8765');

  // const [Message, setMessage] = useState('');


  // ws.onopen = () => {
  //   console.log("connected")
  // }

  // ws.onclose = () => {
  //   console.log("Connection closed")
  // }

  // ws.onmessage = (ev) => {
  //   messages.unshift({ name : "bot", message: ev.data})
  //   console.log(messages)
  // }

  // ws.onerror = (ev) => {
  //   console.log(ev)
  // }

  //   const onClick = (e) => {
  //     messages.unshift({ name :"me", message :Message})
  //     ws.send(Message)
  //   }

  //   const onChange = (e) => {
  //       setMessage(e.target.value);
  //   }
    

 
  //   return (
  //     <>
  //     {
  //       < ChatLayout onChange={onChange} onClick={onClick} messages = {messages} />
  //     }

  //     </>
  //   )
    
  //}
    
  // export default Chatbot
///////////////////////////////////////////////////

//         return (

// <div className=" flex-col h-screen w-screen bg-white">
    
//   <div id="chat"  className="flex flex-col mt-2 flex-col-reverse overflow-y-scroll space-y-3 mb-20 pb-3">
        
//       {/* {updateChatText} */}

//   </div>
  
//   <div className="flex flex-row  items-center  my-2 w-full">
//     <div
//       className="ml-2 flex flex-row border-gray items-center w-full border rounded-3xl h-12 px-2"
//     >
   
//       <div className="w-full">
//         <input
//           type="text"
//           id="message"
//           className="border rounded-2xl border-transparent w-full focus:outline-none text-sm h-10 flex items-center"
//           placeholder="Type your message...."
//           onChange={(e) => handleChange(e)}
//         />
//       </div>

//     </div>

//     <div>
//         <button
//          id="self"
//         className="flex items-center justify-center h-10 w-10 mr-2 rounded-full bg-gray-200 hover:bg-gray-300 text-indigo-800 text-white focus:outline-none"
//         onClick={ sentMessage }
//       >
//         <svg
//           className="w-5 h-5 transform rotate-90 -mr-px"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-width="2"
//             d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//           ></path>
//         </svg>
//       </button>
//     </div>

//   </div>
// </div>

//         )
