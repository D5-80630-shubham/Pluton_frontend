import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./dashboardComponent/Title";
import NavbarComponent from "../../components/navbar";
import Footer from "../../components/footer";
import { getAllAppliedLoan } from "../services/userService";
import loading from '../../assets/loading screen/loading_gif.gif'

const SanctionedLoan = () => {
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = sessionStorage.getItem("userid");
    const token = sessionStorage.getItem("token");

    const fetchData = async () => {
      try {
        const userData = await getAllAppliedLoan(id, token);
        setResult(userData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>
      <img src={loading} alt="Loading"></img>
    </div>;
  }

  if (!result) {
    return <div>Error: Unable to fetch user profile.</div>;
  }



  return (
    <>
    <NavbarComponent />
    <div className="container table-responsive">
      <br></br>
      <Title>My Applications</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
              <TableCell>loan Type</TableCell>
              <TableCell>Requested Amount</TableCell>
              <TableCell>Interest Rate</TableCell>
              <TableCell>Loan Term</TableCell>
              <TableCell>Application Date</TableCell>
              <TableCell>Approval Status</TableCell>
              <TableCell>Approval Date</TableCell>
              <TableCell>Denial Reason</TableCell>
              <TableCell>Credit Score</TableCell>
              <TableCell>Comments</TableCell>
              <TableCell>Application Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {result.map((row) => (
            <TableRow key={row.loanApplicationId}>
              <TableCell>{row.loanType}</TableCell>
              <TableCell>{row.requestedAmount}</TableCell>
              <TableCell>{row.interestRate}</TableCell>
              <TableCell>{row.loanTerm}</TableCell>
              <TableCell>{row.applicationDate}</TableCell>
              <TableCell>{row.approvalStatus}</TableCell>
              <TableCell>{row.approvalDate}</TableCell>
              <TableCell>{row.denialReason}</TableCell>
              <TableCell>{row.creditScore}</TableCell>
              <TableCell>{row.comments}</TableCell>
              <TableCell >{row.applicationStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    <Footer />
    </>
  );
};

export default SanctionedLoan;
