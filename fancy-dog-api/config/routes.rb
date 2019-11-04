Rails.application.routes.draw do
  resources :accessories, only: [:index]
  resources :dogs
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
