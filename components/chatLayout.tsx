import React, { FunctionComponent } from "react"
import { useState } from "react";

export const ChatLayout = ( {onChange, onClick,messages, msg, connectStatus} ) => {

  const [connectVictor, setConnectVictor] = useState(false);

  const [clientName, setclientName] = useState("");

  const callVictor = () => {
    setConnectVictor(true)
  }

  const closeVictor = () => {
    setConnectVictor(false)
  }

  const handleSubmit = event => {
    event.preventDefault();

    console.log('form submitted ✅');
  };

   const updateChatText = messages.map( (msg,index) => {

          console.log('variable')

          if(msg.name === "bot")
          {
            return (
            <div key = {index} className="other mt-2  ml-5 rounded-bl-none float-none bg-gray-300 mr-auto rounded-2xl p-2">
            <p className="inline-flex">{msg.message}</p>
            </div>  
            )
          } else {
            return (
            <div  key = {index}  className="w-max ml-auto break-all mt-2 mb-1 p-2 rounded-br-none bg-blue-500 rounded-2xl text-white text-left mr-5">
            <p className="inline-flex">{msg.message}</p>
            </div>
            )

          }
        }
    )


    return (

        !connectVictor ? 

        <div className="grid grid-rows-12 fixed bottom-4 right-4 box-border z-20 h-96 w-80 border-4 border-green-600 bg-white">

          <button
          className="bg-red-400 rounded-full"
          onClick={callVictor}>Text to Victor directly</button>
            
          <div id="chat"  className="row-start-1 row-end-10 flex mt-2 flex-col-reverse overflow-y-scroll space-y-3 mb-1 pb-3 ">
                
              {updateChatText}
        
          </div>
          {
          connectStatus ? (

           <div className="flex flex-row  items-center  my-2 w-full">
              <div
                className="ml-2 flex flex-row border-gray items-center w-full border rounded-3xl h-12 px-2"
              >
                
           
              <div className="w-full">
                <input
                  type="text"
                  id="message"
                  className="border rounded-2xl border-transparent w-full focus:outline-none text-sm h-10 flex items-center bg-white"
                  placeholder="Type your message...."
                  onChange={ onChange }
                  autoComplete = "off"
                  value = { msg }

                />
              </div> 
        
            </div>
        
            <div>
                <button
                 id="self"
                className="flex items-center justify-center h-10 w-10 mr-2 rounded-full bg-gray-200 hover:bg-gray-300 text-indigo-800 text-white focus:outline-none"
                onClick={ onClick }
              >
                <svg
                  className="w-5 h-5 transform rotate-90 -mr-px"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              </button>
            </div> 
          </div> ) : (<div className="w-full">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>

            <p className="relative text-white font-bold bg-red-500"> .....Hold on connecting to server.... </p> 
            </div>)  
              }
        </div>

: <div className="grid grid-rows-12 fixed bottom-4 right-4 box-border z-20 h-96 w-80 border-4 border-green-600 bg-white">

  <button className="bg-red-400 rounded-full" onClick={closeVictor}>Return to chatbot</button>
          {/* <p>Currently I am still implementing this feature</p> */}
          <form onSubmit={handleSubmit}>
            <label>
              Enter your Name:
              <input className ="border-2 border-black"  type="text" name="name" onChange={(e) => setclientName(e.target.value)}/>
            </label>
          </form>

  <button className="bg-sky-400 rounded-full" onClick={handleSubmit}>Connect with Victor</button>

  </div>  ) 

}