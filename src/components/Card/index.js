import React from "react";
import "./style.css"
class Card extends React.Component {
    state = {

    };

    render() {
        return (
            <div className="card" onClick={() => this.props.handleCardClick(this.props.id)}>
                <div className="img-container">
                    <img alt={this.props.name} src={this.props.image}/>
                </div>
                <div className="content">
                    <p><strong>{this.props.name}</strong></p>
                </div>
                <span className="selected">
                    
                </span>
            </div>
        );
    }
}

export default Card;