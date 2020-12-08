/** @jsx jsx */
import { Link } from "react-router-dom"
import { Button, Container, Grid, Flex, Image, jsx } from "theme-ui"
import logo from "./crown.svg"

const Header = () => {
  return (
    <header>
      <Container>
        <Grid
          as="nav"
          columns={[1, "1fr 5fr"]}
          sx={{
            height: "90px",
            alignItems: "center",
          }}
        >
          <Flex sx={{ justifyContent: ["center", "flex-start"] }}>
            <Link to="/">
              <Image src={logo} />
            </Link>
          </Flex>
          <Flex
            sx={{
              justifyContent: ["space-around", "flex-end"],
              alignItems: "center",
            }}
          >
            <Link sx={{ variant: "buttons.link", mr: 3 }} to="/shop">
              Shop
            </Link>
            <Link sx={{ variant: "buttons.link", mr: 3 }} to="/tracking">
              Tracking
            </Link>
            <Link to="/sign-in">
              <Button variant="accent">Sign In</Button>
            </Link>
          </Flex>
        </Grid>
      </Container>
    </header>
  )
}

export default Header
