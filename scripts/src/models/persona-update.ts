export interface AiPersonaUpdate {
    ai_persona: AiPersona
  }
  
  export interface AiPersona {
    id: number
    name?: string
    description?: string
    commands?: any[]
    system_prompt?: string
    allowed_group_ids?: number[]
    enabled?: boolean
    system?: boolean
    priority?: boolean
    top_p?: any
    temperature?: any
    user_id?: any
    mentionable?: boolean
    default_llm?: string
    user?: any
    max_context_posts?: any
    vision_enabled?: boolean
    vision_max_pixels?: number
    rag_uploads: RagUpload[]
    rag_chunk_tokens?: number
    rag_chunk_overlap_tokens?: number
    rag_conversation_chunks?: number
    question_consolidator_llm?: string
    allow_chat?: boolean
  }
  
  export interface RagUpload {
    id: number
  }
  



  export interface PersonaUpdateResponse {
    name: string
    description: string
    enabled: boolean
    system_prompt: string
    priority: boolean
    top_p: any
    temperature: any
    default_llm: string
    user_id: any
    mentionable: boolean
    max_context_posts: any
    vision_enabled: boolean
    vision_max_pixels: number
    rag_chunk_tokens: number
    rag_chunk_overlap_tokens: number
    rag_conversation_chunks: number
    question_consolidator_llm: string
    allow_chat: boolean
    allowed_group_ids: number[]
    commands: any[]
    id: number
    created_by_id: any
    created_at: string
    updated_at: string
    system: boolean
  }
  