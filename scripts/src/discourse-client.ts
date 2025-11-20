import { AxiosWrapper, Params } from "./axios-wrapper"
import { UserEmail } from "./models/discourse-email"
import { Post } from "./models/discourse-post"
import { DiscoursePosts } from "./models/discourse-posts"
import { PersonaFiles } from "./models/persona-files"
import fs from "fs"
import { PersonaFile } from "./models/persona-file-create"
import { AiPersona, AiPersonaUpdate, PersonaUpdateResponse } from "./models/persona-update"
import { Buffer } from 'buffer';
import FormData from 'form-data'
import path from 'path';
import crypto from 'crypto';

export class DiscourseClient {
    private readonly token?: string
    private readonly user?: string
    private readonly url?: string
    private axiosInstance: AxiosWrapper

    constructor(token: string, user: string, url: string) {
        this.user = user
        this.token = token
        this.url = url
        this.axiosInstance = new AxiosWrapper(url)
    }



    async getTopic(topicId: number): Promise<any> {
        try {
            let resp = await this.axiosInstance.get<any>(`/t/${topicId}.json`, {
                headers: { 
                  "Api-Key": this.token,
                  "Api-Username": this.user
                }})
            return resp.data
        } catch (error: any) {
            throw new Error(error)
        }
    }

    async getPersonaFiles(personaId: number): Promise<PersonaFiles> {
        try {
            let resp = await this.axiosInstance.get<PersonaFiles>(`/admin/plugins/discourse-ai/ai-personas/${personaId}/files/status.json`, {
                headers: { 
                  "Api-Key": this.token,
                  "Api-Username": this.user
                }})
            return resp.data
        } catch (error: any) {
            throw new Error(error)
        }
    }

    async createPersonaFile(filepath: string): Promise<PersonaFile | undefined> {
        const filename = path.basename(filepath);
        
        // Calculate SHA1 checksum of the file
        const fileContent = fs.readFileSync(filepath);
        const sha1sum = crypto.createHash('sha1').update(fileContent as any).digest('hex');
        
        // Generate a client_id (random UUID-like string)
        const clientId = crypto.randomBytes(16).toString('hex');
        
        const maxRetries = 15;
        let lastError: any;
        
        // Manual retry loop since axios-retry doesn't work well with FormData
        for (let attempt = 0; attempt <= maxRetries; attempt++) {
            // Create fresh FormData for each attempt
            let data = new FormData();
            data.append('upload_type', 'discourse_ai_rag_upload');
            data.append('pasted', 'false');
            data.append('name', filename);
            data.append('type', 'text/markdown');
            data.append('sha1_checksum', sha1sum);
            data.append('file', fileContent, filename);

            try {
                let resp = await this.axiosInstance.post<PersonaFile>(
                    `/admin/plugins/discourse-ai/rag-document-fragments/files/upload.json?client_id=${clientId}`, 
                    data,
                    {
                        headers: { 
                            ...data.getHeaders(),
                            "Api-Key": this.token,
                            "Api-Username": this.user
                        },
                        'axios-retry': {
                            retries: 0 // Disable axios-retry for this specific request
                        }
                    }
                );
                return resp.data;
            } catch (error: any) {
                lastError = error;
                
                // Check if it's a rate limit error (429)
                if (error.response?.status === 429) {
                    if (attempt < maxRetries) {
                        // Get retry delay from Retry-After header or use exponential backoff
                        const retryAfter = error.response.headers['retry-after'];
                        const delaySeconds = retryAfter ? parseInt(retryAfter, 10) : Math.pow(2, attempt);
                        
                        console.log(`[Upload Retry] Rate limited (attempt ${attempt + 1}/${maxRetries + 1}), waiting ${delaySeconds} seconds...`);
                        await new Promise(resolve => setTimeout(resolve, delaySeconds * 1000));
                        continue;
                    } else {
                        console.log(`[Upload Retry] Max retries reached for ${filename}`);
                    }
                } else {
                    // Not a rate limit error, don't retry
                    console.log(`[Upload] Non-retryable error for ${filename}:`, error.message);
                    break;
                }
            }
        }
        
        console.log(`Failed to upload file ${filename} after ${maxRetries + 1} attempts`);
        return undefined;
    }
    async editPersona(persona: AiPersonaUpdate): Promise<PersonaUpdateResponse> {
        try {
            let resp = await this.axiosInstance.put<PersonaUpdateResponse>(`/admin/plugins/discourse-ai/ai-personas/${persona.ai_persona.id}`, persona,
                {headers: { 
                  "Api-Key": this.token,
                  "Api-Username": this.user
                }})
            return resp.data
        } catch (error: any) {
            throw new Error(error)
        }
    }


    async editPostTopicTitle(topicId: number, topicSlug: string, title: string): Promise<any> {
        const params: Params = {
            title: title,
            keep_existing_draft: true
        }
        try {
            let resp = await this.axiosInstance.put<any>(`/t/${topicSlug}/${topicId}`, params,
                {headers: { 
                  "Api-Key": this.token,
                  "Api-Username": this.user
                }})
            return resp.data
        } catch (error: any) {
            throw new Error(error)
        }
    }

    async getPosts(topicId: number): Promise<Post[]> {
        let posts: Post[] = []
        try {
            let resp = await this.axiosInstance.get<DiscoursePosts>(`/t/${topicId}/posts.json`, {
                headers: { 
                  "Api-Key": this.token,
                  "Api-Username": this.user
                }})

            for (let post of resp.data.post_stream.posts) {
                let postResponse = await this.axiosInstance.get<Post>(`/posts/${post.id}.json`, {
                    headers: { 
                      "Api-Key": this.token,
                      "Api-Username": this.user
                    }})
                posts.push(postResponse.data)
            }
            
            return posts
        } catch (error: any) {
            throw new Error(error)
        }
    }

    async createPost(topicId: number, raw: string): Promise<any> {
        console.log(`Creating post in topic ${topicId} with user ${this.user} and token ${this.token!.substring(0, 5)} with url ${this.url}`)
        const params: Params = {
            topic_id: topicId!,
            raw: raw!
        }
        //console.log(`full post content: ${raw}`)
        const data = Object.keys(params)
        .map((key, index) => `${key}=${encodeURIComponent(params[key])}`)
        .join('&');
        try {
            let resp = await this.axiosInstance.post<any>("/posts", data,
                {headers: { 
                  "Content-Type": "application/x-www-form-urlencoded",
                  "Api-Key": this.token,
                  "Api-Username": this.user
                }})
            return resp.data

        } catch (error: any) {
            throw new Error(error)
        }
    }

    async getEmail(username: string): Promise<UserEmail> {
        try {
            let resp = await this.axiosInstance.get<UserEmail>(`/u/${username}/emails.json`, {
                headers: { 
                  "Api-Key": this.token,
                  "Api-Username": this.user
                }})
            return resp.data
        } catch (error: any) {
            throw new Error(error)
        }
    }

    async isSailPointEmployee(username: string): Promise<boolean> {
        const email = await this.getEmail(username)
        const domain = email.email.split('@')[1];
        if (domain === "sailpoint.com") {
            return true
        } else {
            return false
        }
    }
}
function streamToBlob(stream: fs.ReadStream): Promise<Blob> {
    return new Promise((resolve, reject) => {
        const chunks: Uint8Array[] = [];
        stream.on("data", (chunk) => chunks.push(new Uint8Array(Buffer.from(chunk))));
        stream.on("error", reject);
        stream.on("end", () => {
            const blob = new Blob(chunks, { type: "application/octet-stream" });
            resolve(blob);
        });
    });
}
