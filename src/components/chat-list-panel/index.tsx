import { ItemGroup } from "../ui/item"
import { ScrollArea } from "../ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import ChatListPanelHeader from "./chat-list-panel-header"
import ChatListPanelItem from "./chat-list-panel-item"

function ChatListPanel() {
  return (
    <section className="border-border h-full w-96 border-r-1">
      <ChatListPanelHeader />
      <Tabs className="mt-3 h-[calc(100%-158px)]" defaultValue="all">
        <div className="px-3">
          <TabsList className="w-full">
            <TabsTrigger value="all">All (x)</TabsTrigger>
            <TabsTrigger value="pinned">Pinned (x)</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent className="h-full" value="all">
          <ScrollArea className="h-full">
            <ItemGroup className="mx-3 gap-4">
              {Array.from({ length: 100 }, (_, i) => (
                <ChatListPanelItem key={i} />
              ))}
            </ItemGroup>
          </ScrollArea>
        </TabsContent>
        <TabsContent className="h-full" value="pinned">
          <ScrollArea className="h-full">
            <ItemGroup className="mx-3 gap-4">
              {Array.from({ length: 100 }, (_, i) => (
                <ChatListPanelItem key={i} />
              ))}
            </ItemGroup>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </section>
  )
}

export default ChatListPanel
