class Dog {
    constructor(dogObj) {
        this.name = dogObj.name
        this.id = dogObj.id
        this.accessories = []
        dogObj.accessories.map(getAccessory.bind(this))

        function getAccessory(accessory) {
            this.accessories.push(accessory)
        }
    }

    render() {
        return `<div class="grid-item" dog-id=${this.id}>
                <h3>Name: ${this.name}</h3>
                <button class="delete-dog-button">Delete Dog</button>

                <img class="saved-dog" src="./images/boston-terrier.png" alt="Boston Terrier">
                ${this.accessories.map(function(accessory) { 
                    return "<img class='saved-accessory' src=" + accessory.src + ">"
                }).join("")}
                </div>`
      }
}