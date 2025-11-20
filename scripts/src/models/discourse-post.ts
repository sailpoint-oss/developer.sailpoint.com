export interface DiscoursePost {
  post: Post
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
  reply_to_post_number: any
  quote_count: number
  incoming_link_count: number
  reads: number
  score: number
  topic_id: number
  topic_slug: string
  topic_title: string
  category_id: number
  display_username: string
  primary_group_name: string
  flair_name: string
  flair_group_id: number
  version: number
  user_title: string
  title_is_group: boolean
  bookmarked: boolean
  raw: string
  moderator: boolean
  admin: boolean
  staff: boolean
  user_id: number
  hidden: boolean
  trust_level: number
  deleted_at: any
  user_deleted: boolean
  edit_reason: any
  wiki: boolean
  reviewable_id: any
  reviewable_score_count: number
  reviewable_score_pending_count: number
  topic_posts_count: number
  topic_filtered_posts_count: number
  topic_archetype: string
  category_slug: string
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
  can_vote: boolean
  reply_to_user: ReplyToUser
}
export interface ReplyToUser {
  username: string
  name: string
  avatar_template: string
}