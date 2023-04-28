
eventss.onclick = () => {
    alert('Hello');
}

eventlist.addEventListener('click',() => { alert('From event listner 1')});

eventlist.addEventListener('click',() => { alert('From event listner 2')});

function printNameonChange(events) {
    var color = document.getElementById('firstname').value;
    document.getElementById('printName').style.color = events.target.value;
    // document.body.style.backgroundColor = color;
}