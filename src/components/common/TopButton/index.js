import React, { useEffect } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import "./styles.css"; 

function TopButton() {
  useEffect(() => {
    const mybutton = document.getElementById("top-btn");

    const scrollFunction = () => {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <div
      className="topp-btn"
      id="top-btn"
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
    >
      <KeyboardDoubleArrowUpIcon />
    </div>
  );
}

export default TopButton;