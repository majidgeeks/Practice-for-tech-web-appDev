import { useState } from "react";
import CompoB from "./CompoB";


const CompoA = ({isDark, setIsDark}) => {
    
    console.log('isDark in compo A',isDark);
    
    

    return(
        <div>
           {/* <h2>{name}</h2>  */}
          <h2 style={{backgroundColor:`${isDark ? 'black' : 'white'}`, color:`${isDark ? 'white' : 'black'}`}}>this is component A hello  </h2>
          <CompoB isDark={isDark} setIsDark={setIsDark} />
        </div>
    )
};

export default CompoA;