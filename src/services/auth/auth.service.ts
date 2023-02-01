import axiosInstance from "@/helpers/axios/axionInstance"

export const login = async (data: {username: string, password: string}) => {
  const response = await axiosInstance.post('/auth/login', {
    ...data
  })

  return response.data
}