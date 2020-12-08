/** @jsx jsx */
import SignInForm from "components/sign-in-form"
import SignUpForm from "components/sign-up-form"
import { Container, Grid, jsx } from "theme-ui"

const SignInAndSignUpPage = () => {
  return (
    <Container>
      <Grid columns={[1, 2, 2]} gap={[0, 4, 6]}>
        <SignInForm />
        <SignUpForm />
      </Grid>
    </Container>
  )
}

export default SignInAndSignUpPage
