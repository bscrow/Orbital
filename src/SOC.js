import React from 'react';
import SOCData from './SOCModulesData';
import Timeline from './Timeline';

class SOC extends React.Component {
    
    constructor() {
        super()
        this.state = {}
        this.drawUI = this.drawUI.bind(this)
    }

    drawUI() {
        var format = <div>
                <h1>School of Computing</h1>
                <Timeline data={SOCData}/>
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