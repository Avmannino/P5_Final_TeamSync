import React, { useState } from 'react';
import '../Social.css'

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSend = () => {
        if (inputText.trim()) {
            setMessages([...messages, inputText]);
            setInputText('');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div>
            <div className='chat-window' style={{ height: '950px', width: '950px', overflow: 'hide', border: '1px solid black', marginBottom: '10px', marginRight: '100px', borderRadius: '110px', border:'1px solid red', backgroundColor: '#383838', zIndex:'9999' }}>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}

                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    style={{ marginRight: '4px', borderRadius: '25px', width: '500px', height: '75px', marginLeft: '15vw', marginTop:'50vh' }}
                />
                <button style={{ marginRight: '4px', borderRadius: '25px' }} onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
