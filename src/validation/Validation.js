import React from 'react';
import './Validation.css'

export class Validation extends React.Component {

    render() {
        return (
            <div>
                {this.props.textLength > 5 ? 
                    <p className="text-green">O texto é grande o suficiente</p> :
                    <p className="text-red">Texto muito pequeno</p>
                }
            </div>
        );
    }
}