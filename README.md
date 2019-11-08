# README

The Fancy Dog single page application allows users to dress up a dog in different accessories, and save that dog to the Fancy Dog Hall of Fame.

## Installing

1. Clone this repo to your local machine with `https://github.com/radville/fancy-dog` 

2. In the `fancy-dog-app/fancy-dog-api` folder, run `bundle install` to add all gems from the Gemfile

3. Create and initialize the postgres database by running `rails db:create` and `rails db:migrate`. To add sample dogs to the Fancy Dog Hall of Fame, run `rails db:seed`.

4. To run the backend server, open a terminal, nagivate to the folder `fancy-dog-app/fancy-dog-frontend` and run command `npx reload -b`. To run frontend server, open another terminal, navigate to folder `fancy-dog-app/fancy-dog-api` and run `rails s`. Open `http://localhost:8080/` in the browser to view the application.


## Built With

* [Ruby on Rails 2.6.1](https://rubyonrails.org/) - The web framework used


## Contributing

1. Fork this repo

2. Clone the repo to your local machine with `https://github.com/radville/fancy-dog`

3. Make your edits!

4. Create a new pull request


## Authors

* **Laura Radville** - *Initial work* - (https://github.com/radville/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details