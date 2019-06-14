import React from 'react';
import Tree from 'react-d3-tree';
import FOSData from './FOSModulesData.js';
import Timeline from './Timeline';


const FOSTreeData = [
    {
        name: 'Admission',
        attributes: {
            Module: 'Start of Uni',
            Description: 'Where greatness begins',
            // Remarks: 'Lang Support 吼吼吼',
            // Text: [<div><button>heyyypressme</button></div>]
        },
        children: [
            {
                name: 'LSM1102',
                attributes: {
                    Module: 'Molecular Genetics',
                    Description: 'Omae wa mo',
                    // Remarks: 'val C',
                },
                children: [
                    {
                        name: 'LSM1106',
                        attributes: {
                            Module :'Molecular Cell Biology',
                            Description: 'Shindeiru',
                        },
                        children: [
                            {
                                name: 'LSM2232',
                                attributes: {
                                    Module: 'Genes, Genomes and Biomedical Implications',
                                    Description: 'NANIII',
                                },
                            },
                        ],
                    },
                    {
                        name: 'LSM2241',
                        attributes: {
                            Module: 'Introduction to Bioinformatics',
                            Description: 'Gangnam Style',
                        },
                    },
                ],
            }, 

            {
                name: 'CS1010S',
                attributes: {
                    Module: 'Programming Methodology I',
                    Description: 'Ka',
                },
                children: [
                    {
                        name: 'CS2220',
                        attributes: {
                            Module: 'Introduction to Computational Biology',
                            Description: 'Me',
                        },
                        children: [
                            {
                                name: 'LSM3241',
                                attributes: {
                                    Module: 'Genomic Data Analysis',
                                    Description: 'Ha',
                                },
                                children: [
                                    {
                                        name: 'LSM4241',
                                        attributes: {
                                            Module: 'Functional Genomics',
                                            Description: 'Me',
                                        },
                                        children: [
                                            {
                                                name: 'ZB4199',
                                                attributes: {
                                                    Module: 'Honours Project in Computational Biology',
                                                    Description: 'HAA!!!',
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: 'ZB4171',
                                attributes: {
                                    Module: 'Advanced Topics in Bioinformatics',
                                    Description: 'pika pi',
                                },
                            },
                        ],
                    },
                    {
                        name: 'CS2040',
                        attributes: {
                            Module: 'Data Structures and Algorithms',
                            Description: 'gg 2 EZ',
                        },
                    },
                ],
            },
            {
                name: 'GEY xxxx',
                attributes: {
                    Module: 'General Education Mods X 5',
                    Description: 'fun! <3'
                }
            } 
        ],
    },
];

const svgSquare = {
    shape: 'rect',
    shapeProps: {
      width: 100,
      height: 20,
      x: -5,
      y: -20,
    }
  }

class FOS extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    
    render() {
        const style = {width: 2000 , height: 600 }
        return (
            <div>
                <h1>
                    Progression Tree
                </h1>
                {/* <Tree /> will fill width/height of its container; in this case `#treeWrapper` */}
                <div id="treeWrapper" style={style} >
            
                    <Tree 
                        data={FOSTreeData} 
                        pathFunc="elbow" 
                        //zoomable={false}
                        nodeSize={{x: 200, y: 100}}
                        translate={{x: 100, y:style.height/2}}
                        nodeSvgShape={svgSquare}
                     />
            
                </div>
                <h2>
                    Table
                </h2>
                <div><Timeline data={FOSData} /></div>
            </div>
        );
    }
    
}
export default FOS;

// import React from 'react';
// import Tree from 'react-d3-tree';
 
// const myTreeData = [
//   {
//     name: 'Top Level',
//     attributes: {
//       keyA: 'val A',
//       keyB: 'val B',
//       keyC: 'val C',
//     },
//     children: [
//       {
//         name: 'Level 2: A',
//         attributes: {
//           keyA: 'val A',
//           keyB: 'val B',
//           keyC: 'val C',
//         },
//       },
//       {
//         name: 'Level 2: B',
//       },
//     ],
//   },
// ];
 
// class MyComponent extends React.Component {
//   render() {
//     return (
      
//         <div id="treeWrapper" style={{width: '50em', height: '20em'}}>
 
//         <Tree data={myTreeData} />
 
//         </div>
//     );
//   }
// }