import { ThemeProvider, useTheme } from "./provider/ThemeProvider";

const TogglerTheme = () => {
  const { theme, handleClick } = useTheme();
  console.log('theme:', theme)
  // console.log('handleClick:', handleClick)
  return (
    <button onClick={handleClick} className="btn-toggler">
      {theme === "light"
        ? "🌙 Переключить на тёмную тему"
        : "☀️ Переключить на светлую тему"}
    </button>
  );
};

function App() {
  console.log('APP render');
  
  return (
    <div className="wrapper">
      <h1>Переключатель темы</h1>
      <TogglerTheme />
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}

export default App;
