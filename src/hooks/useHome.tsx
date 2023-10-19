import { useCallback, useEffect, useState } from 'react'
import { api } from '../services/api'
import { UserData } from '../types/user'

export interface Issue {
  id: number
  body: string
  comments: string
  created_at: string
  url: string
  number: number
  title: string
  total_count: number
}

export function useHome() {
  const [userData, setUserData] = useState<UserData>()
  const [issues, setIssues] = useState<Issue[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  const loadUserData = useCallback(async () => {
    const user = await api.get('/users/Daniel-Guimaraes')

    setUserData(user.data)
  }, [])

  const handleSearchTermChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm)
  }

  const count = issues.length

  useEffect(() => {
    const delayLoadIssues = setTimeout(async () => {
      const issues = await api.get(
        `/search/issues?q=${searchTerm}%20repo:Daniel-Guimaraes/Github-blog`,
      )
      setIssues(issues.data.items)
    }, 500)

    return () => clearTimeout(delayLoadIssues)
  }, [searchTerm])

  useEffect(() => {
    loadUserData()
  }, [loadUserData])

  return {
    userData,
    issues,
    searchTerm,
    handleSearchTermChange,
    count,
  }
}
