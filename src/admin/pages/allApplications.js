import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "../../components/navbar";
import Footer from "../../components/footer";
import loading from "../../assets/loading screen/loading_gif.gif";
import { getAllUserApplication } from "../services/adminServices";

const AllApplication = () => {
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    const fetchData = async () => {
      try {
        const userData = await getAllUserApplication(token);
        setResult(userData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <img src={loading} alt="Loading"></img>
      </div>
    );
  }

  if (!result) {
    return <div>Error: Unable to fetch All Applications</div>;
  }

  return (
    <>
      <NavbarComponent />
      <br />
      <div className="table-responsive">
        <table
          className="table table-bordered"
          id="dataTable"
          width="100%"
          cellspacing="0"
        >
          <thead>
            <tr>
              <th>Loan Type</th>
              <th>Requested Amount</th>
              <th>Interest Rate</th>
              <th>Loan Term</th>
              <th>Application Date</th>
              <th>Approval Status</th>
              <th>Approval Date</th>
              <th>Credit Score</th>
              <th>Comments</th>
              <th>Application Status</th>
              <th>Accept Application</th>
            </tr>
          </thead>
          <tbody>
            {result.map((application) => (
              <tr key={application.loanApplicationId}>
                <td>{application.loanType}</td>
                <td>{application.requestedAmount}</td>
                <td>{application.interestRate}</td>
                <td>{application.loanTerm}</td>
                <td>{application.applicationDate}</td>
                <td>{application.approvalStatus}</td>
                <td>{application.approvalDate}</td>
                <td>{application.creditScore}</td>
                <td>{application.comments}</td>
                <td>{application.applicationStatus}</td>
                <td>
                  {application.applicationStatus === "ACTIVE" && (
                    <>
                      <button className="btn btn-info" disabled>
                        Accept
                      </button>
                    </>
                  )}
                  {!(application.applicationStatus === "ACTIVE") && (
                    <>
                      <Link
                        to={"/admin/accept/" + application.loanApplicationId}
                      >
                        <button className="btn btn-info">Accept</button>
                      </Link>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default AllApplication;
