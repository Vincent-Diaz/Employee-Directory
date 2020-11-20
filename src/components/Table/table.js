import React from "react";
import "./style.css";

function Table(props) {
  return (
    <div className="tableData mt-5">
    <table className="table table-dark">
      <thead>
        <tr>
          <th></th>
          <th className="hover">Name <i className="fas fa-sort" onClick={props.sortByName} ></i></th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody className="body">
        {props.results.map(data => (
          <tr className="tableInfo" key={data.login.uuid}>
            <td>
              <img className="photo" src={data.picture.medium} alt="employee" />
            </td>
            <td>{data.name.first + " " + data.name.last}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Table;