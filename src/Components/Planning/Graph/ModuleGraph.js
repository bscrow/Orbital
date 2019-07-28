import React from 'react';
import Node from '../Timeline/Node';

class ModuleGraph2 extends React.Component {
    constructor(props) {
        super();
        this.state= { }
        this.drawGraph = this.drawGraph.bind(this);
    }

    drawGraph() {
        const modules = this.props.data.modules.map(node => {
            return <Node name={node.name} id={node.id} require={node.require} equivalent={node.equivalent} addToTimeline={this.props.addToTimeline} removeFromTimeline={this.props.removeFromTimeline} findModule={this.props.findModule}/>

        })
        return modules;
    }

    componentDidMount() {
        this.drawGraph();
    }

    render() {
        return (
            <div class="DepartmentComponent">
                <h2 class="departmentName">{this.props.data.department}</h2>
                <div class="module">{this.drawGraph()}</div>
            </div>
        )
    }
}

export default ModuleGraph2;