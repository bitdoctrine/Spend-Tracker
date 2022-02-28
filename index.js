const expenditure = [];
/*an expenditure is an object which represents instances of spending in key , value pairs. And each instance of spending contains other useful informations like date, time, amounts spent e.t.c */
const form = document.getElementById("add-form");
const addExpenseHandler = document.getElementById("submit");

addExpenseHandler.addEventListener("click", function (e) {
  e.preventDefault();

  const expensePrice = document.getElementById("price").value;
  const expenseName = document.getElementById("name").value;
  if (expenseName.length <= 0 || expensePrice.length <= 0) {
    alert("Name and Price are both required for this to work");
    return
  } else {

    const expenseData = {
      name: expenseName,
      price: expensePrice,
    };

    expenditure.push(expenseData);
    console.log(expenditure);
    form.reset();
  }
});
