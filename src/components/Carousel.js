const carousel =({link,text,type}) =>{
    return(
     <div className="mind-card">
      <div>
        <img src={link}
        alt="resimage" 
        width="100%" 
        style={{height:"150px", 
        objectFit:"cover"}}/>
      </div>
      <h6 className="text">{text}</h6>
      <h6 className="type">{type}</h6>
     </div>
    )
}
export default carousel;

