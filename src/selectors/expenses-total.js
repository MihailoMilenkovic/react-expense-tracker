const getExpensesTotal = (expenses) => {
  const reducer = (accumulator, value) => accumulator + value;
  const costArray = expenses.map((expense) => expense.amount);
  return costArray.reduce(reducer, 0);
}

export default getExpensesTotal;