import React, { Component } from 'react'
import UserBoard from './UserBoard';
export default class Logic extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [
                { blocks: Array(9).fill(null)}
            ]
        }
    }
    handleClick(i)
    {
      console.log(i);
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];

        return (
           <div className="logic">
               <div className="logic-userboard">
               <UserBoard onClick={(i)=>this.handleClick(i)}
                   blocks={current.blocks}
                   />

               </div>
           </div>
        )

    }
}
