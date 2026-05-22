import { useState } from 'react';
import onBulb from '../../assets/onbulb.jpg';
import offBulb from '../../assets/offbulb.jpg';

const ToggleState = () => {
    let [isOn, setIsOn] = useState();

    let toggle = () => {
        setIsOn(!isOn);
    };

    return(
        <>
        <h2>Toggle state</h2>
        <h3>On Off Bulb</h3>
        
        <button onClick={toggle}>Switch</button>
        {/* {
         isOn ? (

             <img src={onBulb} alt="on bulb" />
            ):(

                <img src={offBulb} alt="off bulb" />
            )
        } */}

        <img src={isOn ? onBulb : offBulb} alt="on bulb" />
        
        </>
    )
};

export default ToggleState;