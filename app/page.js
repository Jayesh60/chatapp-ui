import ChatContainer from "./components/ChatContainer";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <section className="flex md:flex-row flex-col gap-5 md:px-24 flex-1 h-[70%] w-full">
      <Sidebar/>
      <ChatContainer/>
    </section>
  )
}
