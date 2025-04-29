
import React, { useState } from 'react';

const useInputHook = (defaultValue) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    return [inputValue, handleInputChange]
};

export default useInputHook;