import axiosInstance from "@/helpers/axios/axionInstance"
import { CreateUserDto } from "@/interfaces/services/user.interface"

export const createUser = async (data: CreateUserDto) => {
  const response = await axiosInstance.post('/user/register', {
    ...data
  })

  return response.data
}