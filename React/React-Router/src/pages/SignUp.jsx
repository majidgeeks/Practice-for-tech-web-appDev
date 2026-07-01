
import Input from '@mui/joy/Input';
import { useState } from 'react';



const SignUp = () => {
    let [email, setEmail] = useState('');
    let [pass, setPass] = useState('');

    return(
        <div style={{display:'flex',  flexDirection:'column', width:500, justifyContent:'center',}}>
            <h2>Sign Up</h2>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <p style={{textAlign:'-khtml-left'}}>Email : </p>
            <Input onChange={(txt) => setEmail(txt)} value={email}
             size='lg' color="primary"  />
            </div>
            <div style={{display:'flex', justifyContent:'space-between', marginTop:10}}>
            <p>Password : </p>
            <Input size='lg' color="primary" onChange={(txt) => setPass(txt)} value={pass} />
            </div>
        </div>
    )
};

export default SignUp;