import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiFolderOpen, BiImport, BiExport } from "react-icons/bi";
import ExportContent from "./content/ExportContent";
import FilesContent from "./content/FilesContent";
import ImportContent from "./content/ImportContent";

type MenuTypes = 'files' | 'import' | 'export'

const LateralMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [currentMenu, setCurrentMenu] = useState<MenuTypes>('files')

  const openMenu = (menu: MenuTypes) => {
    if (!showMenu || menu !== currentMenu) {
      setCurrentMenu(menu)
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }
  return (
    <div className="w-12 h-screen mt-[2px] mr-[2px] text-[32px] text-slate-300 relative">
      <div className="w-full h-full z-20 bg-neutral-700 pt-1 gap-3 flex flex-col items-center [&>svg]:cursor-pointer relative">
        <BiFolderOpen onClick={() => openMenu('files')} />
        <BiImport onClick={() => openMenu('import')} />
        <BiExport onClick={() => openMenu('export')} />
      </div>
      <div className={`w-48 h-full absolute bg-neutral-700 top-0 z-10 border-r-2 border-neutral-800 p-1 transition-all ${showMenu ? 'left-full' : '-left-52'}`}>
        <div className="w-full h-full bg-neutral-800">
          <div className="w-full relative">
            <p className="text-lg text-slate-300 text-center pt-1">Files</p>
            <AiOutlineClose className="text-slate-300 m-2 absolute top-0 right-0 cursor-pointer" stroke="2.5" size={20} onClick={() => setShowMenu(false)} />
          </div>
          {currentMenu === 'files' && <FilesContent />}
          {currentMenu === 'import' && <ImportContent />}
          {currentMenu === 'export' && <ExportContent />}
        </div>
      </div>
    </div>
  )
}

export default LateralMenu