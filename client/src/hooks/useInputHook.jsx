import React, { useState } from "react";

const useInputHook = (defaultValue) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleInputChange = (e, defaultValue) => {
    setInputValue(e.target.value || defaultValue);
  };

  return [inputValue, handleInputChange];
};

export default useInputHook;
