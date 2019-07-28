//Input fos modules into this object
//Follow/Refer to format of SOCModulesData
//Sample dataset
const FOSData =  {
    moduleData: [
            { department: 'Life Science', 
              modules: [
                {id: '1', name: 'test1', equivalent: [], require: []},
                {id: '2', name: 'test2', equivalent: [], require: []},
                {id: '', name: '', equivalent: [], require: []},
                {id: '', name: '', equivalent: [], require: []},
                {id: '', name: '', equivalent: [], require: []},
                {id: '', name: '', equivalent: [], require: []},
                {id: '', name: '', equivalent: [], require: []},
                {id: '', name: '', equivalent: [], require: []},
                {id: '', name: '', equivalent: [], require: []},
                {id: '', name: '', equivalent: [], require: []}
              ] 
            },
            { department: 'Chemistry',
              modules: [
                {id: '3', name: 'test3', equivalent: [], require: []},
                {id: '4', name: 'test4', equivalent: [], require: []},
                {id: '', name: '', equivalent: [], require: []},
                {id: '', name: '', equivalent: [], require: []},
                {id: '', name: '', equivalent: [], require: []},
                {id: '', name: '', equivalent: [], require: []},
                {id: '', name: '', equivalent: [], require: []},
                {id: '', name: '', equivalent: [], require: []},
                {id: '', name: '', equivalent: [], require: []},
                {id: '', name: '', equivalent: [], require: []}
              ]
            },
            { department : 'Physics',
              modules: [
                  {id: '5', name: 'test5', equivalent: [], require: []},
                  {id: '6', name: 'test6', equivalent: [], require: []}
              ]
            }
    ]
  };
  
  export default FOSData;