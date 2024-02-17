import Cardcontainer from './Cardcontainer';
import Footer from './Footer';
import React  from 'react';
import { Fragment }  from 'react';


const Body = () => {
    console.log("react" , React);
return(
    
    
    
    <div className='text-dark'>
        <Fragment>
         
        <Cardcontainer/>
        <Footer/>
        </Fragment>
    </div>
    
)
}
export default Body;