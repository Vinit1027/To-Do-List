var j = document.getElementById('bttn');


j.addEventListener('click',fun10);





function fun10(){

    var i = document.getElementById('one').value;

    var e = document.createElement('div');

    e.id = "three"

    e.className = "rect";
    e.innerHTML = i;

    var k = document.createElement('button');

    k.innerHTML = "&times;"

    e.appendChild(k);

    document.getElementById('ans').appendChild(e);

    k.onclick = function(){

        e.remove();
    }

}