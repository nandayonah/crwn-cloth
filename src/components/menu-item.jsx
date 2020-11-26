/** @jsx jsx */
import { Box, Button, Flex, jsx } from "theme-ui"
import PropTypes from "prop-types"
import { useHistory, useRouteMatch } from "react-router-dom"

const MenuItem = ({ id, title, imageUrl }) => {
  const history = useHistory()
  const match = useRouteMatch()

  return (
    <Box
      sx={{
        minHeight: "150px",
        borderRadius: 2,
        background: `url(${imageUrl})`,
      }}
    >
      <Flex sx={{ alignItems: "center", pl: 3, pt: 3 }}>
        <Box>
          <h2 sx={{ my: 1, color: "light" }}>{title}</h2>
          <Button onClick={() => history.push(`${match.url}${id}`)}>
            Shop Now
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

MenuItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}

export default MenuItem
