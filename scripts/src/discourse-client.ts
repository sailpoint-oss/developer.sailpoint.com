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
        let data = new FormData();
        const filename = path.basename(filepath);
        data.append('name', filename);
        data.append('type', 'text/markdown');
        data.append('file', fs.createReadStream(filepath), filename);

        try {
            let resp = await this.axiosInstance.post<PersonaFile>("/admin/plugins/discourse-ai/ai-personas/files/upload.json", data,
                {headers: { 
                 ...data.getHeaders(),
                  "Api-Key": this.token,
                  "Api-Username": this.user
                }})
            return resp.data
        } catch (error: any) {
            console.log(error)
            return undefined
        }
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
        if (email.email.endsWith("sailpoint.com")) {
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
