import { useState } from 'react'


const ItemCount = () => {
    const [counter, setCounter] = useState(1)

    const add = () => {
        setCounter(counter + 1)
    }
    const take = () => {
        setCounter(counter - 1)
    }

    return (
        <div className="counter">
            <button className="counter__button" onClick={take}>-</button>
            <p className="counter__count">Prod. {counter}</p>
            <button className="counter__button" onClick={add}>+</button>
        </div>
    );
};

export default ItemCount