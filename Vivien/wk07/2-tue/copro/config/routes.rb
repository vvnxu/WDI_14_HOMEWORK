Rails.application.routes.draw do
  resources :projects
  resources :users
  root to:'pages#home'

get '/login', to:'users#login'

post '/session', to:'sessions#new'

get '/signup', to:'users#signup'

post '/session', to:'sessions#create'

delete "/session", to:'sessions#logout'

end
