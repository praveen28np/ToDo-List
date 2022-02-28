var input = document.getElementById('myInput');
var btnAdd = document.getElementById('btnAdd');
var mylist = document.getElementById('listItems');
var items = document.getElementsByTagName('li');

var cls = document.getElementById('cls');


btnAdd.addEventListener('click', function(){
    var txt = input.value;
    if(txt == ""){
        alert('you must write something');
    }else{
        li = document.createElement('li');
        li.innerHTML = txt;
        var leng = mylist.length;
        mylist.insertBefore(li, mylist.childNodes[leng]);
        input.value = "";

        var btnClose = document.createElement("button");
  		var txt = document.createTextNode("\u00D7");
 		btnClose.className = "close";
        btnClose.appendChild(txt);
  		li.appendChild(btnClose);
        
        btnClose.setAttribute("class","close");
    }
})


mylist.addEventListener('click', function(ev){
    ev.target.classList.toggle('checked');
})

cls



