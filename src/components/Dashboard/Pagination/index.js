import React from "react";
import "./styles.css";

import Pagination from "@mui/material/Pagination";

export default function PaginationComponent({ page, handlePageChange }) {
  return (
    <div className="pagination-div">
      <Pagination
        sx={{
          "& .MuiPaginationItem-text": {
            color: "var(--white) !important",
            border: "2px solid var(--grey)",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important",
            color: "var(--white) !important"

          },
          "& .Mui-selected  ": {
            backgroundColor: "var(--blue) !important",
            borderColor: "var(--white) !important",
            color: "var(--white) !important"
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}
        count={10}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}
