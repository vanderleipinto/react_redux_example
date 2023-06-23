import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useAppSelector } from "./redux/hooks/useAppSelector";

import { useDispatch } from "react-redux";
import { setName, setAge } from "./redux/reducers/userReducer";
import { setThemeStatus } from "./redux/reducers/themeReducer";

function App() {
  const user = useAppSelector((state) => {
    return state.user;
  });

  const theme = useAppSelector((state) => state.theme);

  const dispatch = useDispatch();

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };
  const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAge(parseInt(e.target.value)));
  };

  const handleSwitchTheme = () => {
    theme.status === "light"
      ? dispatch(setThemeStatus("dark"))
      : dispatch(setThemeStatus("light"));
  };

  return (
    <div>
      Meu nome é: {user.name} e tenho {user.age} <br />
      Tema: {theme.status}
      <hr />
      <input type="text" onChange={handleNameInput} value={user.name} />
      <hr />
      <input type="text" onChange={handleAgeInput} value={user.age} />
      <hr />
      <button onClick={handleSwitchTheme}>Switch Theme</button>
    </div>
  );
}

export default App;
