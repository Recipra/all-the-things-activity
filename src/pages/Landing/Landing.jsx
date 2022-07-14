import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <>
      {/* All the <Link> components should live here */}
      <h1>All-The-Things</h1>
      <Link to="/the-manliest-things">Ben's Things</Link><br/>
      <Link to="/the-functional-things">Shahzad's Things</Link><br/>
      <Link to="/the-well-styled-things">David's Things</Link><br/>
      <Link to="/the-silly-things">Hunter's Things</Link><br/>
      {/* <Link to="/dahlia-things"/>Dahlia's Things</Link> */}
      <Link to="/coco-things">Coco's Things</Link><br/>
      <Link to="/savys-things">Savys's Things</Link><br/>

    </>
  )
}
 
export default Landing