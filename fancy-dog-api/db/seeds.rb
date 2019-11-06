# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

dog1 = Dog.create(name: "Bow Wow")
dog2 = Dog.create(name: "Doggy")
dog3 = Dog.create(name: "Buddy")

dog1.accessories.create(src: "./images/monacle.png")
dog2.accessories.create(src: "./images/glasses.png")
dog2.accessories.create(src: "./images/cowboy-hat.png")
dog3.accessories.create(src: "./images/santa-hat.png")
dog1.accessories.create(src: "./images/straw-hat.png")