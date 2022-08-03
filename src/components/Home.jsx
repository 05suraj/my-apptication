import React,{useContext} from 'react'
import PositionContext from '../components/context/createPositionContext'
const Home = () => {
  
  const value = useContext(PositionContext)

  return (
    <div className='fluid-container div-container '>
         <div className={value.postion} >
          <img   src="https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg" alt="" />
         </div>
    </div>
  )
}

export default Home