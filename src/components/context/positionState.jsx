import { useState } from 'react'
import PositionContext from '../context/createPositionContext'
import moment from 'moment';

const PositionState = ({children}) => {

   const [postion, setPosition] = useState('main-center')
   const [border, setBoder] = useState(false)
   const [time, setTime] = useState('')

   const Tz = () => {
    setTime(moment().format('hh:mm:ss a')) 
   }
   const changePostion = (e) => {
      setPosition(e.target.value)
   }
    return(
      <PositionContext.Provider  value={{changePostion, postion, setPosition, setBoder, border,time ,Tz}}>
          {children}
      </PositionContext.Provider>
    )

}

export default PositionState; 