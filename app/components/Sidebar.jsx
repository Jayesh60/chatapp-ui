import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="md:w-[30%] px-6 py-5 bg-gray !overflow-y-scroll no-scrollbar rounded max-h-screen h-full flex gap-4 flex-col">
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
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </div>
      <div className=" px-2 py-[0.5px] bg-[#3F3F3F]"></div>
      <button className="flex gap-3 items-center">
        <Image src={"/common/add.svg"} height={20} width={20} alt="create" />
        <span className="opacity-80">Create new bot</span>
      </button>
    </div>
  );
};

const Chat = ({ img, name, msg }) => {
  return (
    <div
      className={`w-full bg-light-gray h-[8vh] overflow-hidden rounded-full flex gap-3 items-center cursor-pointer`}
    >
      <div className="h-full flex items-center rounded-full">
        <Image
          src={"/common/add.svg"}
          width={20}
          height={20}
          className="h-full pl-2 py-2 w-full"
        />
      </div>
      <div className="overflow-x-hidden">
        <h1 className="text-sm text-white opacity-80">Jayesh Wadhe</h1>
        <p className="text-xs text-[#7F8781]">Lorem ipsum dolor sit am...</p>
      </div>
    </div>
  );
};

export default Sidebar;
