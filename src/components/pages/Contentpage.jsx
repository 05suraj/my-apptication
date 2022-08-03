import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import PositionContext from '../context/createPositionContext'
const Contentpage = () => {
  const a = useContext(PositionContext)

  const navigate = useNavigate()

  return (
    <div className='container'>
      <div className='col-md-12'>
        <div className='pt-4'>
          <h3 >Page 2</h3>
        </div>
        <div className='mx-auto col-md-6 pt-5 text-justify' >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          repellendus quo iure hic. Deleniti commodi est quo obcaecati dolores, quam porro quasi
          , exercitationem possimus ducimus nam magnam nulla consectetur tenetur sunt dolor corporis
          id nisi eaque earum repudiandae delectus molestiae ullam? Non consequatur magni sint quibusdam
          quisquam suscipit ipsum sunt, vero accusamus quis molestias consequuntur p.
          s ducimus nam magnam nulla consectetur tenetur sunt dolor corporis
          id nisi eaque earum repudiandae delectus molestiae ullam? Non consequatur magni sint quibusdam
          quisquam suscipit ipsum sunt, vero accusamus quis molestias consequuntur p
          id nisi eaque earum repudiandae delectus molestiae ullam? Non consequatur magni sint quibusdam
          quisquam suscipit ipsum sunt, vero accusamus quis molestias consequuntur p
          id nisi eaque earum repudiandae delectus molestiae ullam? Non consequatur magni sint quibusdam
          quisquam suscipit ipsum sunt, vero accusamus quis molestias consequuntur p
        </div>

        <div className='pt-4'>
          <button className='btn btn-info' onClick={()=>navigate('/')}>Back <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Contentpage