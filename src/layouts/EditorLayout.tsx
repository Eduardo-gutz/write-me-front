import Drawer from "@/components/Drawer";
import LateralMenu from "@/components/LateralMenu/LateralMenu";
import { ReactNode, useState } from "react"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiPlus, BiSave, BiCodeAlt, BiFont, BiHeading, BiBold, BiItalic, BiLinkAlt, BiImage, BiListUl, BiFolderOpen, BiImport, BiExport } from "react-icons/bi";


interface EditorLayoutProps {
  children: ReactNode
}

const EditorLayout = ({ children }: EditorLayoutProps) => {
  const [showPreview, setShowPreview] = useState<boolean>(true);

  const insertElement = (element: string) => {
    console.log("🚀 ~ file: EditorLayout.tsx:14 ~ insertElement ~ element", element)

  }
  return (
    <div className="flex w-full h-full">
      <LateralMenu />
      <div className="w-full h-full">
        <div className="w-[-webkit-fill-available] h-8 bg-neutral-700 mt-[2px] flex items-center px-2 relative">
          <div className="flex text-slate-300 text-2xl cursor-pointer">
            <span className="flex mr-6">
              <BiPlus />
              <BiSave />
            </span>
            <span className="flex mr-6">
              <BiFont onClick={() => insertElement('font')} />
              <BiHeading onClick={() => insertElement('head')} />
              <BiBold onClick={() => insertElement('bold')} />
              <BiItalic onClick={() => insertElement('italic')} />
            </span>
            <span className="flex mr-6">
              <BiCodeAlt onClick={() => insertElement('cde')} />
              <BiLinkAlt onClick={() => insertElement('link')} />
              <BiImage onClick={() => insertElement('image')} />
              <BiListUl onClick={() => insertElement('list')} />
            </span>
          </div>
          <p className="absolute right-1/2 translate-x-1/2 text-slate-300 text-lg font-medium">FileName.md</p>
          <span className="text-slate-300 absolute right-16 cursor-pointer" onClick={() => setShowPreview(!showPreview)}>
            {showPreview ?
              <AiFillEyeInvisible size={30} />
              :
              <AiFillEye size={30} />
            }
          </span>
        </div>
        {children}
      </div>
    </div>
  )
}

export default EditorLayout