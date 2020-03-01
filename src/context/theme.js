// const white = "#FFFFFF";
// const black = "#161617";
// const gray = "#F9F9F9";

const themeLight = {
  background: "#F9F9F9",
  body: "#121212",
  container: "",
  plus: "#2ecc71",
  minus: "#B00020",
  button: "#f5ba3a",
  hover: "#6200EE"
};

const themeDark = {
  background: "#525354",
  body: "#FFFFFF",
  container: "#121212",
  plus: "#03DAC6",
  minus: "#CF6679",
  button: "#03DAC6",
  hover: "#BB86FC"
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;
