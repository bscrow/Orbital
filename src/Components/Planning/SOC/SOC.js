import React from 'react';
import SOCData from './SOCModulesData';
import Timeline from '../Timeline/Timeline';

class SOC extends React.Component {
    
    constructor() {
        super()
        this.state = { sidebarOpen: false }
        this.drawUI = this.drawUI.bind(this);
    }

    drawUI() {
        var format = <div class="SOC">
                <Timeline className="SOCFinal" data={SOCData} title="School of Computing" buttonClick={this.props.buttonClick}/>
            </div>;
        return format;
    }


    componentDidMount() {
        this.drawUI()
    }

    render() {
        return (
            this.drawUI()
        )
    }

}
export default SOC;