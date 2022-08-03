import React,{useContext, useEffect} from 'react'
import PositionContext from './context/createPositionContext'

const Header = () => {

 const data = useContext(PositionContext)

 useEffect(()=>{
   setInterval(()=>{
    data.Tz()
   }) 
 },1000)
 
console.log(data.postion)
    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-dark ">
                <div class="container-fluid">
                <span class="navbar-brand text-light" href="#">Position : </span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"> </span>
                        
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item ">
                                <div class="form-check  ">
                                    <input onChange={data.changePostion}  value='main-center' class="form-check-input"   type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label text-light mr-radio" for="flexRadioDefault1">
                                        Center
                                    </label>
                                </div>
                            </li>

                            <li class="nav-item ">
                                <div class="form-check">
                                    <input onChange={data.changePostion} class="form-check-input" value='main-bottom' type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label text-light" for="flexRadioDefault1">
                                        Botton right
                                    </label>
                                </div>
                            </li>
                        </ul>
                        <div class="d-flex" role="search">
                            <span className='text-light'>{data.time}</span>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header