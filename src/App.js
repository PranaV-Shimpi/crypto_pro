import React, { useEffect, useRef } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Coin from "./pages/CoinPage";
// import Compare from "./pages/Compare";
import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";
// import Watchlist from "./pages/Watchlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  const cursorRef = useRef(null);
  const cursorPointerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorPointer = cursorPointerRef.current;

    const handleMouseMove = (e) => {
      if (cursor && cursorPointer) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursorPointer.style.left = `${e.clientX}px`;
        cursorPointer.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseDown = () => {
      if (cursor && cursorPointer) {
        cursor.style.height = "0.5rem";
        cursor.style.width = "0.5rem";
        cursorPointer.style.height = "3rem";
        cursorPointer.style.width = "3rem";
      }
    };

    const handleMouseUp = () => {
      if (cursor && cursorPointer) {
        cursor.style.height = "0.3rem";
        cursor.style.width = "0.3rem";
        cursorPointer.style.height = "2rem";
        cursorPointer.style.width = "2rem";
      }
    };

    document.body.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mousedown", handleMouseDown);
    document.body.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mousedown", handleMouseDown);
      document.body.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="App">
      <div className="cursor" ref={cursorRef} id="cursor" />
      <div className="cursor-pointer" ref={cursorPointerRef} id="cursor-pointer" />
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            {/* <Route path="/coin/:id" element={<Coin />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/watchlist" element={<Watchlist />} /> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
