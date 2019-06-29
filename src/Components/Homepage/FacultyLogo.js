import React from 'react';

class FacultyLogo extends React.Component {
    constructor(props) {
        super();
        this.state = { 
            name: props.name,
            img: props.img,
            hovered: false,
            hoverImg: props.hoverImg
        };
        this.hoverOver = this.hoverOver.bind(this);
        this.hoverOut = this.hoverOut.bind(this);
    }

    hoverOver() {
        this.setState(prevState => {
            return {
                name: prevState.name,
                img: prevState.img,
                hovered: true,
                hoverImg: prevState.hoverImg
            }
        });
    }

    hoverOut() {
        this.setState(prevState => {
            return {
                name: prevState.name,
                img: prevState.img,
                hovered: false,
                hoverImg: prevState.hoverImg
            }
        });
    }

    render() {
        return (
            <div class="FacultyLogo" onMouseOver={this.hoverOver} onMouseLeave={this.hoverOut}>
            {this.state.hovered ? <h2>{this.state.name}</h2> : <img src={this.state.img} width="140px" height="140px"></img>}
            </div>
        )
    }
}

export default FacultyLogo;