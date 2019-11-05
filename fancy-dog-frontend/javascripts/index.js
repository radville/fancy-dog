document.addEventListener('DOMContentLoaded', () => {
    
})

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(ev.target.parentElement.id )
    if (ev.target.parentElement.id === "dog-form" || ev.target.parentElement.id === "accessory-selected" ) {
        document.getElementById("accessory-selected").appendChild(document.getElementById(data));
    } else {
        document.getElementById("accessory").appendChild(document.getElementById(data));
    }
  }