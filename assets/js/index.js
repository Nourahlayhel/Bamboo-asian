fetch('http://localhost:3000')
.then(response => response.json())
.then(json=> {

  console.log(json);
    for(let i=0;i<json.length;i=i+parseInt(json[i].types)+1){
        console.log("i:" + i);
        var mydiv= document.createElement("div")
        mydiv.className="col-lg-6 menu-item filter-"+json[i].kind
       var img=document.createElement("img");
        img.src=json[i].pic
        img.style.height="70px";
        img.style.width="70px"
        
        img.className="menu-img"
        mydiv.appendChild(img);

        var name=document.createElement("a");
        
        name.innerHTML=json[i].Name;
        var divv=document.createElement("div")
        divv.className="menu-content"
       divv.appendChild(name);
       var list=document.createElement("div")  
       var p=document.createElement("p")
       p.className="menu-ingredients"
       p.innerHTML=json[i].description
       list.appendChild(p);
        if(json[i].types!=0)
        {
            
          
            var ul=document.createElement("ul")
            
            for(let j=0;j<json[i].types;j++){
               var li= document.createElement("li")
               var aa =json[i+j+1].types+"  "  +json[i+j+1].price
               li.innerHTML= aa
               li.className="menu-ingredients";
               ul.appendChild(li);
               
            }
            list.appendChild(ul);
            
        }
        else {
        var span=document.createElement("span")
        span.innerHTML=json[i].price;
        divv.appendChild(span)
        }
   
    mydiv.appendChild(divv);
        mydiv.appendChild(list);
         document.getElementById("bamboomenu").appendChild(mydiv);
            
    }

})


