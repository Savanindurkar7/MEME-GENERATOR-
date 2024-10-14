let div = document.querySelector(".main");
    let img = document.querySelector(".img")
    let author = document.querySelector(".author");
    let title = document.querySelector(".title");
    let btn = document.querySelector(".generate");
    
  async function    genrateMeams(){
   let response = await fetch('https://meme-api.com/gimme/wholesomememes');
   let data = await response.json();
   //console.log(data);
   img.src = data.url;
   author.innerText= "Auther: "+ data.author;
   title.innerText=  data.title;
   
   
    

       
     }
     
     genrateMeams()
   
   
  btn.addEventListener("click",()=>{
    genrateMeams()
  })
     
     
     