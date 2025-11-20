export interface DiscoursePosts {
  post_stream: PostStream
  id: number
}

export interface PostStream {
  posts: Post[]
}

export interface Post {
  id: number
  name: string
  username: string
  avatar_template: string
  created_at: string
  cooked: string
  post_number: number
  post_type: number
  updated_at: string
  reply_count: number
  reply_to_post_number: number
  quote_count: number
  incoming_link_count: number
  reads: number
  readers_count: number
  score: number
  yours: boolean
  topic_id: number
  topic_slug: string
  display_username: string
  primary_group_name: string
  flair_name: string
  flair_url: any
  flair_bg_color: string
  flair_color: string
  flair_group_id: number
  version: number
  can_edit: boolean
  can_delete: boolean
  can_recover: boolean
  can_see_hidden_post: boolean
  can_wiki: boolean
  user_title: string
  title_is_group: boolean
  reply_to_user: ReplyToUser
  bookmarked: boolean
  raw: string
  actions_summary: any[]
  moderator: boolean
  admin: boolean
  staff: boolean
  user_id: number
  hidden: boolean
  trust_level: number
  deleted_at: any
  user_deleted: boolean
  edit_reason: any
  can_view_edit_history: boolean
  wiki: boolean
  reviewable_id: any
  reviewable_score_count: number
  reviewable_score_pending_count: number
  akismet_state: any
  user_cakedate: string
  category_expert_approved_group: any
  needs_category_expert_approval: any
  can_manage_category_expert_posts: boolean
  ratings: any[]
  reactions: any[]
  current_user_reaction: any
  reaction_users_count: number
  current_user_used_main_reaction: boolean
  can_accept_answer: boolean
  can_unaccept_answer: boolean
  accepted_answer: boolean
  topic_accepted_answer: boolean
}
export interface ReplyToUser {
  username: string
  name: string
  avatar_template: string
}