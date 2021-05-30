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

  console.log(patientList);

  return (
    <Container>
      <h1>Patient List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
