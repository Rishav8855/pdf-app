// src/App.js
import React, { useState } from 'react';
import TextToPdf from './TextToPdf';

const App = () => {
  const [textContent, setTextContent] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setTextContent(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {textContent && <TextToPdf textContent={textContent} />}
    </div>
  );
};

export default App;
