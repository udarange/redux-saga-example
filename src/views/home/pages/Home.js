import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { fetchPatientDataAction } from "../redux/actions/homeAction";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { token } = useSelector((state) => state.loginReducer);
  const { patientList } = useSelector((state) => state.homeReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    // if (!token) {
    //   history.push("/login")
    // } else {
    dispatch(fetchPatientDataAction());
    // }
  }, [dispatch, history, token]);

  // console.log(patientList);

  return (
    <Container>
      <h1>Patient List</h1>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
        </thead>
        <tbody>
        {patientList.map((el, index) =>
          <tr>
            <td>{index + 1}</td>
            <td>{el.name?.first}</td>
            <td>{el.email}</td>
            <td>{el.gender}</td>
          </tr>
        )}
        </tbody>
      </Table>
    </Container>
  );
}
