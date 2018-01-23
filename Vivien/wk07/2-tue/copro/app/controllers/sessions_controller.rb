class SessionsController < ApplicationController
  def new
     user=User.find_by(email:params[:email])

     if user && user.authenticate(params[:password])
       session[:user_email]=user.email
       redirect_to '/'
     else
       render '/users/login'
     end
  end

def create
  user=User.new
  user.email=params[:email]
  user.password=params[:password]
  if user.save
    redirect_to '/'

  else
    render 'users/signup'
  end
end

  def logout

    session[:user_email]=nil
    # reset_session
    redirect_to '/login'
  end
end
