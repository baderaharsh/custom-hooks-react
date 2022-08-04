import { useState, useEffect } from "react";

const useCounter = (forward = true) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (forward) {
                setCount((prevState) => prevState + 1)
            } else {
                setCount((prevState) => prevState - 1)
            }
            
        }, 1000)

        return () => {
            clearInterval(timer);
        }
    }, [forward])

    return count;
}

export default useCounter;