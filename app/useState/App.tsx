import React, {useState} from "react";

function numbers() {
    const[num , setnum] = useState(1);

    const addnumbers = () => {
        setnum(num + 1);
    };

    return (
        <div className="numbers">
            <div>numb: {num}</div>
            <button onClick={addnumbers}>click</button>
        </div>
    );
}
export default numbers;