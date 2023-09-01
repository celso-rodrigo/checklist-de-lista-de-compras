import { ReactNode } from "react";
import Context from "./Context";

function ItemListProvider({children}: {children: ReactNode}) {
  return (
    <Context.Provider value={{}}>
      <>
        {children}
      </>
    </Context.Provider>
  )
}

export default ItemListProvider