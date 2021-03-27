import {useState, useCallback} from 'preact/hooks'
import requester from '../request'

export const useHttp = (callback, inputs) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const request = useCallback(async () => {
        setLoading(true)
        return requester().then(e => e).catch(e => setError(e)).finally(() => setLoading(false))
    }, inputs)
    const clearError = () => setError(null)
    return { loading, request, error, clearError }
}
