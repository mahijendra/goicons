import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/Navbar'
import Homy from '../components/Home'
import Search from '../components/Search'

const Home =() =>{
  return(
    <div>
       <NavBar />
       <Homy />
       <Search />
    </div>
  )
}

export default Home;

