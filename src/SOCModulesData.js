//Sample dataset
const SOCData =  {
  nodes: [{ id: 'CS1101S', name: 'Programming Methodology', equivalent: ['CS1101S', 'CS1010', 'CS1010S', 'CS1010E', 'CS1010J'] },
          { id: 'CS2030', equivalent: [] }, 
          { id: 'CS2040', equivalent: [] }, 
          { id: 'CS2103', equivalent: []}, 
          { id: 'CS2105', equivalent: []}, 
          { id: 'CS2106', equivalent: []}, 
          { id: 'CS3230', equivalent: []},
          { id: 'MA1101R', equivalent: []},
          { id: 'CS1231', equivalent: []},
          { id: 'IS1103', equivalent: []},
        ],
  links: [{ source: 'CS1101S', target: 'CS2030' }, { source: 'CS1101S', target: 'CS2040' }]
};

export default SOCData;