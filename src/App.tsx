import IndexPage from './pages'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
