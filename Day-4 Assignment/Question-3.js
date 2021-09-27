


var getFlags = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

    xhr.responseType = "json";

    xhr.onload = () => {
        var arr = xhr.response;
       for(var country of arr){
           console.log("Country:"+country.name);
           console.log("Region:"+country.region);
           console.log("Sub Region:"+country.subregion);
           console.log("Population:"+country.population);
       }
    }

    xhr.send();

} 

getFlags();
