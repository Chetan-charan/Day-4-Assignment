

var getFlags = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://restcountries.com/v3/all");

    xhr.responseType = "json";

    xhr.onload = () => {
        var arr = xhr.response;
       for(var country of arr){
           console.log("Country:"+country.name.common);
           console.log("Region:"+country.region);
           console.log("Sub Region:"+country.subregion);
       }
    }

    xhr.send();

} 

getFlags();