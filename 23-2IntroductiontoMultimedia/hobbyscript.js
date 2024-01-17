function galopen() {
    var popUrl = "https://users.sussex.ac.uk/~jk618/WebsiteDevelopment/morepictures.html";
    var popOption = "top=10, left=10, width=600, height=800, resizable=no";
    window.open(popUrl, "_blank" ,popOption);
}


var i = 1;

function prev(){
    if(i==1){
        none;
    }
    else{
        i -= 1;
        document.getElementById("image_area").innerHTML = '<img src="pictures/sw' + i + '.jpg" width="80%"></img>';
        document.getElementById("imgnum").innerHTML = i + '/15';

        if(i==1){
            document.getElementById("thumbnail").innerHTML = '<img src="pictures/sw' + i + '.jpg" width="95%"><img src="pictures/sw' + (i+1) + '.jpg" width="95%" id="notnow"><img src="pictures/sw' + (i+2) + '.jpg" width="95%"  id="notnow">';

        }
        else{
            document.getElementById("thumbnail").innerHTML = '<img src="pictures/sw' + (i-1) + '.jpg" width="95%" id="notnow"><img src="pictures/sw' + i + '.jpg" width="95%" ><img src="pictures/sw' + (i+1) + '.jpg" width="95%" id="notnow">';
        }
    }
}

function next(){
    if(i==15){
        none;
    }
    else{
        i += 1;
        document.getElementById("image_area").innerHTML = '<img src="pictures/sw' + i + '.jpg" width="80%"></img>';
        document.getElementById("imgnum").innerHTML = i + '/15';

        if(i==15){
            document.getElementById("thumbnail").innerHTML = '<img src="pictures/sw' + (i-2) + '.jpg" width="95%" id="notnow"><img src="pictures/sw' + (i-1) + '.jpg" width="95%" id="notnow"><img src="pictures/sw' + i + '.jpg" width="95%">';

        }
        else{
            document.getElementById("thumbnail").innerHTML = '<img src="pictures/sw' + (i-1) + '.jpg" width="95%" id="notnow"><img src="pictures/sw' + i + '.jpg" width="95%" ><img src="pictures/sw' + (i+1) + '.jpg" width="95%" id="notnow">';
        }
        
        
    }

}