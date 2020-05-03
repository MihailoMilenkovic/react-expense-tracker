import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
//desc, amount. createdAt
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {numeral(amount / 100).format("$0,0.00")}
      -
      {moment(createdAt).format("Do MMMM YYYY")}
    </p>
    <Link to={`/edit/${id}`}>edit expense</Link>
  </div>
);

export default ExpenseListItem;
