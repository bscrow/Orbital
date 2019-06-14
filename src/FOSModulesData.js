// Slightly more complex Dataset
import React from 'react';


const FOSData = {
    nodes: [
        { id: 'CS1010S', name: 'Programming Methodology I', equivalent: ['CS1101S', 'CS1010', 'CS1010S', 'CS1010E', 'CS1010J'] },
        { id: 'LSM1102', equivalent: [] }, 
        { id: 'LSM1106', equivalent: [] }, 
        { id: 'LSM2241', equivalent: []}, 
        { id: 'LSM2232', equivalent: []}, 
        { id: 'CS2220', equivalent: []}, 
        { id: 'CS2040', equivalent: []}, 
        { id: 'GEY xxxx', equivalent: ['GES xxxx', 'GER xxxx', 'GET xxxx', 'GEH xxxx', 'GEQ xxxx']},
        { id: 'LSM3241', equivalent: []},
        { id: 'LSM4241', equivalent: []},
        { id: 'ZB4199', equivalent: []},
        { id: 'ZB4171', equivalent: []},
    ],
    links: [
        { source: 'CS1010S', target: 'CS2220' }, 
        { source: 'CS1010S', target: 'CS2040' }, 
        { source: 'LSM1102', target: 'LSM1106' }, 
        { source: 'LSM1102', target: 'LSM2241' },
        { source: 'LSM1106', target: 'LSM2232' },
        { source: 'CS2220', target: 'LSM3241' },
        { source: 'LSM3241', target: 'LSM4241' },
        { source: 'LSM4241', target: 'LSM4199' },
        { source: 'CS2220', target: 'ZB4171' },
    ]
};
export default FOSData; 

