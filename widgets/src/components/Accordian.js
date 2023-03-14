import React, { useState } from 'react'

const Accordian = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null);
    const [counter, setCounter] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index)
    }
    const handleCount = () => {
        setCounter(counter +1)
    }



    const renderedItems = items.map((item, index) => {
        const active = index===activeIndex ? 'active':''
        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title ${active}`} 
                    onClick={()=> onTitleClick(index)}
                 >
                    <i className='dropdown icon'></i>
                    {item.title}
                </div>
                <div className={`content ${active}`} >
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    return (
        <>        
            <div className='ui styled accordion'>{renderedItems}</div>
            {/* <button onClick={handleCount}>Click ME!</button>
            <h1> Counter value:{counter}</h1> */}
        </>

    )
}

export default Accordian