import EditorLayout from "@/layouts/EditorLayout"
import { getAllDocuments } from "@/services/docs/documents.service"
import { setDocsList } from "@/store/docs/docs.slice"
import { RootState } from "@/store/store"
import { useQuery } from "react-query"
import { useDispatch, useSelector } from "react-redux"

const Editor = () => {
  const dispatch = useDispatch()
  const { isLogged } = useSelector((state: RootState) => state.authReducer)

  useQuery(['docs'], getAllDocuments, {
    enabled: isLogged,
    onSuccess(data) {
      dispatch(setDocsList(data))
    }
  })

  return (
    <EditorLayout>
      <div>Editor</div>
    </EditorLayout>
  )
}

export default Editor