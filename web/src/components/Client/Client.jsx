import React, { useState } from 'react';
import greeting from 'src/services/greeting';

const Client = () => {
  const [greetingMsg, setGreetingMsg] = useState('');

  const handleGreet = async () => {

    const greetingResponse = greeting();
    setGreetingMsg(greetingResponse.message);
  };

  return (
    <div>
      <div>Greeting: {greetingMsg}</div>
      <button onClick={handleGreet}>Greet</button>
    </div>
  );
};

export default Client;