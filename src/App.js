import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SuperTokens, { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react"
import ThirdPartyEmailPassword, { ThirdPartyEmailPasswordAuth, Github, Google, Facebook } from "supertokens-auth-react/recipe/thirdpartyemailpassword"
import Session from "supertokens-auth-react/recipe/session"
console.log("comes here")
SuperTokens.init({
  appInfo: {
    appName: "SuperTokens Demo App",
    apiDomain: "http://localhost:3001",
    websiteDomain: "http://localhost:3000"
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      signInAndUpFeature: {
        providers: [
          Google.init(),
        ]
      }
    }),
    Session.init()
  ]
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            {getSuperTokensRoutesForReactRouterDom()}
            <Route path="/">
              <ThirdPartyEmailPasswordAuth>
                Home page
              </ThirdPartyEmailPasswordAuth>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
