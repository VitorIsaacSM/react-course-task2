import React from 'react';
import './Char.css'

export class Char extends React.Component {

    render() {
        return (
            <div className="char" onClick={this.props.deleteHandler}>
                {this.props.char}
            </div>
        );
    }
}