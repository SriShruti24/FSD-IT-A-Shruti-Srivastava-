import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import Buttons from './components/Buttons.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [cardWidth, setCardWidth] = useState(200)
  const [cardHeight, setCardHeight] = useState(250)
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        console.log(json)     // your original line kept
        setProduct(json)      // added to show data in UI
      })
  }, [])

  return (
    <div className="page-container">
      <Header />

      <main className="main-content">
        <div className="card-container">
          {product && (
            <Card
              width={cardWidth}
              height={cardHeight}
              name={product.title}
              age={`$${product.price}`}
              image={product.image}
            />
          )}
        </div>

        <Buttons
          colInc={() => setCardWidth(w => w + 20)}
          colDec={() => setCardWidth(w => Math.max(120, w - 20))}
          rowInc={() => setCardHeight(h => h + 20)}
          rowDec={() => setCardHeight(h => Math.max(150, h - 20))}
        />
      </main>

      <Footer />
    </div>
  )
}

export default App
