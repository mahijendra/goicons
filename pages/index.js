import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/Navbar'
import Homy from '../components/Home'
import Search from '../components/Search'
import Main from '../components/Main'
import Icons from '../components/Icons'

const Home =() =>{
  return(
    <div>
       <NavBar />
       <Homy />
       <Search />
       <Main />
       <Icons />
    </div>
  )
}

export default Home;

