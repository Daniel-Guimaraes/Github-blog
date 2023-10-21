export interface Issue {
  id: number
  body: string
  comments: string
  created_at: string
  html_url: string
  number: number
  title: string
  total_count: number
  user: {
    login: string
  }
}
