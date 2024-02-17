import data from "../utils/config";

const Restaurantcard = ({imgURL,name,rating,deliveryTime,cuisins,location}) => {
   // console.log("props" , props)
   // const {url,name} = props;
    return(
      <>
      
       <div className="custom-card">
        <div>
      
            <img src={ imgURL}
            alt="resimage" 
            width="100%" 
            style={{height:"150px", 
            objectFit:"cover"}}/>
            </div>
            <h6 className="cuisine">{name}</h6>
            <div>
                <h6 className="bg-success text-white p-1">⭐{rating}/10</h6>
                <h6>{deliveryTime}min</h6>
        </div>
        <h6 className="text-secondary cuisine">{cuisins}</h6>
        <h6 className="text-secondary">{location}</h6>
       </div>
       </>
    )
    }

    export default Restaurantcard;