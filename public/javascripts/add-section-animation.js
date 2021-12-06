let confirmAdd = document.querySelector('#confirmAdd');
        let inputs = document.querySelectorAll('.form-control');
        let nonEmpty = 0;
        inputs.forEach((input)=>{
            
            input.addEventListener('change',()=>{
                if(input.value !=="" ){
                    console.log(input.value);
                    nonEmpty = nonEmpty +1;
                }
                console.log(nonEmpty);
                if(nonEmpty === 4){
                    animationLOGO();
                }
            });
            
        })
        function animationLOGO(){
            
            confirmAdd.addEventListener("click",(e)=>{

            confirmAdd.parentElement.style.display ="none";
            var animation = document.createElement('img');
            var msg = document.createElement('p');
            confirmAdd.parentElement.parentElement.classList.add('center');
            msg.style.fontSize="16px";
            msg.style.color= "#363738";
            msg.style.fontFamily="Roboto";

            msg.innerHTML='Adding book';
            animation.src= "https://cutewallpaper.org/21/loading-gif-transparent-background/Tag-For-Transparent-Spinner-Icon-Pehliseedhi-Suitable-.gif";
            animation.setAttribute("style","width:50px;height:50px");
            confirmAdd.parentElement.parentElement.appendChild(animation);
            confirmAdd.parentElement.parentElement.appendChild(msg);

            })
        }