import React from 'react';
import {increment,decrement,incrementByAmount} from './src/utilis/CounterSlice'
import { useSelector,useDispatch } from 'react-redux';



const App=()=>{
    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()
    const handleClick=()=>{
 dispatch(increment())
    }
    const handleClick1=()=>{
        dispatch(decrement())}
        const handleClick2=()=>{
            dispatch(incrementByAmount(10))}
    
           
    return (
        <div>
           

            <div>
                <h5>{count}</h5>
                <button onClick={handleClick}>+</button>
                <button onClick={handleClick1}>-</button>
                <button onClick={handleClick2}>add by 10</button>
                
            </div>
            
        </div>
    )
}
export default App;