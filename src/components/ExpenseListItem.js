import React from "react";
import {Link} from "react-router-dom";
//desc, amount. createdAt
const ExpenseListItem = ({id,description,amount,createdAt}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <Link to={`/edit/${id}`}>edit expense</Link>
    </div>
);

export default ExpenseListItem;