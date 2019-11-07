class App {
    constructor(dog_objects) {
      this.dogs = dog_objects.map(dog => new Dog(dog))
    }
  
    render() {
      return `<div class="grid-container">
        ${this.dogs.map(dog => dog.render()).join('')}
      </div>`
    }
}