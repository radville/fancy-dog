class Dog {
    constructor(dogObj) {
        this.name = dogObj.name
        // how to add more accessories? interate over dogObj.accessories?
        this.accessory = new Accessory(dogObj.accessory)
    }

    render() {
        return `<div class="card">
              <div class="card-content">
                <h3>Name: ${this.name}</h3>
                <p>
                    <img class="saved-dog" src="./images/boston-terrier.png" alt="Boston Terrier">
                    <img class="saved-accessory" src=${this.accessory.render()} alt="accessory">
                </p>
              </div>
            </div>`
      }
}