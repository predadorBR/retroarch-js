import { memo, useEffect } from "react"
import { Retroarch } from "retroarch-react"
import "./basic.css"
import "./main.css"

type Props = {
  coreUrl: string
  romBinary: Uint8Array
}

export const Emulator: React.FunctionComponent<Props> = ({
  coreUrl,
  romBinary,
}) => {
  useEffect(() => {
    return () => {
      console.log("SHOULD UNMOUNT !!!")
    }
  }, [])

  useEffect(() => {
    console.log("ROM CHANGED !!!")
  }, [romBinary])

  return (
    <Retroarch>
      <Retroarch.Overlay>
        <div className="overlay__container">
          <Retroarch.Overlay.FullscreenButton switchOn="[ ]" switchOff="X" />
        </div>
      </Retroarch.Overlay>

      <Retroarch.StartScreen>
        <Retroarch.StartScreen.Button />
      </Retroarch.StartScreen>

      <Retroarch.LoaderScreen coreUrl={coreUrl} romBinary={romBinary}>
        <>
          <Retroarch.LoaderScreen.Button />
          <Retroarch.LoaderScreen.Progress />
        </>
      </Retroarch.LoaderScreen>
    </Retroarch>
  )
}
