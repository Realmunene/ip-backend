Rails.application.routes.draw do
  resources :tutors, only: [:index]
  resources :lessons, only: [:index]
  resources :packages, only: [:index]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
