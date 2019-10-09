import React, { Component } from 'react';
import Block from './Block';

export default class UserBoard extends Component {
    renderBlock(i){
        console.log("RENDERED \n")
        return <Block value={this.props.blocks[i]}
        onClick={()=>this.props.onClick(i)}
        />
    }
    render() {
        return (
            <div>
                <div className="border-row">
                    {this.renderBlock(0)}
                    {this.renderBlock(1)}
                    {this.renderBlock(2)}
                </div>
                <div className="border-row">
                    {this.renderBlock(3)}
                    {this.renderBlock(4)}
                    {this.renderBlock(5)}
                </div>
                <div className="border-row">
                    {this.renderBlock(6)}
                    {this.renderBlock(7)}
                    {this.renderBlock(8)}
                </div>
                
            </div>
        )
    }
}
