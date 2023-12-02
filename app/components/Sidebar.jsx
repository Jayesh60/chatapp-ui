import Image from "next/image"

const Sidebar = () => {
  return (
    <div className="md:w-[30%] px-6 py-5 bg-gray rounded max-h-screen h-full flex gap-2 flex-col">
        <div className="flex gap-2 flex-col">
            <h1 className="uppercase  opacity-70">All Your Chats</h1>
            <button className="rounded-md bg-light-salmon px-4 py-2 w-full text-sm font-semibold text-black">Chat Images : ON</button>
            <p className="text-xs opacity-70">When a bot sends you images, you will be charged one secondary image</p>
        </div>
        <div></div>
        <div className="w-full h-[1px] px-2 bg-[#3F3F3F]"></div>
        <button className="flex gap-3 items-center">
            <Image src={"/common/add.svg"} height={20} width={20} alt="create"/>
            <span className="opacity-80">Create new bot</span>
        </button>
    </div>
  )
}

export default Sidebar