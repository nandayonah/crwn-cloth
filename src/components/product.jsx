/** @jsx jsx */
import { Box, Image, jsx, Text } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { numberToRupiah } from "utils/numberUtils"

const Product = ({ product: { id, name, imageUrl, price } }) => {
  return (
    <Box sx={{ minWidth: "200px", minHeight: "300px" }} bg="white">
      <Link to={`/product/${id}`}>
        <Image src={imageUrl} width={200} height={200} />
      </Link>
      <Text>{name}</Text>
      <Text sx={{ fontWeight: "bold" }}>{numberToRupiah(price)}</Text>
    </Box>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
}

export default Product
