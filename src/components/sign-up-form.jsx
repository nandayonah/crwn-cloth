/** @jsx jsx */
import { useState } from "react"
import { Box, Button, Flex, Heading, Input, jsx, Label, Text } from "theme-ui"

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleChangeFirstName = (event) => setFirstName(event.target.value)
  const handleChangeLastName = (event) => setLastName(event.target.value)
  const handleChangeEmail = (event) => setEmail(event.target.value)
  const handleChangePassword = (event) => setPassword(event.target.value)
  const handleChangeConfirmPassword = (event) =>
    setConfirmPassword(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(">>>email", email)
    console.log(">>>password", password)
  }
  return (
    <Box>
      <Box mb={3}>
        <Heading mb={1}>Sign up</Heading>
        <Text>Don't have an account? Create new account below.</Text>
      </Box>

      <Box as="form" onSubmit={handleSubmit}>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          type="text"
          id="firstName"
          mb={2}
          value={firstName}
          onChange={handleChangeFirstName}
        />

        <Label htmlFor="lastName">Last Name</Label>
        <Input
          type="text"
          id="lastName"
          mb={2}
          value={lastName}
          onChange={handleChangeLastName}
        />

        <Label htmlFor="emailRegister">Email</Label>
        <Input
          type="email"
          id="emailRegister"
          mb={2}
          value={email}
          onChange={handleChangeEmail}
        />

        <Label htmlFor="passwordRegister">Password</Label>
        <Input
          type="password"
          id="passwordRegister"
          mb={3}
          value={password}
          onChange={handleChangePassword}
        />

        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          type="password"
          id="confirmPassword"
          mb={3}
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
        />

        <Box mt={3}>
          <Flex sx={{ alignItems: "center" }}>
            <Button variant="secondary" type="submit">
              Sign up
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default SignUpForm
