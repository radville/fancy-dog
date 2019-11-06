class Dog {
    constructor(dogObj) {
        this.name = dogObj.name
        // how to add more accessories? interate over dogObj.accessories?
        // this.accessory = new Accessory(dogObj.accessory)
    }

    render() {
        return `<div class="card">
                <div class="card-body bg-light">
                <h3 class="card-title">Name: ${this.name}</h3>
                <img class="saved-dog card-img-bottom" src="./images/boston-terrier.png" alt="Boston Terrier">
                </div>
                </div>`
      }
}