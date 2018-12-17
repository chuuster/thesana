class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      TeamMembership.create!(team_id: Team.find_by(name: "Team Awesome").id, user_id: @user.id)
      sign_in(@user)
      render "api/users/show"
    else 
      render json: @user.errors.full_messages, status: 422
    end 
    
  end
  

  private
  def user_params
    params.require(:user).permit(:email, :fname, :lname, :password)
  end 
  
  
end
