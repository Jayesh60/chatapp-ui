'use client';
import ChatContainer from "./components/ChatContainer";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [chatActive, setChatActive] = useState(false);
  const handleChatActive =()=>{
    setChatActive((prev) => !prev);
  }

  return (
    <section className="flex md:flex-row flex-col md:px-24 flex-1 md:pt-0  pt-16 md:h-[70%] w-full">
      <div className="md:flex flex-row md:gap-5 hidden w-full h-full">
        <Sidebar />
        <ChatContainer name={"Jayesh"} img={"/common/jayesh.svg"}/>
      </div>

      <div className="md:hidden flex flex-col w-full h-full">
        {chatActive? <ChatContainer img={"/common/jayesh.svg"} back={handleChatActive} name={"Jayesh"} /> : <Sidebar openChat={handleChatActive}/>}
      </div>
    </section>
  );
}
