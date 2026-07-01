
// import React, { useState } from 'react';

import { useState } from 'react';

import './index.css'
import CompoA from './components/CompoA';


const App = () => {
  // let [count, setCount] = React.useState();
  // let [count, setCount] = useState(0);
  // let [email, setEmail] = useState();
  // let [name, setName] = useState();
  let [isDark, setIsDark] = useState(false);

  // let increase = () => {
  //   setCount(count + 1);
  // };

  
  // let decrease = () => {
  //   if(count > 0)
  //   setCount(count - 1);
  // }

  // let test = (e) => {
  //   console.log('e',e.target.value);
    
  // }

  // let handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log('name',name);
  //   console.log('email', email);
    
    
    
  // }

  console.log('page render')

  return (
     <div>
        {/* <h3>Counter App</h3>
        <p>{count}</p> */}
        {/* <button onClick={() => setCount(count + 1)}>Increase</button> */}
        {/* <button onClick={() => count > 0 && setCount(count - 1)}>Decrease</button> */}
        
        {/* <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => count > 0 && setCount(count - 1)}>Decrease</button> */}

        {/* <h3>Two way data binding</h3>
        <p>{email}</p>
        <input type="text" onChange={(e) => setEmail(e.target.value)} /> */}

        {/* <form onSubmit={handleSubmit}>
       <input type="text" value={name} 
       onChange={(e) => setName(e.target.value) } />
       <input type="text" value={email}
        onChange={(e) => setEmail(e.target.value) } />
       <button type='submit'>Register</button>
       </form> */}

      <CompoA isDark={isDark} setIsDark={setIsDark} />




     </div>
  );
};

export default App;
