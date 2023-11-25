import { useState } from "react";

type CountProps = {
    initialValue: number
}

const Counter = (props: CountProps) => {
    const { initialValue } = props
    
    // count는 현재 상태, setCount가 상태를 업데이트 하는 함수이다.
    const [count, setCount] = useState(initialValue)

    return (
        <div>
            <p>Count: {count}</p>
            {/* setCount를 호출해서 상태를 업데이트한다 */}
            <button onClick={() => setCount(count-1)}>-</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
        </div>
    )
}

export default Counter