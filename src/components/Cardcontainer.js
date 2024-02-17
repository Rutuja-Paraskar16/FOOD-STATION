
import Restaurantcard  from "./Restaurantcard";
import data from '../utils/config';
import masterData from '../utils/dummyData';
import { useState } from "react";
import carousel from "./Carousel";
import { Carousel } from "bootstrap";

const Cardcontainer = () => {
    console.log("mindCollection" ,masterData[0]?.Cards?.card?.card?.imageGridCards?.action);
     const mind  = masterData[0]?.Cards?.card?.card?.imageGridCards?.action;
    //const {imgURL,name,rating,deliveryTime,cuisins,Location} = data[0];
   // url,name,rating,deliveryTime,cuisins,Location
    //console.log("data" , data[0]);
    //console.log("restaurantCollection",masterData[0]?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    const collection =masterData[0]?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
   // let count = 0;
   const  [count , setcount] = useState(0);
   console.log("data",data)

    const increment = () =>{
        // count++;
        // console.log("new count", count);
        // document.getElementById("countinput").value=count
        setcount(count++);
    }
    return(
        <>
        <div className="container d-flex justify-content-between flex-wrap">
            {
                mind.map((card , header)=>{
                return(
                    
                <Carousel
                key={header} 
                link={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/"+card?.info?.imageId}
                 text={card?.info?.entityType}
                 type={card?.info?.accessibility}
                />
                )
})
            }
        
        </div>
        < input type="text" value={count} id="countinput" placeholder="entet-title"/>
        <button onClick={increment}>+</button>
        <h1>{count}</h1>
        <div className="container d-flex justify-content-between flex-wrap mt-4 gap-4">
            {/* <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisins={cuisins} Location={Location}/>
            <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisins={cuisins} Location={Location}/>
            <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisins={cuisins} Location={Location}/>
            <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisins={cuisins} Location={Location}/>
            <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisins={cuisins} Location={Location}/> */}
         {
            collection.map((card , index )=>{
                return(
                    
                   
                   
                    // {/* // <Restaurantcard
                    // // url={card?.imgURL}
                    // // name={card?.name}
                    // // rating={card?.rating}
                    // // deliveryTime={card?.deliveryTime}
                    // // cusins={card?.cusins}
                    // // Location={card?.Location}
                    // // /> */}
                    <Restaurantcard
                    key={index}
                     imgURL ={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+card?.info?.cloudinaryImageId}
                        name ={card?.info?.name}
                        rating ={card?.info?.avgRating}
                        deliveryTime ={card?.info?.sla?.deliveryTime}
                        cuisins ={card?.info?.cuisines.join(", ")}
                        location = {card?.info?.areaName}
                       
                    />

                    
                 )
            })
         }
        </div>
       </> 
    );
    }
    export default Cardcontainer;