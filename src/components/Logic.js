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
      const history = this.state.history.slice(0,this.state.stepNumber+1)
      const current = history[history.length-1];
      const blocks = current.blocks.slice();
      blocks[i] = this.state.xIsNext?'X':'O';
      this.setState({
        history: history.concat({
          blocks: blocks
        }),
        xIsNext: !this.state.xIsNext,
        stepNumber: history.length

      })
      console.log(blocks)
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
