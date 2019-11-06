class Dog {
    constructor(dogObj) {
        this.name = dogObj.name
        this.accessories = []
        dogObj.accessories.map(getAccessory.bind(this))

        function getAccessory(accessory) {
            this.accessories.push(accessory)
        }
        // how to add more accessories? interate over dogObj.accessories?
        // this.accessory = new Accessory(dogObj.accessory)
    }

    render() {
        return `<div class="grid-item">
                <h3>Name: ${this.name}</h3>
                <img class="saved-dog" src="./images/boston-terrier.png" alt="Boston Terrier">
                ${this.accessories.map(function(accessory) { 
                    return "<img class='saved-accessory' src=" + accessory.src + ">"
                }).join("")}
                </div>`
      }
}