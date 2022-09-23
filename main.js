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

            document.getElementById("top").innerHTML = "Top: Winter Jacket";

            document.getElementById("bottom").innerHTML = "Bottom : Winter Pants";

            document.getElementById("foot").innerHTML = "Foot: WaterProof Winter Shoes";
        }
        else if (temp < 6.67 ){
            document.getElementById("head").innerHTML= "Head: Beanie";
            

            document.getElementById("top").innerHTML = "Pants: Woolen pants with thermals";
            

            document.getElementById("bottom").innerHTML = "Torso: Light to medium coat";
           

            document.getElementById("foot").innerHTML = "Shoes: Boots";
            

    }
    else if (temp < 17.8) {
        document.getElementById("head").innerHTML= "Head: Beanie";


        document.getElementById("top").innerHTML = "Top: Windbreaker";
        
        document.getElementById("bottom").innerHTML = "Bottom: Jeans";
       
        document.getElementById("foot").innerHTML = "Shoes: Boots";
    }
    else if (temp <26.1) {
        document.getElementById("head").innerHTML= "Head: Literally Anything";
       
        document.getElementById("top").innerHTML = "Top: Full Sleeves";
        
        document.getElementById("bottom").innerHTML = "Bottom: Chinos";
       
        document.getElementById("foot").innerHTML = "Shoes: Tennis shoes";
        
}
else  {
    document.getElementById("head").innerHTML= "Head: As you wish";
   
    document.getElementById("top").innerHTML = "Top: Half sleeves";
   

    document.getElementById("bottom").innerHTML = "Bottom: Short sleeves";
    

    document.getElementById("foot").innerHTML = "Shoes: Sandals";
    
}})}