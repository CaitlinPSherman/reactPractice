import React, { useState, useEffect } from 'react';

const Printer = () => {
  const [inputText, setInputText] = useState('');
  useEffect(() => {
    console.log(inputText);
  }, [inputText]);

  return (
    <div className="section">
      <input
        placeholder="text to print here"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></input>
    </div>
  );
};

export default Printer;
