//Sample dataset
const SOCData =  {
    moduleData: [
            { department: 'Computer Science', 
              modules: [
                {id: 'CS1101S', name: 'Programming Methodology', equivalent: ['CS1101S', 'CS1010', 'CS1010S', 'CS1010E', 'CS1010J'], require: []},
                {id: 'CS1231', name: 'Discrete Structures', equivalent: ['MA1100'], require: []},
                {id: 'CS2030', name: 'Programming Methodology', equivalent: [], require: []},
                {id: 'CS2040', name: 'Data Structures & Algorithm', equivalent: ['CS2040', 'CS2040X'], require: ['CS1010']},
                {id: 'CS2100', name: 'Computer Organisaiton', equivalent: [], require: []},
                {id: 'CS2103', name: 'Software Engineering', equivalent: [], require: []},
                {id: 'CS2105', name: 'Introduction to Computer Network', equivalent: [], require: []},
                {id: 'CS2106', name: 'Introduction to Operating Systems', equivalent: [], require: []},
                {id: 'CS3230', name: 'Design and Analysis of Algorithms', equivalent: [], require: []},
                {id: 'CS3880', name: '', equivalent: [], require: []}
              ] 
            },
            { department: 'Mathematics',
              modules: [
                {id: 'MA1101R', name: 'Linear Algebra', equivalent: [], require: []},
                {id: 'ST2334', name: 'Probability & Statistics', equivalent: [], require: []}
              ]
            }
    ]
  };
  
  export default SOCData;