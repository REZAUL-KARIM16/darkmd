


let btn=document.querySelector('.btn');

let body=document.querySelector('body');

btn.addEventListener("click",()=>{



    body.classList.toggle('darkmood');

    if(body.classList.contains('darkmood')==true){

        btn.innerHTML='<i class="fa-regular fa-sun"></i>'
    }else{

        btn.innerHTML='<i class="fa-regular fa-moon"></i>'
        
    }
    



})


// cursor


let cursor=document.querySelector('.cursor')
let smcursor=document.querySelector('.sm-cursor')



function custommouse(event){


    let leftvalue=event.clientX

    let topvalue=event.clientY

    cursor.style.top=`${topvalue}px`
    cursor.style.left=`${leftvalue}px`

    smcursor.style.top=`${topvalue}px`
    smcursor.style.left=`${leftvalue}px`

}




window.addEventListener('mousemove',custommouse)