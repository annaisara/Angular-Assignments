data = {
    services:[
    {
        name: "Application Services",
        image: "images/application.png",
        features: ["Latest Technology", "Micro Service Architectiure","Cloud Native","Test Driven Development"]

    },
    {
        name: "Testing Services",
        image: "images/testing.jpg",
        features: ["End to End Testing", "Performance Analysis","Quality Assurance","Powerful tools"]
    },
    {
        name: "Infrastructure Services",
        image: "images/infrastructure.png",
        features: ["Cloud Services", "Low Cost","Premium Hardware","High Performance"]
    }
]

}


let code = ""
for (let service of data.services){
   
    code+= "<div class = 'service-box'>"
    code+= "<h3>"+ service.name + "</h3>"
    code+= "<img src='"+ service.image + "'>"
    code+= "<div class='features'> <ul>"
    for (let feature of service.features){

        code+="<li onClick=Alertfunction('"+ encodeURIComponent(feature) + "')>" +feature+"</li>"
    }
    code+= "</ul></div></div>"
}

var Alertfunction = function alertmsg(msg) {
    alert(decodeURIComponent(msg))
}

var Upclick = function Upclick() {

    document.getElementById("slide-area").style.display = "none" 
    document.getElementById("upid").style.visibility = "hidden"
    document.getElementById("downid").style.visibility = "visible"
    
 
}

var Downclick = function Downclick() {

    document.getElementById("slide-area").style.display = "block" 
    document.getElementById("downid").style.visibility = "hidden" 
    document.getElementById("upid").style.visibility = "visible"
    
 
}



document.getElementById("services-wrapper").innerHTML =code