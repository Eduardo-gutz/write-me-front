import { docDTOToDoc, docDTOToDocList } from "@/adapters/docs/docs.adapter"
import axiosInstance from "@/helpers/axios/axionInstance"
import { DocDTO, DocList, DocListStored, DocStored } from "@/interfaces/services/docs.interface"

export const getAllDocuments = async (): Promise<DocListStored[]> => {
  const response = await axiosInstance.get<DocList[]>('/docs')
  return docDTOToDocList(response.data)
}

export const getDocument = async (id: string): Promise<DocStored> => {
  const response = await axiosInstance.get<DocDTO>(`/docs/${id}`)
  return docDTOToDoc(response.data)
}