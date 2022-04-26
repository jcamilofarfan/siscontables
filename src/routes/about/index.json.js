import about from './_about.json';

const contents = JSON.stringify(about.map(aboutmin =>{
    return {
        general: aboutmin.general,
        jobs: aboutmin.jobs,
        schools: aboutmin.schools,
        skills: aboutmin.skills,
        interests: aboutmin.interests,
        accomplishments: aboutmin.accomplishments,
        recommendations: aboutmin.recommendations,
        licences: aboutmin.licences,
        query: aboutmin.query,
        timestamp: aboutmin.timestamp
    }
}));
// console.log(contents.length);

export function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(contents);
}