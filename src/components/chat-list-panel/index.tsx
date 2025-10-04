import { ScrollArea } from "../ui/scroll-area"
import ChatListPanelHeader from "./chat-list-panel-header"

function ChatListPanel() {
  return (
    <section className="border-border h-full w-96 border-r-1">
      <ChatListPanelHeader />
      // TODO: Pinned Chats
      <ScrollArea className="h-full">
        {Array.from({ length: 100 }, (_, i) => (
          <li>{i}</li>
        ))}
      </ScrollArea>
    </section>
  )
}

export default ChatListPanel
