import Image from "next/image";

const Sidebar = ({ openChat }) => {
  return (
    <div className="md:w-[40%] px-6 py-5 bg-gray !overflow-y-scroll no-scrollbar rounded max-h-screen h-full flex gap-4 flex-col">
      <div className="flex gap-2 flex-col">
        <h1 className="uppercase  opacity-70">All Your Chats</h1>
        <button className="rounded-md bg-light-salmon px-4 py-2 w-full text-sm font-semibold text-black">
          Chat Images : ON
        </button>
        <p className="text-xs opacity-70">
          When a bot sends you images, you will be charged one secondary image
        </p>
      </div>
      <div className="pt-2 flex flex-col gap-2">
        <Chat
          openChat={openChat}
          active
          img={"common/jayesh.svg"}
          msg={"Whats your problem??"}
          name={"Jayesh"}
        />
        <Chat openChat={openChat} msg={"How are you?"} name={"Person2"} />
        <Chat openChat={openChat} name={"Person3"} msg={"Hi"} />
        <Chat openChat={openChat} name={"Person4"} msg={"Where are you?"} />
        <Chat openChat={openChat} name={"Person5"} msg={"You'r late!"} />
        <Chat openChat={openChat} name={"Person6"} msg={"How are you?"} />
      </div>
      <div className=" px-2 py-[0.5px] bg-[#3F3F3F]"></div>
      <button className="flex gap-3 items-center">
        <Image src={"/common/add.svg"} height={34} width={34} alt="create" />
        <span className="opacity-80">Create new bot</span>
      </button>
    </div>
  );
};

const Chat = ({ img, name, msg, openChat, active }) => {
  return (
    <div
      className={`w-full ${
        active ? "bg-light-gray" : ""
      } h-[8vh] overflow-hidden rounded-full flex gap-3 items-center cursor-pointer`}
      onClick={openChat}
    >
      <div className="h-full flex items-center rounded-full overflow-hidden">
        <img
          src={img ? img : "/common/avatar.svg"}
          className="h-full w-full px-1.5 py-1.5 rounded-full"
          alt="add"
        />
      </div>
      <div className="overflow-x-hidden">
        <h1 className="text-sm text-white opacity-80">{name}</h1>
        <p className="text-xs text-[#7F8781]">{msg?.substring(20, 0)}...</p>
      </div>
    </div>
  );
};

export default Sidebar;
