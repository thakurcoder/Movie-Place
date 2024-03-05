
import './App.css'
import Body from './component/Body'
import DataContextProvider from './component/Context/DataContextpro'
import Header from './component/Header'

function App() {
 return (
  <div>
    <DataContextProvider>
    <Header />
    <Body/>
    </DataContextProvider>
    </div>
  )
}

export default App
