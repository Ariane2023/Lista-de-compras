const preLoadImages = ["assets/checked.svg", "assets/checkbox_default.svg"];

preLoadImages.forEach((imageSrc) => {
  const img = new Image();
  img.src = imageSrc;
});

const form = document.querySelector("form")
const expense = document.getElementById("expense");
//const ul = document.querySelector('ul');
//const alert = document.getElementById('alert');

// Seleciona os elementos da lista.
const expenseList = document.querySelector("ul")

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
  expenseAdd(newExpense)
}
// Estrutura da função que adiciona um novo item na lista.
function expenseAdd(newExpense) {
  try {
    // Cria o elemento de li para adicionar o item na lista (ul).
    const expenseItem = document.createElement("li")
    expenseItem.classList.add("list")

    // Cria o ícone de check no item da lista.
    const expenseCheckbox = document.createElement("img")
    expenseCheckbox.classList.add("check")
    expenseCheckbox.setAttribute("src", "assets/checkbox_defaut.svg")
    expenseCheckbox.setAttribute("alt", "checkbox")

    // Cria a info do item da lista.
    const expenseInfo = document.createElement("div")
    expenseInfo.classList.add("expense-info")

    // Cria o nome da despesa.
    const expenseName = document.createElement("strong")
    expenseName.textContent = newExpense.expense

    // Adiciona nome e categoria na div das informações
    expenseInfo.append(expenseName)

    // No projeto refunto, o professor criou nesse espaço a categoria do item, o cifrão R$ e o preço, eu pulei essa parte porque meu projeto não precisa. FIQUE ATENTA!

    // Cria o ícone remover.
    const removeIcon = document.createElement("img")
    removeIcon.classList.add("remove-icon")
    removeIcon.setAttribute("src", "assets/remove-icon.svg")
    removeIcon.setAttribute("alt", "remover")

    // Adiciona as informações no item.
    expenseItem.append(expenseCheckbox, expenseInfo, removeIcon)

    // Adiciona o item na lista.
    expenseList.append(expenseItem)

    // Limpa o formulário para adicionar um novo item
    formClear()

  } catch (error) {
    alert("Não foi possível atualizar a lista de compras")
    console.log(error)
    }
}

const alertBox = document.getElementById('alert'); // Seleciona o alerta

// Função para exibir o alerta por um tempo
function showAlert() {
  alertBox.style.display = 'flex';  // Torna visível
  setTimeout(() => {
    alertBox.style.display = 'none'; // Oculta após 2 segundos
  }, 2000);
}

// Evento que captura o clique no checkbox da lista
expenseList.addEventListener("click", function (event) {
  // Verifica se o elemento clicado é o checkbox
  if (event.target.classList.contains("check")) {
    event.stopPropagation()
    const checkbox = event.target; // O elemento clicado é o checkbox

    // Verifica qual imagem está atualmente sendo exibida
    if (checkbox.src.endsWith("checkbox_default.svg")) {
      // Se for a imagem padrão, muda para a imagem marcada
      checkbox.src = "assets/checkbox_default.svg";
      
    } else {
      // Se for a imagem marcada, volta para a imagem padrão
      checkbox.src = "assets/checked.svg";
    }
  }
});

// Evento que captura o clique nos itens da lista
expenseList.addEventListener("click", function (event) {
  // Verifica se o elemnto clicado é o icone de remover.
  if (event.target.classList.contains("remove-icon")) {
    // Obtem a li pai do elemento clicado
    const item = event.target.closest(".list")
    //Remove o item da lista
    item.remove()

    showAlert(); // Exibe o alerta temporariamente
  }
})

// Limpa o formulário
function formClear(){
  // Limpa o input
  expense.value = ""

  expense.focus()

}