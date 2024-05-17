import React from 'react';

export default function Header({id,className}){
    return (

        <div id={id} >


                    <label htmlFor="initial investment">INITIAL INVESTMENT</label>
                    
                    <input type="number" className={className}/>
          
                    <label htmlFor="annual investment">ANNUAL INVESTMENT</label>
                    
                    <input type="number" className={className}/>

                    <label htmlFor="expected return">EXPECTED RETURN</label>
                
                    <input type="number" className={className}/>

                    <label htmlFor="duration">DURATION</label>
                    
                    <input type="number" className={className}/>
        </div>
        

    )
}