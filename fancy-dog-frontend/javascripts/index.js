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
    console.log(ev.target )
    document.getElementById("accessory-selected").appendChild(document.getElementById(data));
  }