import { HomePage } from "../../pages";
import '../styles/normalize.scss'
import '../styles/app.scss'
import {StoreProvider} from '../providers'

const App = () => (
  <StoreProvider>
    <div className="app">
      <HomePage />
    </div>
  </StoreProvider>
  )

export default App;
