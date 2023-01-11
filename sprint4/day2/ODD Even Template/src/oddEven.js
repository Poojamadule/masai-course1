
function getData(data) {
    let buttonEl=document.querySelector("button");
    let inputEl= document.querySelector("input");
    buttonEl.addEventListener("click",()=>{   
   
     let data=Number(inputEl.value);
    
       
        let promise=new Promise(function(resolve,reject){

            setTimeout(()=>{
               if(data%2 == 0){
                resolve("even")
               }else{
                setTimeout(()=>{
                  if(data%2 !=0){
                    resolve("odd")
                  }
                },4000)
               }
               
            },2000)
            
                if(data!=inputEl.value){
                    reject("error")
                }
               
        
        })
    
        promise
    .then((el)=>{
        console.log(el);
    
    })
    .catch((el)=>{
        console.log(el)
    })
    
       
});

}
export default getData
