import React from 'react'
import Cards from './Cards/Cards'
import More from './More/More'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
    <div className='p-20 bg-black text-white'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
    <Cards
        image="Tshirt.webp"
        title="Lorem T-shirt"
        price="Rs. 999/-"
      />
      <Cards
        image="Tshirt.webp"
        title="Lorem T-shirt"
        price="Rs. 999/-"
      />
      <Cards
        image="Tshirt.webp"
        title="Lorem T-shirt"
        price="Rs. 999/-"
      />
      <Cards
        image="Tshirt.webp"
        title="Lorem T-shirt"
        price="Rs. 999/-"
      />
  </div>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
    <Cards
        image="Tshirt.webp"
        title="Lorem T-shirt"
        price="Rs. 999/-"
      />
      <Cards
        image="Tshirt.webp"
        title="Lorem T-shirt"
        price="Rs. 999/-"
      />
      <Cards
        image="Tshirt.webp"
        title="Lorem T-shirt"
        price="Rs. 999/-"
      />
      <Cards
        image="Tshirt.webp"
        title="Lorem T-shirt"
        price="Rs. 999/-"
      />
  </div>
    </div>
<More/>
{/* <Footer/> */}
    </div>
  )
}

export default Home
