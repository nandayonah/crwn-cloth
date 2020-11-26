/** @jsx jsx */
import { Box, Flex, Grid, jsx } from "theme-ui"
import PropTypes from "prop-types"
import { Link, useRouteMatch } from "react-router-dom"
import Product from "./product"

const CollectionPreview = ({ id, title, items }) => {
  const match = useRouteMatch()

  return (
    <Box>
      <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <h3>{title}</h3>
        <Link to={`${match.url}/${id}`} sx={{ variant: "buttons.link" }}>
          View More
        </Link>
      </Flex>

      <Grid gap={1} columns={5} width={200}>
        {items.splice(0, 5).map((item) => (
          <Product product={item} key={item.id} />
        ))}
      </Grid>
    </Box>
  )
}

CollectionPreview.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
}

export default CollectionPreview
