import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";

function TableHeader({ allRowsSelected, selectedRows, setSelectedRows, currentRecords }) {
  return (
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox
          indeterminate={!allRowsSelected && selectedRows.length > 0}
          checked={allRowsSelected}
          onChange={() => {
            if (allRowsSelected) {
              setSelectedRows([]);
            } else {
              setSelectedRows([...currentRecords]);
            }
          }}
          className={allRowsSelected ? "header-checkbox" : ""}
        />
      </TableCell>
      <TableCell sx={{ fontSize: '20px' }}>Name</TableCell>
      <TableCell sx={{ fontSize: '20px' }}>Email</TableCell>
      <TableCell sx={{ fontSize: '20px' }}>Role</TableCell>
      <TableCell sx={{ fontSize: '20px' }}>Action</TableCell>
    </TableRow>
  );
}

export default TableHeader;
