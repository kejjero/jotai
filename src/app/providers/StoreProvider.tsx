import {Provider} from 'jotai'
import {FC, PropsWithChildren} from "react";

const StoreProvider: FC<PropsWithChildren> = ({ children }) => (
  <Provider>
    {children}
  </Provider>
)

export default StoreProvider