import FieldText from "@/components/atoms/FieldText"
import { RootState } from "@/store/store"
import { useSelector } from "react-redux"
import { BiFolderOpen, BiImport, BiFile } from "react-icons/bi";

const FilesContent = () => {
  const docs = useSelector((state: RootState) => state.docsReducer)
  return (
    <div className="w-full h-full px-3">
      <FieldText
        onChange={(value: string) => null}
        name={""}
        label={"Search"}
        className="h-7 px-1 text-neutral-900"
      />
      {docs.map((doc) =>
        <div key={doc.id} className="flex my-1 cursor-pointer">
          <BiFile size={20} />
          <p className="text-base text-ellipsis overflow-hidden whitespace-nowrap">{doc.name}</p>
          <p className="text-base">.{doc.format}</p>
        </div>
      )}
    </div>
  )
}

export default FilesContent