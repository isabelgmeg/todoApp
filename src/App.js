import { useState } from 'react'
import { v4 as idGenerator } from 'uuid';


function App() {

// HOOK USE STATE
//recibe el Value y la función para cambiarlo. El useState es de react
//useState recibe al principio un string vacío ya que no existe texto al principio('')
//useState= hook de react 

//variable que representa al estado [text] y que va a ser modificado (pisado)
//funcion que modifica el estado que está en la posicion 0 [setText]. Set se usa ya que react usa clases de js. 
// Esto es una funcion callback, por si no estás seguro del estado =>setText((currentState)=>[currentState, functionState])

//HOOK USE EFFECT
//se utiliza para cambiar estados asincronos. 

//const [a, setA] = useState('')

//useEffect(()=>{},[])

//useEffect(()={setx[x+a],[a]})=> cuando la a sea moficidada en otro set, comprueba el set previo como un callback

//si solo pones la funcion y no hay array, siempre se va a ejecutar. Si el segundo argumento 
//eL segundo argumento es para indicarle que la función definida tiene que modificarse si se modifica el estado del dicho argumento. 
//Es decir, si se cambia [x], se ejecuta la función del primer argumento.
//se va a ejecutar siempre que haya un render. Si actualizas 7 estados diferentes se actualizará este estado 7 veces
//por lo tanto si pones un array vacío solo se ejecturá una vez []. El useEffect no se renderiza.
//Cuando el useEffect tiene un return es para controlar las funciones que no están bajo el control de use Effect. Es como si cauterizaras los posibles efectos de funciones que no pertenecen a react haciendo un return





const [text, setText] = useState('')

//useState recibe un array vacío que será el estado de la lista cuando está vacía.
const [todoList, setTodo] = useState([])



// const handleClick = unit => setValue(value + unit)
const handleChange = event => setText(event.target.value)

const removeInputText = () =>{
  setText('')
}

const addTodo = () => {
  const newTodoList = todoList.concat({id:idGenerator() ,text}) //esto es igual a [...todoList, text]
  setTodo(newTodoList)
  removeInputText()
}

const handleRemove = valueToBeRemoved => setRemove(valueToBeRemoved)

const setRemove = (value) => {
   const newRemovedList = todoList.filter(item => item.id !== value)
   console.log(newRemovedList)
   setTodo(newRemovedList)
}

//console.log(text)
//console.log('todo list ', todoList)
  return (
    <section id="app">
      <div><header><h1 id="tittle">Todo List 👽✌️</h1></header></div>
      <div id="container" className="container">
    <input id="inputTodo" onChange={handleChange} value={text}/>
    <div></div>
    <button id="button-regular" onClick={addTodo}>Add ✌️</button>
    <button id="button-regular" onClick={removeInputText}>Clean 🗑</button>
      </div>
      <div>
        <ul>
          <div>
            {
            todoList.map((todo, index)=>
            
            <div id="todoContainer"><li id="todo" key={index}>
              <p>{todo.text}</p>
              <button id="doneButton" onClick={()=>handleRemove(todo.id)}>Done! 👍</button>
              </li></div>)
            }
           
          
          </div>
        </ul>
      </div>

    </section>
  )
}


export default App