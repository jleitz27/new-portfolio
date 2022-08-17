import { useSearchParams } from "react-router-dom"

const ProductsPage = (props) => {
  const [searchParams] = useSearchParams()
  console.log(searchParams.get('name'))
  return (
    <div>
      <h1>This is the Products page and the user is : {searchParams.get('name')}</h1>
    </div>
  )
}

export default ProductsPage