import FieldText from "@/components/atoms/FieldText"
import { RootState } from "@/store/store"
import { useDispatch, useSelector } from "react-redux"
import { BiFile } from "react-icons/bi";
import { useMemo, useState } from "react";
import { DocListStored } from "@/interfaces/services/docs.interface";
import { addDoc } from "@/store/currentDocs/currentDocs.slice";
import { useMutation } from "react-query";
import { getDocument } from "@/services/docs/documents.service";
import { toast } from "react-toastify";

const FilesContent = () => {
  const dispatch = useDispatch()
  const docs = useSelector((state: RootState) => state.docsReducer)
  const {mutate} = useMutation(getDocument)
  const [term, setTerm] = useState<string>('');

  const docsFilter = useMemo(() => {
    return docs.filter((doc) => doc.name.includes(term))
  }, [docs, term])

  const openFile = (doc: DocListStored) => {
    mutate(doc.id, {
      onSuccess(data) {
        dispatch(addDoc(data))
      },
      onError() {
        toast.error('There was an error opening the document')
      }
    })
  }
  return (
    <div className="w-full h-full px-3">
      <FieldText
        onChange={(value: string) => setTerm(value)}
        name={""}
        label={"Search"}
        className="h-7 px-1 text-neutral-900"
      />
      {docsFilter.map((doc) =>
        <div key={doc.id} className="flex my-1 cursor-pointer" onClick={() => openFile(doc)}>
          <BiFile size={20} />
          <p className="text-base text-ellipsis overflow-hidden whitespace-nowrap">{doc.name}</p>
          <p className="text-base">.{doc.format}</p>
        </div>
      )}
    </div>
  )
}

export default FilesContent