import Message from "./Message"

const MessageContainer = () => {

  return (
    <div className="h-full w-full flex mt-auto px-4 py-2 flex-col gap-1 bg-gray overflow-y-scroll no-scrollbar">
      <Message Message={"Hello 👏"}/>
      <Message  owner={true} Message={"Hello, there"}/>
      <Message Message={"How are you?"}/>
      <Message Message={"I'm Fine, mate!"} owner/>
      <Message Message={"How are you?"}/>
      <Message Message={"How are you?"} sameSender/>
      <Message Message={"How are you?"} sameSender/>
      <Message Message={"How are you?"} sameSender/>
      <Message Message={"How are you?"} sameSender/>
      <Message Message={"How are you?"} sameSender/>
      <Message Message={"How are you?"} sameSender/>
      <Message Message={"How are you?"} sameSender/>
      <Message Message={"How are you?"} sameSender/>
      <Message Message={"How are you?"} sameSender/>
      <Message Message={"Dont spam Bro!"} owner/>
      <Message Message={"Whats your problem??"} owner sameSender/>
    </div>
  )
}

export default MessageContainer