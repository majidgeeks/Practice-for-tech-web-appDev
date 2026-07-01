import CompoA from "./CompoA";


const CompoB = ({isDark, setIsDark}) => {
    console.log('isDark in compo B',isDark);
    
    return(
        <div>
          <h2>this is component B </h2>
          {/* <CompoA userName={userName}  /> */}
          <button onClick={() => setIsDark(true)}>Dark Mode</button>
          <button onClick={() => setIsDark(false)}>Light Mode</button>

        </div>
    )
};

export default CompoB;