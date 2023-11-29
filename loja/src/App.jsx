import './App.css'
import { useState, useEffect } from 'react'
import  { useFetch } from './hooks/useFetch'


const url = 'https://fakestoreapi.com/products'
function App() {
  const {data: items}= useFetch(url);
  console.log(items)

  return (
    <>
      <div>
          <h1>Lista de Produtos</h1>

          <ul>{/*exibir produtos*/}
            {items && items.map((product) => {
              return(
                <li key={product.id}>
                  {product.title} - ${product.price}
                  <img src={product.image} alt="" />
                </li>
              )
            })}
          </ul>

          <div className='add-product'>
            <form>
              <label>
                Nome do produto:
                <input type="text" name='name'/>
              </label>

              <label>
                Preço do produto:
                <input type="numebr" name='price'/>
              </label>

              <input type="submit" value="Add" />
            </form>
          </div>
      </div>
    </>
  )
}

export default App
