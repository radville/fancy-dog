document.addEventListener('DOMContentLoaded', () => {
    const handleSubmission = e => {
        e.preventDefault()
        // let dog = {
        //   name: ,
        //   accessories: {
        //     src: e.target.author.value
        //   }
        // }

        let configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(dog)
          }

        fetch(BASEURL + '/dogs', configObject)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
                // const dog = new Dog(data)
                // dogList.innerHTML = app_instance.render()
                // e.target.reset()
            })
            .catch(function(error) {
                alert("Form error!");
                console.log(error.message);
            });
        }
    document
        .querySelector('#dog-form')
        .addEventListener('submit', handleSubmission)
//   loadPosts()
    
})

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    if (ev.target.parentElement.id === "dog-form" || ev.target.parentElement.id === "accessory-selected" ) {
        document.getElementById("accessory-selected").appendChild(document.getElementById(data));
    } else {
        document.getElementById("accessory").appendChild(document.getElementById(data));
    }
}