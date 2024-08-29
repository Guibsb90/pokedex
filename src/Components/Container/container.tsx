import React, { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) =>{
  return <div className="bg-stone-800 max-w-3xl m-auto min-h-screen bg-opacity-90 rounded-xl flex flex-col">{children}</div>

}

export default Container
