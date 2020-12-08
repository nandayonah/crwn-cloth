/** @jsx jsx */
import { useState } from "react"
import { Grid, jsx } from "theme-ui"
import MenuItem from "./menu-item"

const categories = [
  {
    id: "tops-collection",
    title: "Tops Collection",
    subtitle: "",
    imageUrl:
      "https://www.highty.id/wp-content/uploads/2019/03/217362-800x800.jpg",
  },
  {
    id: "jeans-and-trousers",
    title: "Jeans and Trousers",
    subtitle: "",
    imageUrl:
      "https://www.highty.id/wp-content/uploads/2018/06/S__16810035-Copy-800x800.jpg",
  },
  {
    id: "footwears",
    title: "Footwears",
    subtitle: "",
    imageUrl:
      "https://www.highty.id/wp-content/uploads/2019/03/217360-640x800.jpg",
  },
  {
    id: "accessories",
    title: "Accessories",
    subtitle: "",
    imageUrl:
      "https://www.highty.id/wp-content/uploads/2019/03/217359-800x800.jpg",
  },
]

const Directory = () => {
  const [menuItems, setMenuItems] = useState(categories)

  return (
    <Grid gap={[2, 4, 4]} columns={[1, 2, 2]}>
      {menuItems.map((menu) => (
        <MenuItem key={menu.id} {...menu} />
      ))}
    </Grid>
  )
}

export default Directory
