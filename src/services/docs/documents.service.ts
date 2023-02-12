import axiosInstance from "@/helpers/axios/axionInstance"
import { DocList } from "@/interfaces/services/docs.interface"

export const getAllDocuments = async (): Promise<DocList[]> => {
  const response = await axiosInstance.get<DocList[]>('/docs')
  return response.data
}