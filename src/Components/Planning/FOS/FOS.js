import React from 'react';
import Timeline from '../Timeline/Timeline';
import FOSData from './FOSModulesData';

class FOS extends React.Component {
    constructor() {
        super()
        this.state = { sidebarOpen: false }
        this.drawUI = this.drawUI.bind(this)
    }

    drawUI() {
        var format = <div class="FOS">
                <Timeline className="FOSFinal" data={FOSData} title="Faculty of Science" buttonClick={this.props.buttonClick}/>
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
export default FOS;