import Homepage from "pages/homepage"
import React from "react"
import { ThemeProvider } from "theme-ui"
import theme from "./theme"
import { Switch, Route, useParams } from "react-router-dom"
import ShopPage from "pages/shop-page"

const CategoryPage = () => {
  const params = useParams()

  console.log(">>>params", params)
  return <h1>Category</h1>
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/:category" component={CategoryPage} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
