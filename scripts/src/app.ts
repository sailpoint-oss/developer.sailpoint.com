import dotenv from 'dotenv';
import { getMdFiles } from './processFiles';
import { DiscourseClient } from './discourse-client';
import { AiPersona, AiPersonaUpdate, PersonaUpdateResponse, RagUpload } from "./models/persona-update"
import { filterAPITextString, processFiles } from './formatApiSpecs';
dotenv.config();

type Path = {
    path: string,
    recursive: boolean
}

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

const saasConnectivityPaths: Path[] = [];
saasConnectivityPaths.push({path: '../docs/connectivity/saas-connectivity', recursive: true});
main(1, saasConnectivityPaths);

const apiPaths: Path[] = [];
apiPaths.push({path: '../docs/api/beta', recursive: true});
apiPaths.push({path: '../docs/api/v3', recursive: true});
main(2, apiPaths);