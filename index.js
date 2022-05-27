
const createNewExpense = (date, amount, type, motif) => {
    const newExpense = document.createElement('tr')
    newExpense.classList.add('expense')

    const ExpenseDate = document.createElement('td')
    ExpenseDate.classList.add('#date')
    ExpenseDate.innerText = date
    newExpense.appendChild(ExpenseDate)

    const ExpenseAmount = document.createElement('td')
    ExpenseAmount.classList.add('#amount')
    ExpenseAmount.innerText = amount
    newExpense.appendChild(ExpenseAmount)

    const ExpenseType = document.createElement('td')
    ExpenseType.classList.add('#type')
    ExpenseType.innerText = type
    newExpense.appendChild(ExpenseType)

    const ExpenseMotif = document.createElement('td')
    ExpenseMotif.classList.add('#motif')
    ExpenseMotif.innerText = motif
    newExpense.appendChild(ExpenseMotif)


    return newExpense
}

const handleSubmit = (event) => {
    event.preventDefault()
    const ExpenseDate = document.querySelector('#date').value
    const ExpenseAmount = document.querySelector('#amount').value
    const ExpenseType = document.querySelector('#type').value
    const ExpenseMotif = document.querySelector('#motif').value
    const newExpense = createNewExpense(ExpenseDate, ExpenseAmount, ExpenseType, ExpenseMotif)
    document.querySelector('#expenses').appendChild(newExpense)
    resetForm()
}