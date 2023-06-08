import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="b8b7221a-02a3-4cf2-8413-96894de68daf"
      userName="Vicky"
      userSecret="4321"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
