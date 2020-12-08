/** @jsx jsx */
import CollectionPreview from "components/collections-preview"
import { useState } from "react"
import shopData from "shop-data"
import { Box, Container, Divider, jsx } from "theme-ui"

const ShopPage = () => {
  const [collections, setCollections] = useState(shopData)

  return (
    <Container>
      <h1>Popular Picks</h1>

      <Box>
        {collections.map(({ id, ...otherProps }, idx) => (
          <Box key={id}>
            <CollectionPreview id={id} {...otherProps} />
            {idx !== collections.length - 1 && <Divider />}
          </Box>
        ))}
      </Box>
    </Container>
  )
}
export default ShopPage
