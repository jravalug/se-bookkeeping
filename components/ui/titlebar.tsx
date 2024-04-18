import { SlLayers } from 'react-icons/sl'
import { VscChromeClose, VscChromeMaximize, VscChromeMinimize } from 'react-icons/vsc'

export const ContentLeft = () => {
  return (
    <div className="flex items-center h-full grow-[2] justify-start order-none w-[20%] z-[2500]">
      <span className="pl-4">SEBookkeeping</span>
    </div>
  )
}

export const ContentCenter = () => {
  return (
    <div className="flex items-center h-full justify-center mx-2 max-w-fit min-w-0 order-1 w-[60%] z-[2500]"></div>
  )
}

export const ContentRight = () => {
  return (
    <div className="flex items-center h-full grow-[2] justify-end min-w-min order-2 w-[20%]">
      <div className="flex justify-end flex-grow-0 flex-shrink-0 relative text-center z-[2500] h-full ml-auto min-w-7">
        <button
          className="hover:bg-slate-600/50 px-[18px]"
          title="Settings"
        >
          <SlLayers />
        </button>
        <button
          className="hover:bg-slate-600/50 px-[18px]"
          title="Minimize"
        >
          <VscChromeMaximize />
        </button>
        <button
          className="hover:bg-slate-600/50 px-[18px]"
          title="Maximize"
        >
          <VscChromeMinimize />
        </button>
        <button
          className="hover:bg-red-600/80 px-[18px]"
          title="Close"
        >
          <VscChromeClose />
        </button>
      </div>
    </div>
  )
}

const TitleBar = ({ ...props }) => {
  return (
    <header
      className={`absolute top-0 h-10 w-full bg-slate-900/20`}
      {...props}
    >
      <div className="h-10 flex flex-row text-sky-200/70 text-sm overflow-hidden">
        <div className="flex items-center flex-grow flex-shrink w-full h-full overflow-hidden select-none justify-start">
          <div id="titlebar-draggable"></div>
          <ContentLeft />
          <ContentCenter />
          <ContentRight />
        </div>
      </div>
    </header>
  )
}

export default TitleBar
