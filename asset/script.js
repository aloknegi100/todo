let button=document.getElementById('delete-task');
button.addEventListener('click',()=>{
    var checkbox=document.querySelectorAll('.checkbox');
    var arr=[];
    for(i of checkbox)
    {
        if(i.checked)
        {
            arr.push(i.dataset.id);
        }
    }
    let url="/delete/?id=";
    for(i of arr)
    {
        url+=i+"%";
    }
    window.location=url;

})