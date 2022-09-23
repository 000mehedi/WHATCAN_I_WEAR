//getting location input

function getLocation(){
    const location = document.getElementById("location");

    //fetching the API
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+location.value+"&appid=c9dbfe419caaad8dfe99e90d39c81b98")
.then(response=>response.json())
.then(data => {
    for(i = 0; i<3; i++){
        document.getElementById("day" + (i+1) + "Temp").innerHTML = "Temp:" + Number(data.list[8*i].main.temp - 273.15).toFixed(1)+ "°";
        document.getElementById("day" + (i+1) + "FeelsLike").innerHTML = "Feel:" + Number(data.list[8*i].main.feels_like - 273.15).toFixed(1)+ "°";
        document.getElementById("day" + (i+1) + "Condition").innerHTML = String(data.list[8*i].weather[0].main);
       
        document.getElementById("day"+(i+1)).innerHTML = String(data.list[8*i].dt_txt).split(' ').shift();
    }
})
};



function getClothing(){
    var count = 0;
    const location = document.getElementById("location");
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+location.value+"&appid=c9dbfe419caaad8dfe99e90d39c81b98")
    .then(response => response.json())
    .then(data => {
        for(i=0;i<3;i++){
        temp_ = Number(data.list[8*i].main.feels_like - 273.15).toFixed(1)
        temp_ = parseFloat(temp_)
        count += temp_
        temp = count/3
        }

        if(temp < -3.9){
            document.getElementById("head").innerHTML= "Head: Beanie";
            document.getElementById("head_img").src = "./images/beanie.png";

            document.getElementById("top").innerHTML = "Top: Winter Jacket";
            document.getElementById("top_img").src = "./images/winter-jacket.png";

            document.getElementById("bottom").innerHTML = "Bottom : Winter Pants with thermals";
            document.getElementById("bottom_img").src = "./images/woolenpants.png";

            document.getElementById("foot").innerHTML = "Foot: WaterProof Winter Shoes";
            document.getElementById("foot_img").src = "./images/boots.png";
        }
        else if (temp < 6.67 ){
            document.getElementById("head_img").innerHTML= "Head: Beanie";
            document.getElementById("head_img").src = "./images/beanie.png";

            document.getElementById("top_img").innerHTML = "Top: Overcoat";
            document.getElementById("top_img").src = "./images/overcoat.png";

            document.getElementById("bottom_img").innerHTML = "Bottom: Woolen Pants";
            document.getElementById("bottom_img").src = "./images/woolenpants.png";

            document.getElementById("foot_img").innerHTML = "Foot: WaterProof Winter Shoes";
            document.getElementById("foot_img").src = "./images/boots.png";
            

    }
    else if (temp < 17.8) {
        document.getElementById("head_img").innerHTML= "Head: Beanie";
        document.getElementById("head_img").src = "./images/beanie.png";

        document.getElementById("top_img").innerHTML = "Top: Fleece";
        document.getElementById("top_img").src = "./images/fleece.png";
        
        document.getElementById("bottom_img").innerHTML = "Bottom: Jeans";
        document.getElementById("bottom_img").src = "./images/jeans.png";

        document.getElementById("foot_img").innerHTML = "Shoes: Boots";
        document.getElementById("foot_img").src = "./images/tennisshoes.png";
    }
    else if (temp <26.1) {
        document.getElementById("head_img").innerHTML= "Head: Literally Anything";
        document.getElementById("head_img").src = "./images/no_need.png";
       
        document.getElementById("top_img").innerHTML = "Top: Tshirt";
        document.getElementById("top_img").src = "./images/tshirt.png";
        
        document.getElementById("bottom_img").innerHTML = "Bottom: Shorts";
        document.getElementById("bottom_img").src = "./images/shorts.png";
       
        document.getElementById("foot_img").innerHTML = "Shoes: Tennis shoes";
        document.getElementById("foot_img").src = "./images/tennisshoes.png";
        
}
else  {
    document.getElementById("head_img").innerHTML= "Head: A hat maybe?";
    document.getElementById("head_img").src = "./images/hat.png";
   
    document.getElementById("top_img").innerHTML = "Top: Tshirts";
    document.getElementById("top_img").src = "./images/tshirt.png";
   

    document.getElementById("bottom_img").innerHTML = "Bottom: Short sleeves";
    document.getElementById("bottom_img").src = "./images/shorts.png";

    document.getElementById("foot_img").innerHTML = "Shoes: Sandals";
    document.getElementById("foot_img").src = "./images/sandals.png";
}})}