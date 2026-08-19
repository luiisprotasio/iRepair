import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  response => response,

  async (error) => {
    const originalRequest = error.config

    const isRefreshCall =
      originalRequest?.url?.includes('/auth/refresh')

    const isLoginPage =
      window.location.pathname === '/login'

    const alreadyRetried =
      originalRequest?._retry

    if (
      error.response?.status === 401 &&
      !isRefreshCall &&
      !alreadyRetried
    ) {
      originalRequest._retry = true

      try {
        await api.post('/auth/refresh')

        return api(originalRequest)

      } catch {
        if (!isLoginPage) {
          window.location.href = '/login'
        }

        return Promise.reject(error)
      }
    }

    return Promise.reject(error)
  }
)