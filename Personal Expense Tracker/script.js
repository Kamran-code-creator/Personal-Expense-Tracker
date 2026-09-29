const form = document.querySelector(".PE-form");

const expense = document.querySelector("#expense");

const description = document.querySelector("#description");

const amount = document.querySelector("#amount");

const date = document.querySelector("#date");

const category = document.querySelector("#category");

const expenseContainer = document.querySelector(".expenses");

const totalElement = document.querySelector(".total");

const expenses = [];

const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];

expenses.push(...savedExpenses);

const saveTotal = expenses.reduce(function(sum,expense){
    return sum + expense.amount;
}, 0);

totalElement.textContent = `Total: $${saveTotal.toLocaleString()}`;

savedExpenses.forEach(function(expenseData){
    const expenseItem = document.createElement("div");
    expenseItem.classList.add("expense-item");
    
    const savedExpenseText = document.createElement("h3");
    savedExpenseText.textContent = expenseData.expense;
    
    const savedDescription = document.createElement("p");
    savedDescription.textContent = expenseData.description;
   
    const savedAmount = document.createElement("p");
    savedAmount.textContent = `Amount: $${expenseData.amount}`;
   
    const savedDate = document.createElement("p");
    savedDate.textContent = `Date: ${expenseData.date}`;

    const savedCategory = document.createElement("p");
    savedCategory.textContent = `Category: ${expenseData.category}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function(){
        expenses.splice(expenses.indexOf(expenseData), 1);
        localStorage.setItem("expenses", JSON.stringify(expenses));
        expenseItem.remove();

    const total = expenses.reduce(function(sum, expense){
        return sum + expense.amount;
    }, 0);

    totalElement.textContent = `Total: $${total.toLocaleString()}`;
    });

    expenseItem.appendChild(savedExpenseText);
    expenseItem.appendChild(savedDescription);
    expenseItem.appendChild(savedAmount);
    expenseItem.appendChild(savedDate);
    expenseItem.appendChild(savedCategory);
    expenseItem.appendChild(deleteButton);
    expenseContainer.appendChild(expenseItem);
});

form.addEventListener("submit", function(event){
    event.preventDefault();

    const expenseData = {
        expense: expense.value,
        description: description.value,
        amount: Number(amount.value),
        date: date.value,
        category: category.value
    };

    expenses.push(expenseData);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    const total = expenses.reduce(function(sum, expense){
       return sum + expense.amount; 
    }, 0);

    totalElement.textContent = `Total: $${total.toLocaleString()}`;

    const expenseItem = document.createElement("div");

    expenseItem.classList.add("expense-item");

    expenseItem.dataset.amount = expenseData.amount;

    const expenseText = document.createElement("h3");

    const expenseDescription = document.createElement("p");

    expenseDescription.textContent = expenseData.description;

    const expenseAmount = document.createElement("p");

    expenseAmount.textContent = `Amount: $${expenseData.amount}`;

    const expenseDate = document.createElement("p");

    expenseDate.textContent = `Date: ${expenseData.date}`;

    const expenseCategory = document.createElement("p");

    expenseCategory.textContent = `Category: ${expenseData.category}`;

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.addEventListener ("click", function(){
        expenses.splice(expenses.indexOf(expenseData),1);
        expenseItem.remove();

        localStorage.setItem("expenses", JSON.stringify(expenses));

        const total = expenses.reduce(function(sum, expense){
          return sum + expense.amount;  
        }, 0);

        totalElement.textContent = `Total: $${total.toLocaleString()}`;
    });

    expenseText.textContent = expenseData.expense;

    expenseItem.appendChild(expenseText);
    expenseItem.appendChild(expenseDescription);
    expenseItem.appendChild(expenseAmount);
    expenseItem.appendChild(expenseDate);
    expenseItem.appendChild(expenseCategory);
    expenseItem.appendChild(deleteButton);

    expenseContainer.appendChild(expenseItem);

    form.reset();

});




