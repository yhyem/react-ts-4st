import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { LogIn, SignUp, UserList } from "./pages";
import { SWRConfig } from "swr";

const fetcher = async (url: string) => {
  const parsedUrl = url.startsWith("http") ? url : `${process.env.REACT_APP_API_URL}${url}`;
  const response = await fetch(parsedUrl);
  return await response.json();
};

function App() {
  return (
    <BrowserRouter>
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
        </Routes>
      </SWRConfig>
    </BrowserRouter>
  );
}

export default App;
