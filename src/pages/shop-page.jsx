/** @jsx jsx */
import CollectionPreview from "components/collections-preview"
import Container from "components/container"
import { useState } from "react"
import shopData from "shop-data"
import { Box, Divider, jsx } from "theme-ui"

const ShopPage = () => {
  const [collections, setCollections] = useState(shopData)

  return (
    <Container>
      <h1>Popular Picks</h1>

      <Box>
        {collections.map(({ id, ...otherProps }) => (
          <Box key={id}>
            <CollectionPreview id={id} {...otherProps} />
            <Divider />
          </Box>
        ))}
      </Box>
    </Container>
  )
}
export default ShopPage
