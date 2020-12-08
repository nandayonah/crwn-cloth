/** @jsx jsx */
import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Alert,
  Box,
  Button,
  Close,
  Flex,
  Heading,
  Input,
  jsx,
  Label,
  Text,
} from "theme-ui"
import {
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "services/firebase-service"
import { logError } from "utils/debug-utils"

const SignInForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [alert, setAlert] = useState(null)

  const handleCloseAlert = () => setAlert(null)

  const handleChangeEmail = (event) => setEmail(event.target.value)

  const handleChangePassword = (event) => setPassword(event.target.value)

  const handleSignInWithGoogle = async () => {
    const result = await signInWithGoogle().catch((error) => logError(error))

    console.log(">>>result", result)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const result = await signInWithEmailAndPassword(email, password).catch(
      (error) => {
        if (error.code === "auth/user-not-found") {
          setAlert({ type: "warning", message: "User is not registered" })
        }

        logError(error)
      }
    )

    console.log(">>>result", result)
  }
  return (
    <Box>
      <Box mb={3}>
        <Heading mb={1}>Sign in</Heading>
        <Text>Already have an account? Sign in with your email</Text>
      </Box>

      {alert ? (
        <Alert variant={alert.type} mb={1}>
          {alert.message}
          <Close ml="auto" mr={-2} onClick={handleCloseAlert} />
        </Alert>
      ) : null}

      <Box as="form" onSubmit={handleSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          mb={2}
          value={email}
          onChange={handleChangeEmail}
        />

        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          mb={3}
          value={password}
          onChange={handleChangePassword}
        />
        <Flex sx={{ justifyContent: "flex-end" }}>
          <Link to="/forgot-password" sx={{ variant: "buttons.link" }}>
            Forgot Password?
          </Link>
        </Flex>

        <Box mt={3}>
          <Flex sx={{ alignItems: "center" }}>
            <Button variant="secondary" type="submit">
              Sign in
            </Button>
            <Text mx={2} color="muted">
              Or
            </Text>
            <Button onClick={handleSignInWithGoogle}>
              Sign In with Google
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default SignInForm
