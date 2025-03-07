# Lista de compras
O objetivo é que ao digitar um texto em um campo de entrada (input) e clicar em um botão, esse texto seja adicionado a uma lista não ordenada (ul) na sua página HTML.

Solução:

Para alcançar esse resultado, vamos utilizar JavaScript para manipular o DOM (Document Object Model) e adicionar os itens à lista.

Etapas:

## HTML:

1 - Criar um campo de entrada (input) para que o usuário digite o texto.
2 - Criar uma lista não ordenada (ul) onde os itens serão adicionados.

## JavaScript:

1 - Selecionar os elementos HTML usando seus IDs.
2 - Criar uma função que será chamada quando o botão de adicionar for clicado.
- Dentro da função:
3 - Obter o valor do campo de entrada.
4 - Criar um novo elemento de lista (li).
5 - Definir o texto do elemento li como o valor do campo de entrada.
6 - Adicionar o novo elemento li à lista ul.
7 - Limpar o campo de entrada para o próximo item.

## Explicação:

HTML:

O input com o ID newItem é onde o usuário digita o item.
A lista com o ID itemList é onde os itens serão exibidos.
JavaScript:

newItemInput e itemList são variáveis que armazenam as referências aos elementos HTML correspondentes.
A função addItem() é chamada quando o botão é clicado.
Dentro da função:
newItem armazena o valor digitado no campo de entrada.
Um novo elemento li é criado.
O texto do li é definido como o valor de newItem.
O li é adicionado à lista itemList.
O campo de entrada é limpo para o próximo item.
Como Funciona:

O usuário digita um item no campo de entrada.
Ao clicar no botão "Adicionar", a função addItem() é chamada.
A função cria um novo elemento de lista (li) com o texto digitado.
O novo elemento li é adicionado à lista ul.
O campo de entrada é limpo para que o usuário possa digitar o próximo item.