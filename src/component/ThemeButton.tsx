import { useThemeStore } from "../store/store";

const ThemeButton = () => {
  const changeTheme = useThemeStore((state) => state.toggleTheme);
  const theme = useThemeStore((state) => state.theme);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: Object.is(theme, "light") ? "#fff" : "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: Object.is(theme, "light") ? "#000" : "#fff" }}>
        current Theme:{theme}
      </h1>
      <button
        onClick={changeTheme}
        style={{
          color: Object.is(theme, "light") ? "#000" : "#fff",
          width: 150,
          height: 35,
          fontSize: 18,
          borderWidth: 1,
          borderColor: Object.is(theme, "light") ? "#000" : "#fff",
          borderRadius: 10,
          marginTop: 10,
          backgroundColor: Object.is(theme, "light") ? "#fff" : "#000",
          cursor: "pointer",
        }}
      >
        შეცვალე თემა
      </button>
    </div>
  );
};

export default ThemeButton;
