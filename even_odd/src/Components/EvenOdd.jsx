import React, { useState } from 'react'
import './EvenOdd.css'

const EvenOdd = () => {
    const [input, setInput] = useState("")
    const [res, setResult] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const checkEvenOrOdd = () => {
        setResult(null);
        setLoading(true);
        setTimeout(() => {
            const parsed = parseInt(input, 10);
            if (isNaN(parsed)) {
                setResult("Please enter a valid number");
            }
            else {
                setResult(`The number ${parsed} is ${parsed % 2 === 0 ? 'even' : 'odd'}.`)
            }
            setInput("")
            setLoading(false)
        }, 1000)
    }

    return (
        <div className="even-odd-container" data-testid="even-odd-container" >
            <h1 className="title" data-testid="title">Even or Odd Checker</h1>

            <input
                className="number-input"
                type="text"
                placeholder="Enter a number"
                onChange={handleInputChange}
                value={input}
                data-testid="title"
            />

            <button className="check-button"
                onClick={checkEvenOrOdd}
                data-testid="title">
                Check
            </button>

            <div className="result-area" >
                {
                    loading ?
                        (<div className="loading" data-testis="loading">Checking...</div>)
                        : res !== null ?
                            (<div className="result" data-testid="result">{res}</div>)
                            : null
                }
            </div>
        </div>
    )
}

export default EvenOdd