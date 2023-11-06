import { useState } from "react";

export default function App(){

    const urls = [
        {src:"images/pic1.jpg" , alt:"Closeup of a human eye"},
        {src:"images/pic2.jpg" , alt:"Rock that looks like a wave"},
        {src:"images/pic3.jpg" , alt:"Purple and white pansies"},
        {src:"images/pic4.jpg" , alt:"Section of wall from a pharoah's tomb"},
        {src:"images/pic5.jpg" , alt:"Large moth on a leaf"},
    ];

    const [image,setImage] = useState(urls[0]);
    const [DorL,setDorL] = useState("Darken");
    const [rgba,setRgba] = useState("rgba(0,0,0,0)");


    function buttonClick(){
        if(DorL === "Darken"){ 
            setDorL("Lighten");
            setRgba("rgba(0, 0, 0, 0.5)"); //型に注意すること
        }else{
            setDorL("Darken");
            setRgba("rgba(0,0,0,0)");
        }
    }

    function handleClick(element){
        setImage(element);
    }

    return (
      <>
        <h1>Image gallery example</h1>
        <div className="full-img">
          <img
            className="displayed-img"
            src={image.src}
            alt={image.alt}
          />
          <div className="overlay" style={{ backgroundColor: rgba }}>

          </div>
          <button className="dark" onClick={() => buttonClick()}>
            {DorL}
          </button>
        </div>
        <div className="thumb-bar">
            {urls.map((element,index) => { //element,indexを引数に指定
                return (
                    <img onClick={() => handleClick(element)}                       
                        key={index}  //indexをkeyに指定
                        src={element.src}
                        alt={element.alt} 
                    />
                );
            })}

        </div>
      </>
    );
}