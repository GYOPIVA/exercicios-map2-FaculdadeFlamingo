//exercicio 1
const cursos = [
    {id: 1, titulo: "JavaScript"},
    {id: 2, titulo: "Python"},
    {id: 3, titulo: "Java"}
]

const tituloCurso = cursos.map(curso => curso.titulo)
console.log(`Lista de cursos: ${tituloCurso}`)

//exercicio 2
const produtos =[
    {nome:"Celular Samsung", preco: 3500},
    {nome:"Celular Motorola", preco: 1500},
    {nome:"Celular Xiaomi", preco: 2000}
]

const dadosProduto = produtos.map(produto => 
    `Produto: ${produto.nome} | Preço: R$${produto.preco}`
)
console.log(dadosProduto)

//exercicio 3


const usuarios = [
  { nomeUsuario: "Ana", emailUsuario: "ana@email.com", idade: 25 },
  { nomeUsuario: "Carlos", emailUsuario: "carlos@email.com", idade: 30 },
  { nomeUsuario: "Giovany", emailUsuario: "giovany@email.com", idade: 22 }
];

Usuarios = (dadoUsuario) =>{
    return dadoUsuario.map(({ nomeUsuario, emailUsuario }) => {
        return `Nome: ${nomeUsuario}, Email: ${emailUsuario}`
    })
}
console.log(Usuarios(usuarios))

//exercicio 4
const numeros = [1,2,3,4,5,6,7,8,9,10]
const resultado = numeros.map(numero =>({
    valor: numero, par: numero % 2 === 0
}))
console.log(resultado)

//exercicio 5

const carros = {motor: {cavalos: 150}}

const {motor: {cavalos} } = carros
console.log(cavalos)

//exercicio 6

const idades = [15,20,17,50]
const verificarIdade = idades.map((idade, verificar) => {
    verificar = (idade< 18)? "Menor de idade" : "Maior de idade"
    return `idade: ${idade} é ${verificar}`
})

console.log(verificarIdade)

//exercicio 7

const numerosArray = [1, [2,3], 4]
const [, [dois,tres]] = numerosArray
console.log(dois,tres)

//exercicio 8

const listaProdutos = [
    {nome:"Celular", preco: 2500},
    {nome:"Nootbook", preco: 3200},
    {nome:"Fone de ouvido", preco: 200}
]

const descontoProduto = listaProdutos.map(({nome,preco}) => ({
    nome, preco: (preco * 0.9).toFixed(2)
})) 

console.log(descontoProduto)
//exercicio 9

const usuariosAlunos = [
  { id: 1, nome: "Ana", idade: 25, email: "ana@email.com" },
  { id: 2, nome: "Carlos", idade: 30, email: "carlos@email.com" },
  { id: 2, nome: "Giovany", idade: 24, email: "giovany@email.com" },
  { id: 2, nome: "Guilherme", idade: 22, email: "guigui@email.com" },
  { id: 3, nome: "Beatriz", idade: 22, email: "bia@email.com" }
];

const filtrar = usuariosAlunos.map(({id,nome}) => ({
    id,
    nome
}))
console.log(filtrar)

const numerosPorcentagem = [10,20,30,40,50]
const porcentagem = numerosPorcentagem.map((numero, posicao, arraycompleto)=>{
    let total = arraycompleto.reduce((soma,num) => soma + num, 0)
    return `${((numero / total) * 100).toFixed(1)}%`
})

console.log(porcentagem)