class UsersController < ApplicationController
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(app_params)
    if @user.save
      redirect_to root_url, :notice => "Signed up!"
    else
      render "new"
    end
  end
end

private
  def app_params
    params.require(:user).permit(:password, :email, :password_confirmation)
  end