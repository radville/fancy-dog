    const loadDogs = async params => {
        const dogs = await (await fetch(BASEURL + '/dogs')).json()
        app_instance = new App(dogs)
        document.getElementById("dog-list").innerHTML = app_instance.render()
      }

    const handleSubmission = e => {
        e.preventDefault()
        let htmlcollection = document.getElementById("accessory-selected").children
        let accessoryImgIds = [].slice.call(htmlcollection);
        
        let accessories = accessoryImgIds.map(function(el) {
            return el.id;
        })

        // console.log(accessories) // e.g.["cowboy-hat", "wizard-hat", "straw-hat"]
        
        const dog = {
            dog: {
                name: document.getElementById("name").value
            },
            accessory: {
                src: "test source" //`./images/${accessoryID}.png`
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

document.addEventListener('DOMContentLoaded', () => {
  loadDogs()
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