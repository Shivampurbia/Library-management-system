//spinning Animated gif when clicked on "Edit book" button
//works only when all input elements are not empty

let confirmAdd = document.querySelector('#confirmEdit');
        confirmAdd.addEventListener("click",(e)=>{
            
             
            confirmAdd.parentElement.style.display ="none";
            var animation = document.createElement('img');
            var msg = document.createElement('p');
            confirmAdd.parentElement.parentElement.classList.add('center');
            msg.style.fontSize="16px";
            msg.style.color= "#363738";
            msg.style.fontFamily="Roboto";
            
            msg.innerHTML='Updating book';
            animation.src= "https://www.tru-flex.com/assets/img/loader.gif";
            animation.setAttribute("style","width:50px;height:50px");
            confirmAdd.parentElement.parentElement.appendChild(animation);
            confirmAdd.parentElement.parentElement.appendChild(msg);
           
        })