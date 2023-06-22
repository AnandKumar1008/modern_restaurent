import React from 'react'
import {About,Awards,Chef,Customer,Footer,Header,Instagram,Menu,Nav,TodaySpecial,Update,Aboutus,MenuStyle,Table,Delicious } from '../../Components'
const Home = () => {
  return (
    <div>
         <Nav />
      <Header />
      <About />
      {/* <TodaySpecial /> */}
<Delicious/>
      <Chef />
      <Menu />
      <Customer />
      <Awards />
      <Update />
      <Instagram />
      <Footer />
      
        
      
    </div>
  )
}

export default Home
