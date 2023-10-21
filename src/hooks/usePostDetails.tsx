import { useState, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../services/api'
import { Issue } from '../types/issue'

export function useIssueDetails() {
  const [issueDetails, setIssueDetails] = useState<Issue>({} as Issue)
  const { id } = useParams()

  const fetchIssueDetails = useCallback(async () => {
    await api
      .get(`/repos/Daniel-Guimaraes/Github-blog/issues/${id}`)
      .then((response) => {
        setIssueDetails(response.data)
      })
      .catch((error) => console.error('Erro ao buscar pela issue', error))
  }, [id])

  useEffect(() => {
    fetchIssueDetails()
  }, [fetchIssueDetails])

  return { issueDetails }
}
