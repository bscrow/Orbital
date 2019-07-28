import React from 'react';
// import Timeline from '../Timeline/Timeline';
import { Graph } from 'react-d3-graph';
import { testData, testSOCData, myConfig } from '../Graph/GraphConfig';

class FASS extends React.Component {
    // constructor(props) {
    //     super(props)
    //     const config = myConfig;
    //     const data = testData;
    //     this.state = {config, data};
    // }

    constructor() {
        super()
        const config = myConfig;
        const data = testSOCData;
        this.state = { sidebarOpen: false, config, data }
        this.drawUI = this.drawUI.bind(this)
    }

    drawUI() {
        var format = <div class="FASS">
                {/* <Timeline className="FASS" data={this.state.data} title="Faculty of Arts and Social Sciences" buttonClick={this.props.buttonClick}/> */}
                <Graph ref="graph" {...{
                    id: "graph",
                    data: this.state.data,
                    config: this.state.config,
                    onClickNode: this.onClickNode,
                    onDoubleClickNode: this.onDoubleClickNode,
                    onClickGraph: this.onClickGraph,
                }} />
            </div>;
        return format;
    }

    componentDidMount() {
        this.drawUI()
    }

    onClickGraph = () => console.info("Clicked the graph");

    onClickNode = id => {
        window.open(`https://nusmods.com/modules/${id}`, id);
        // this.moreVerboseNodeSVG(id);
    };
     
    onRightClickNode = id => {
        this.moreVerboseNodeSVG(id);
    };

    moreVerboseNodeSVG = id => {
        Object.assign(this.state.data.nodes[id], {svg : "http://marvel-force-chart.surge.sh/marvel_force_chart_img/marvel.png"} )
    };

    render() {


        return (
            this.drawUI()
        )
        // return (
        //     <div>
        //         <Graph ref="graph" {...graphProps} />
        //     </div>
            
        // )
    }
    
}
export default FASS;