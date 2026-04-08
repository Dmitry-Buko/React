import ControlsPanel from "./components/ControlsPanel";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import LanguageContext from "./provider/LanguageContext";

function App() {
  console.log("APP render");

  return (
    <LanguageContext>
      <>
        <Header />
        <UserProfile />
        <ControlsPanel />
      </>
    </LanguageContext>
  );
}

export default App;
