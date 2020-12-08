import Homepage from "pages/homepage"
import React, { useEffect } from "react"
import { ThemeProvider } from "theme-ui"
import theme from "./theme"
import { Switch, Route } from "react-router-dom"
import ShopPage from "pages/shop-page"
import Header from "components/header"
import SignInAndSignUpPage from "pages/sign-in-and-sign-up-page"
import useFirebaseAuthentication from "hooks/useFirebaseAuthentication"

const App = () => {
  const authUser = useFirebaseAuthentication()

  console.log(">>>authUser", authUser)

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignInAndSignUpPage} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
