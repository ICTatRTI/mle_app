class SessionsController < ApplicationController
  def new
  end
  
  def create
    user = User.authenticate(params[:email], params[:password])
    if user
      session[:user_id] = user.id
      #render js: %(window.location.href='#{root_url}')
      render text: "OK"
    else
      head :unauthorized
    end
  end
  
  def destroy
    session[:user_id] = nil
    redirect_to root_url
  end
end