//whenevr delete is click this will blur the background and will
//show a pop up to delete the book

function deletebook(j){
    console.log('still runnnig');
    document.querySelector('.delete-section').setAttribute("style","display:block");
    document.querySelector('.card').setAttribute("style","filter: blur(4px) brightness(0.90);")
    
   
    var del = document.querySelector('#confirmDelete');
    //this href will tell the server which file to delete
    del.parentElement.href = j;    
}

//hiding the delete pop up when not active
function displaynone(){
    document.querySelector('.card').setAttribute("style","filter: blur(0px);")
    document.querySelector('.delete-section').setAttribute("style","display:none");   
}


//the success message that displays which operation has been performed
//deleted book,updated book or added book
const timeout = document.querySelector('#aaa')
timeout.addEventListener('onload',(e)=>{
    e.preventDefault();
})
setTimeout(hideElement, 3000) //milliseconds until timeout//
function hideElement() {
    timeout.style.display = 'none';
}

var msg = document.querySelector(".action-msg");
if(msg.innerHTML.includes('deleted!')){
    msg.setAttribute("style","background-color:  #dc3545;")
}
if(msg.innerHTML ==="Book added"){
    msg.setAttribute("style","background-color: #87C98D")
}

document.querySelector("#confirmDelete").addEventListener("click",(e)=>{
    
    let yesnobutton = document.querySelector("#deletionlogo")
    yesnobutton.setAttribute("style","display:none");
    var animation = document.createElement('img');
    var msg = document.createElement('p');
    msg.classList.add('warn-center');
    msg.style.fontSize="16px";
    msg.style.color= "#363738";
    msg.style.fontFamily="Roboto";
    
    msg.innerHTML='deleting book';
    animation.src="https://www.cama.co.in/images/spinloader.gif";
    animation.setAttribute("style","width:50px;height:50px");
    yesnobutton.parentElement.appendChild(animation);
    yesnobutton.parentElement.parentElement.appendChild(msg);
})
