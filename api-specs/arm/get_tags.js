// look for and remove all \r\n instances
// also look for and remove all ':' instances\
// also find any missing "summary" tags on apis -- public whatif, arm2 supports dashboard

// look for any missing properties: "properties": {}
// look for any missing schema objects: "in": "query", swagger-provisioning/export, 

const fs = require('fs');

const currentTags = []

const iterate = (obj) => {

    for (var key of Object.keys(obj)) {
        if (key === 'tags') {
            if(currentTags.includes(obj[key][0]) === false && typeof obj[key][0] === 'string') {
                currentTags.push(obj[key][0])
                console.log(`key: ${key}, value: ${obj[key]}`)
            }
        }
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            iterate(obj[key])
        }
    }

}

let rawdata = fs.readFileSync('static/arm-api/swagger-utilization-tracking.json');
let student = JSON.parse(rawdata);

iterate(student)

let tags = {"tags": []}

for (let tag of currentTags) {
    tags["tags"].push({"name": tag})
}

console.log(JSON.stringify(tags))

// "tags": [
//     {
//       "name": "Agent"
//     },
//     {
//       "name": "AgentInstruction"
//     }
//   ],
