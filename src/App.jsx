import './App.css'
import Aluno from './components/Aluno'
import UserProvider from './contexts/user'

function App() {

  return (
    <UserProvider>
      <Aluno/>
  
    </UserProvider>
  )
}

export default App
