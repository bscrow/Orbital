import React from 'react';
import Data from './Data';
import ModuleGraph2 from '../Graph/ModuleGraph';
import Sidebar from 'react-sidebar';

class Timeline extends React.Component {
    constructor() {
        super();
        this.state = {
            data : Data,
            showModal : false,
            showTimeline: true,
            showSidebar: false
        };
        this.addToTimeline = this.addToTimeline.bind(this);
        this.removeFromTimeline = this.removeFromTimeline.bind(this);
        this.drawTableY1 = this.drawTableY1.bind(this);
        this.drawTableY2 = this.drawTableY2.bind(this);
        this.drawTableY3 = this.drawTableY3.bind(this);
        this.drawTableY4 = this.drawTableY4.bind(this);
        this.drawEmptyCell = this.drawEmptyCell.bind(this);
        this.findModule = this.findModule.bind(this);
        this.showTimeline = this.showTimeline.bind(this);
        this.hideTimeline = this.hideTimeline.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState(prevState => {
            return {
                sidebarOpen: open,
                data: prevState.data,
                showModal: false,
                showTimeline: true
            };
        });
    }

    showTimeline() {
        this.setState(prevState => {
            return {
                data: prevState.data,
                showModal: false,
                showTimeline: true,
                showSidebar: false
            }
        })
    }

    hideTimeline() {
        this.setState(prevState => {
            return {
                data: prevState.data,
                showModal: false,
                showTimeline: false,
                showSidebar: false
            }
        })
    }

    //Draws an empty cell containing a message (acts as a placeholder when timeline is empty)
    drawEmptyCell(msg) {
        return (
            <div class="cell">{msg}</div>
        )
    }

    //Adds <String> module, <Integer> year, <Integer> semester to the timeline
    addToTimeline(module, year, semester) {
        this.setState(prevState => {
            var updatedSemesterYear = 'y' + year + 's' + semester;
            var newState = { data : { } };
            for(var i = 1; i <= 4; i = i + 1) {
                for(var j = 1; j <= 2; j = j + 1) {
                    var semesterYear = 'y' + i + 's' + j;
                    if (semesterYear === updatedSemesterYear) {
                        newState.data[semesterYear] = prevState.data[semesterYear].map(x => x);
                        newState.data[semesterYear].push(module);
                    } else {
                        newState.data[semesterYear] = prevState.data[semesterYear].map(x => x);
                    }
                }
            }
            return newState;
        })
    }

    //Removes <String> module from the timeline
    removeFromTimeline(module) {
        this.setState(prevState => {
            var newState = { data : { } };
            for(var i = 1; i <= 4; i = i + 1) {
                for(var j = 1; j <= 2; j = j + 1) {
                    var semesterYear = 'y' + i + 's' + j;
                    var k = 0;
                    var temp = [];
                    while (k < prevState.data[semesterYear].length) {
                        if (!(prevState.data[semesterYear][k] === module)) {
                            temp.push(prevState.data[semesterYear][k]);
                        }
                        k++;
                    }
                    newState.data[semesterYear] = temp;
                }
            }
            return newState;
        })
    }

    //Finds and return the year and sem in the timeline returns: [year, semester]
    findModule(module) {
        var result = [ null, null ];
        for (var i = 1; i <= 4; i = i + 1) {
            for (var j = 1; j <= 2; j = j + 1) {
                const semesterYear = 'y' + i + 's' + j;
                for (var k = 0; k < this.state.data[semesterYear].length; k = k + 1) {
                    if (this.state.data[semesterYear][k] === module) {
                        result[0] = i;
                        result[1] = j;
                    }
                }
            }
        }
        return result;
    }

    //Draws table cell for Year 1 Sem 1 & 2
    drawTableY1() {
        return (
            [<tr>
                <th rowSpan="5">Year 1</th>
                <td>{this.drawEmptyCell(this.state.data.y1s1[0])}</td>
                <td>{this.drawEmptyCell(this.state.data.y1s2[0])}</td>  
            </tr>,
            <tr>
                <td>{this.drawEmptyCell(this.state.data.y1s1[1])}</td>
                <td>{this.drawEmptyCell(this.state.data.y1s2[1])}</td>
            </tr>,
            <tr>
                <td>{this.drawEmptyCell(this.state.data.y1s1[2])}</td>
                <td>{this.drawEmptyCell(this.state.data.y1s2[2])}</td>
            </tr>,
            <tr>
                <td>{this.drawEmptyCell(this.state.data.y1s1[3])}</td>
                <td>{this.drawEmptyCell(this.state.data.y1s2[3])}</td>
            </tr>,
            <tr>
                <td>{this.drawEmptyCell(this.state.data.y1s1[4])}</td>
                <td>{this.drawEmptyCell(this.state.data.y1s2[4])}</td>
            </tr>
            ]
        )
    }

    //Draws table cell for Year 2 Sem 1 & 2
    drawTableY2() {
        return (
            [<tr>
              <th rowSpan="5">Year 2</th>
              <td>{this.drawEmptyCell(this.state.data.y2s1[0])}</td>
              <td>{this.drawEmptyCell(this.state.data.y2s2[0])}</td>  
            </tr>,
            <tr>
                <td>{this.drawEmptyCell(this.state.data.y2s1[1])}</td>
                <td>{this.drawEmptyCell(this.state.data.y2s2[1])}</td>
            </tr>,
            <tr>
                <td>{this.drawEmptyCell(this.state.data.y2s1[2])}</td>
                <td>{this.drawEmptyCell(this.state.data.y2s2[2])}</td>
            </tr>,
            <tr>
                <td>{this.drawEmptyCell(this.state.data.y2s1[3])}</td>
                <td>{this.drawEmptyCell(this.state.data.y2s2[3])}</td>
            </tr>,
            <tr>
                <td>{this.drawEmptyCell(this.state.data.y2s1[4])}</td>
                <td>{this.drawEmptyCell(this.state.data.y2s2[4])}</td>
            </tr>
            ]
        )
    }

    //Draws table cell for Year 3 Sem 1 & 2
    drawTableY3() {
        return (
            [<tr>
              <th rowSpan="5">Year 3</th>
              <td>{this.drawEmptyCell(this.state.data.y3s1[0])}</td>
              <td>{this.drawEmptyCell(this.state.data.y3s2[0])}</td>  
            </tr>,
            <tr>
                <td>{this.drawEmptyCell(this.state.data.y3s1[1])}</td>
                <td>{this.drawEmptyCell(this.state.data.y3s2[1])}</td>
            </tr>,
            <tr>
                <td>{this.drawEmptyCell(this.state.data.y3s1[2])}</td>
                <td>{this.drawEmptyCell(this.state.data.y3s2[2])}</td>
            </tr>,
            <tr>
                <td>{this.drawEmptyCell(this.state.data.y3s1[3])}</td>
                <td>{this.drawEmptyCell(this.state.data.y3s2[3])}</td>
            </tr>,
            <tr>
                <td>{this.drawEmptyCell(this.state.data.y3s1[4])}</td>
                <td>{this.drawEmptyCell(this.state.data.y3s2[4])}</td>
            </tr>
            ]
        )
    }

    //Draws table cell for Year 4 Sem 1 & 2
    drawTableY4() {
        return (
            [<tr>
              <th rowSpan="5">Year 4</th>
              <td>{this.drawEmptyCell(this.state.data.y4s1[0])}</td>
              <td>{this.drawEmptyCell(this.state.data.y4s2[0])}</td>
            </tr>,
            <tr>
                <td>{this.drawEmptyCell(this.state.data.y4s1[1])}</td>
                <td>{this.drawEmptyCell(this.state.data.y4s2[1])}</td>
            </tr>,
            <tr>
                <td>{this.drawEmptyCell(this.state.data.y4s1[2])}</td>
                <td>{this.drawEmptyCell(this.state.data.y4s2[2])}</td>
            </tr>,
            <tr>
                <td>{this.drawEmptyCell(this.state.data.y4s1[3])}</td>
                <td>{this.drawEmptyCell(this.state.data.y4s2[3])}</td>
            </tr>,
            <tr>
                <td>{this.drawEmptyCell(this.state.data.y4s1[4])}</td>
                <td>{this.drawEmptyCell(this.state.data.y4s2[4])}</td>
            </tr>
            ]
        )
    }

    render() {
        var modules2 = this.props.data.moduleData.map(data => {
            return <ModuleGraph2 addToTimeline={this.addToTimeline} removeFromTimeline={this.removeFromTimeline} findModule={this.findModule} data={data}/>
        });
        return (
            <Sidebar rootClassName="Sidebar" open={this.state.sidebarOpen} onSetOpen={this.onSetSidebarOpen} styles={{ sidebar: { background: "white" } }} children={
            <div class={this.props.className}>
                <div class="Title">
                    <h1>{this.props.title}</h1>
                </div>
                <div class="MODGrid">
                    {modules2}
                </div>
                {
                this.state.showTimeline ?
                <table class="Timeline">
                <tr>
                    <th>Timeline</th>
                    <th>Semester 1</th>
                    <th>Semester 2</th>
                </tr>
                {this.drawTableY1()}
                {this.drawTableY2()}
                {this.drawTableY3()}
                {this.drawTableY4()}
                </table>
                : null
                }
                <div class="ToolbarButtons">
                    <button onClick={this.props.buttonClick}>Back</button>
                    <button onClick={this.showTimeline}>Show</button>
                    <button onClick={this.hideTimeline}>Hide</button>
                </div>
                <button class="Sidebarbutton" onClick={() => this.onSetSidebarOpen(true)}>Open Sidebar</button>
            </div>
            } sidebar={<div class="SidebarMenu"><h1>h</h1><h2>ab</h2><h3>abc</h3></div>}>
        </Sidebar>
        )
    }
}

export default Timeline;