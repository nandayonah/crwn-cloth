/** @jsx jsx */
import { Box, jsx } from "theme-ui"

const Container = ({ children }) => {
  return <Box sx={{ variant: "container" }}>{children}</Box>
}

export default Container
