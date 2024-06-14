import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import "./styles.css";

export default function ToggleComponents({ priceType, handlePriceTypeChange }) {
  return (
    <div className="toggle-component">
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={(e) => {
          handlePriceTypeChange(e);
        }}
        sx={{
          "&.Mui-selected": {
            color: "var(--white)",
          },
          borderColor: "var(--white)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid var(--white)",
            borderColor: "var(--white)  ",
            color: "var(--white)  ",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--white) ",
          },
        }}
      >
        <ToggleButton value="prices">Prices</ToggleButton>
        <ToggleButton value="market_caps">Market Cap</ToggleButton>
        <ToggleButton value="total_volumes">Total Volume</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
