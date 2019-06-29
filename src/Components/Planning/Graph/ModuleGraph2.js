import React from 'react';
import * as d3 from 'd3';

class ModuleGraph extends React.Component {
    constructor(props) {
        super();
        this.state= {
            nodes: props.nodes,
            links: props.links
        }
        this.drawGraph = this.drawGraph.bind(this);
    }

    drawGraph() {
        const data = [1,2,3,4];
        const svg = d3.select(this.refs.Graph).append("svg").attr("width", 700).attr("height", 200);
        svg.append("rect").attr('x', 20).attr('y', 20).attr("width", 50).attr("height", 100);
    }

    componentDidMount() {
        this.drawGraph();
    }

    render() {
        return (
            <div class="Graph" ref="Graph">
            </div>
        )
    }
}

export default ModuleGraph;