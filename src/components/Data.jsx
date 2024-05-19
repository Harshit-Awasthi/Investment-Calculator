import React from 'react';
import {calculateInvestmentResults,formatter} from '../util/investment.js';
// year, Investment Value, Interest(Year), Total interest, Invested capital
export default function Data({id,value}){



    let content=calculateInvestmentResults(value);
    console.log(typeof content);
    if (!Array.isArray(content)) {
        console.log('calculateInvestmentResults did not return an array:');
        content = [];
      }

    return (

        <div >
            <table id={id}>
                <thead>
                    <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total interest</th>
                    <th> Invested capital</th>
                    </tr>
                        
                </thead>
                <tbody>
                {content.map((data,index)=>(<tr key={index}>

              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(data.annualInvestment)}</td>
              <td>{formatter.format(data.annualInvestment)}</td>
                                

                </tr>))}
                </tbody>
            </table>
        </div>

    )
}