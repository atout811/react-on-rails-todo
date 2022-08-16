Rails.application.routes.draw do
  get '/', to: 'todos#index'
  post 'todo' , to: 'todos#create'
  post 'delete-todo' , to: 'todos#delete'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
