const form = document.querySelector('form');
const expense = document.getElementById('expense');
const ul = document.querySelector('ul');
//const alert = document.getElementById('alert');

// Captura o evento de submit do formulário para obter os valores 
form.onsubmit = (event) => {
  // Previne o comportamento padrão de recarregar a página
  event.preventDefault()

  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    created_at: new Date(),
  }
  // Chama a função que irá adicionar o item na lista.
  itemInputAdd(newExpense)
}
// Estrutura da função que adiciona um novo item na lista.
function itemInputAdd(newExpense) {
  try {
    // Cria o elemento de li para adicionar o item na lista (ul).
    const expenseItem = document.createElement("li")
    expenseItem.classList.add("list")


  } catch (error) {
    alert("Não foi possível atualizar a lista de compras")
    console.log(error)
    }
}