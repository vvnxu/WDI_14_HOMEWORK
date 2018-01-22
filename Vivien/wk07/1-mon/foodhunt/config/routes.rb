Rails.application.routes.draw do
  get '/', to: 'pages#home'

  get '/about',  to:'pages#about'

  get '/dishes/new', to: 'dishes#new'

  get '/dishes/:id' , to: 'dishes#show'

  get '/dishes', to:'dishes#index'

  post '/dishes/:id', to: 'dishes#create'

  get 'dishes/:id/edit', to:'dishes#edit'

  put '/dishes' ,  to:'dishes#update'
  end
