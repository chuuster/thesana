class Api::TeamsController < ApplicationController
  def create 
    @team = Team.new(team_params)
    if @team.save 
      render json: "team saved"
    else 
      render json: "no team created"
    end 
  end 

  private 
  def team_params 
    params.require(:team).permit(:name, :description)
  end
end 