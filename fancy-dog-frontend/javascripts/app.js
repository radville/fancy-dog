class App {
    constructor(dog_objects) {
      this.dogs = dog_objects.map(dog => new Dog(dog))
    }
  
    render() {
      return `<div class="grid-container">
        <h2>Fancy Dog Hall of Fame</h2>
        ${this.dogs.map(dog => dog.render()).join('')}
      </div>`
    }
  }