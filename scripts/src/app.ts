import dotenv from 'dotenv';
import { getMdFiles } from './processFiles';
import { DiscourseClient } from './discourse-client';
import { AiPersona, AiPersonaUpdate, PersonaUpdateResponse, RagUpload } from "./models/persona-update"
import { filterAPITextString, processFiles } from './formatApiSpecs';
dotenv.config();

const personas = [
    {
        id: 5,
        paths: [
            {path: '../docs/connectivity/saas-connectivity', recursive: true}
        ]
    },
    {
        id: 6,
        paths: [
            {path: '../docs/connectivity/saas-connectivity/connector-customizers', recursive: true}
        ]
    },
    {
        id: 4,
        paths: [
            {path: '../docs/api/beta', recursive: true},
            {path: '../docs/api/v3', recursive: true}
        ]
    },
    {
        id: 7,
        paths: [
            {path: '../docs/extensibility/transforms', recursive: true}
        ]
    }
]
                

async function main(id: number, paths: {path: string, recursive: boolean}[]) {
    const client = new DiscourseClient(process.env.DISCOURSE_API_KEY!, 'system', process.env.DISCOURSE_URL!);

    const filesUploaded: RagUpload[] = [];
    for (let path of paths) {
        let newFiles = getMdFiles(path.path, path.recursive);
        for (let file of newFiles) {
            let response = await client.createPersonaFile(file);
            if (!response) {
                console.log(`failed to upload file ${file}`);
                continue;
            }
            console.log(`uploaded file ${response.upload.id}`)
            filesUploaded.push({id: response.upload.id});
        }
    }
    

    const persona: AiPersonaUpdate = {
        ai_persona: {
            id: id,
            rag_uploads: filesUploaded
        }
    }; // Instantiate an object of type AiPersona

    let response = await client.editPersona(persona);
    console.log(response);

}

processFiles('../docs/api');

for (let persona of personas) {
    main(persona.id, persona.paths);
}