import { Physics } from './MajReqData'
import { sep } from 'path';
const jsonData = require('./modata.json');
// /*
// Processes input files
// 1. Scans for module code in input file ( '^[a-zA-Z]{2,3}[0-9]{4}' ) and stores in a userModList
// 2. For Every module code in list, retrieve module from modata.json and append to userNodes object
// 3. Scans every name object in "require" list and 
// 3. build userLinks object
// */
// var input="GER1000 GES1021 GEQ1000 GEH1019 GET1020 LSM1102 LSM1106 MA1101R MA1102R CS1010S CS2040 CS2220 MA1100  CM1401 LSM2232 ST2131 ST2132 MA3259 LSM3241 ZB4199 ZB4171 CS2102 CS3243 LSM3225 LSM3233 LSM4241 LSM4232 CS4220 SP2171 SP3172 SP2173 SP2174 SP3175 SP3176 CS2030 CS2100 CS2106 CS3230 CS2103 CS3217 CS3244 CS4234 CS4248 CS3233"


export function getGraphData2(input) {
if (input===undefined) {
    input = Physics
}

    // Read and looks for module codes in input
    const regex = /[A-Z]{2,3}[0-9]{4}[A-Z]?/g

    // var userModList = fs.readFileSync(input, 'utf8').toUpperCase().match(regex).sort();
    // fetch(input).then(function(r){ var userModList = r.text().toUpperCase().match(regex).sort()})

    var userModList = input.toUpperCase().match(regex).sort();
    // Writing to required java object structure
    var userMod = {
        nodes:[],  
        links:[]
    }
    var availMods={};
    var modWithLink={};
    var mod, items, prereqMod, nextMod, modsByColn, coln, modID;
    // writing Nodes property
    for(mod of userModList){
        if (jsonData[mod]==null) {
            console.log("Don't have " + mod + " on NUSMods\n");
        } else if (availMods[mod]!=null) {
            console.log("Duplicate of "+mod)
        }else {
            availMods[mod]={y:-1, next:[]};
            modWithLink[mod]={y:-1, next:[], count:-1};
            userMod.nodes.push(jsonData[mod]);
            console.log(jsonData[mod].name + " Added\n");
        }
    }
    // Updating required list

    // Writing Links property
    for (mod of userMod.nodes) {
        for (items of mod.require) {
            for (prereqMod of items.name) {
                if (availMods.hasOwnProperty(prereqMod)) {
                    var temp = {
                        source:null,
                        target:null
                    }
                    temp.source=prereqMod;
                    temp.target=mod.id;
                    availMods[prereqMod].next.push(mod.id);
                    modWithLink[prereqMod].next.push(mod.id);
                    userMod.links.push(temp);
                }
            }
        }
    }

    // Assigning x coordinate via BFS
    var unlinkedMods={}; // collection of unlinked mods
    var numbers = [0];
    function BFS(modWithLink) {
            var sepGraphCount=1;
            for(mod of Object.keys(modWithLink)) {
                if (modWithLink[mod].y==-1) {
                    var n = add(mod, 1, sepGraphCount);
                    if (n==sepGraphCount) {
                        sepGraphCount++;
                    }
                }
            }
            function add(mod, num, count) {
                if (modWithLink[mod].y<num){
                    modWithLink[mod].y=num;
                }
                if (num==1&&modWithLink[mod].next.length==0) {
                    unlinkedMods[mod]={
                        y:numbers[0]%5+0.5,
                        x:~~(numbers[0]++/5)+1
                    };
                    delete modWithLink[mod];
                    return -1;
                }
                if (modWithLink[mod].count==-1||count<modWithLink[mod].count){
                    console.log(mod+" count was1 "+modWithLink[mod].count+" and now "+count)
                    add(nextMod, num+1, count);
                    modWithLink[mod].count=count;
                }
                for(nextMod of modWithLink[mod].next) {
                    var temp1 = add(nextMod, num+1, count);
                    console.log(mod+" count was "+count+" and now "+temp1)
                    if (temp1<modWithLink[mod].count) {
                        modWithLink[mod].count=temp1;
                        add(nextMod, num+1, temp1);
                    }
                }
                return modWithLink[mod].count;
            }
            return sepGraphCount;
        }
    var yScale=0.13*window.screen.height;
    var yBase = 20;
    var numOfGraphs=BFS(modWithLink);
    for (mod of userMod.nodes) {
        if (modWithLink.hasOwnProperty(mod.id)) {
            mod.y=modWithLink[mod.id].y*(10+yScale);
        } 
    }

    // Assigning y coordinates 
    var xScale=0.075*window.screen.width;
    var xBase=40;
    var prevRow=0;
    var maxX=0;
    function compare(a,b) {
        function getVal(a) {
            var min=1000;
            var prevCol=modWithLink[a].y-1;
            for(mod of modsByColn[prevCol]) {
                if (modWithLink[mod].next.includes(a)&&min>modWithLink[mod].y) {
                    min=modWithLink[mod].y;
                }
            }
            return min;
        }
        if (getVal(a)==getVal(b)) {
            return modWithLink[b].next.length - modWithLink[a].next.length
        } else {
            return getVal(a)-getVal(b)
        }
    }
    for(var i=1;i<=numOfGraphs;i++) {
        var curMaxX=maxX;
        modsByColn = {
            1:[],
            2:[],
            3:[],
            4:[],
            5:[],
            6:[],
            7:[],
            8:[],
        }
        for(mod of Object.keys(modWithLink)) {
            if (modWithLink[mod].count==i) {
                modsByColn[modWithLink[mod].y].push(mod);  
            }
        }
        for(coln in modsByColn) {
            if (coln>1) {
                prevRow = (modsByColn[coln-1].length-modsByColn[coln].length)/2*xScale;
            }
            var num = 1;
            if (coln==1) {
                modsByColn[coln].sort();
            } else {
                modsByColn[coln].sort(compare);
            }
            for (modID of modsByColn[coln]) {
                for (mod of userMod.nodes) {
                    if (mod.id==modID) {
                        mod.x=num++*xScale+xBase+prevRow+curMaxX;
                        if (mod.x>maxX) {
                            maxX=mod.x;
                        }
                    }
                }
            }
        }
    }
    // Assigning x and y coordinates for unlinked mods
    for (mod of userMod.nodes) {
        if (unlinkedMods.hasOwnProperty(mod.id)) {
            mod.y=unlinkedMods[mod.id].y*yScale+yBase;
            mod.x=unlinkedMods[mod.id].x*xScale+maxX+20;
        }
    }
return userMod;
}
