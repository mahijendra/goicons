import Home from '../components/Home'
import Search from '../components/Search'
import Icons from '../components/Icons'
import SVG from '../components/svg.js'

const Index =() =>{
  return(
    <div>
       <Home />
       <Search />
       {/* <Icons svgItem ={svgItem} />  */}
       <SVG />
    </div>
  )
}

export default Index;

