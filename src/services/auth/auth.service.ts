import axiosInstance from "@/helpers/axios/axionInstance"

export const login = async (data: {username: string, password: string}) => {
  const response = await axiosInstance.post('/auth/login', {
    ...data
  })

  return response.data
}

export const logout = async (userId: string) => {
  const response = await axiosInstance.post(`/auth/logout/${userId}`)

  return response.data
}