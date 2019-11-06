

document.addEventListener('DOMContentLoaded', () => {
  const handleSubmission = e => {
    e.preventDefault()
    let htmlcollection = document.getElementById("accessory-selected").children
    let accessoryImgIds = [].slice.call(htmlcollection);
    
    let accessories = accessoryImgIds.map(function(elId) {
        let accessoryObj = {};
        accessoryObj.src = "./images/" + elId.id + ".png"
        return accessoryObj;
    })
    
    const dog = {
        dog: {
            name: document.getElementById("name").value,
            accessories_attributes: accessories
        }
    }
    
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
            const dog = new Dog(data)
            loadDogs()
            e.target.reset()
        })
        .catch(function(error) {
            alert("Form error!");
            console.log(error.message);
        });
    }

    function deleteDog() {
        let dogId = this.parentElement.getAttribute("dog-id");
        fetch(BASEURL + `/dogs/${dogId}`, {
            method: "DELETE"
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                let deletedDog = document.querySelector(`.grid-item[dog-id="${dogId}"]`)
                deletedDog.remove()
            })
            .catch(function(error) {
                alert("Fetch error!");
                console.log(error.message);
            });
    }
    
    const loadDogs = async params => {
        const dogs = await (await fetch(BASEURL + '/dogs')).json()
        app_instance = new App(dogs)
        document.getElementById("dog-list").innerHTML = app_instance.render()
        const buttons = Array.from(document.getElementsByClassName("delete-dog-button"));

        buttons.forEach(button => {
            button.addEventListener('click', deleteDog);
        })
    }
  
    loadDogs();

    document
        .querySelector('#dog-form')
        .addEventListener('submit', handleSubmission);

    // document
    //     .querySelector('.grid-item').forEach.addEventListener('.delete-dog-button').forEach(button => {
    //         button.addEventListener("click", deleteDog)
    //     })
        
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