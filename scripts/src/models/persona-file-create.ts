export interface PersonaFile {
    upload: PersonaFileUpload
  }
  
  export interface PersonaFileUpload {
    id: number
    url: string
    original_filename: string
    filesize: number
    width: any
    height: any
    thumbnail_width: any
    thumbnail_height: any
    extension: string
    short_url: string
    short_path: string
    retain_hours: any
    human_filesize: string
    dominant_color: string
    thumbnail: any
  }
  