

var getFlags = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://restcountries.com/v3/all");                      //open xhr request to get all the countries

    xhr.responseType = "json";                                               //response type json

    xhr.onload = () => {
        var arr = xhr.response;                                           
       for(var country of arr){
           console.log(country.flags);                                        // flag of each country
       }
    }

    xhr.send();

} 

getFlags();

