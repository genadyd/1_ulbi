import React, {useState} from 'react';

function ControlledInput(props) {
    const [value, setValue] = useState('')
    const inputOnInput = (e) => {
        setValue(e.target.value)
    }
    return (
        <>
            <h3>{value}</h3>
          <input
              type={"text"}
              onInput={(e)=>inputOnInput(e)}
              defaultValue={value}/>
        </>
    );
}

export default ControlledInput;
