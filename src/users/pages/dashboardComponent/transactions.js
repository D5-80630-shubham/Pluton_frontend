import React, { useState, useEffect } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { getUserTransaction } from "../../services/userService";

function preventDefault(event) {
  event.preventDefault();
}

export default function Transaction() {
  const [result, setResult] = useState();

  useEffect(() => {
    const id = sessionStorage.getItem("userid");
    const token = sessionStorage.getItem("token");

    const fetchData = async () => {
      try {
        const userData = await getUserTransaction(id, token);
        setResult(userData);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchData();
  }, []);


  if (!result) {
    return <div>Error: Unable to fetch user profile.</div>;
  }

  return (
    <React.Fragment>
      <Title>Recent Transactions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Payment gateway</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log(result+' jndenn')}
          { result.map((row) => (
            <TableRow key={row.applicationId}>
              <TableCell>{row.transactionDate}</TableCell>
              <TableCell>{row.merchantType}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.transactionCategory}</TableCell>
              <TableCell align="right">₹{`${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more transactions
      </Link>
    </React.Fragment>
  );
}
