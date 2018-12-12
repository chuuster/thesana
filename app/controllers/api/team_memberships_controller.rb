class Api::TeamMembershipsController < ApplicationController
  def create 
    @team_membership = TeamMembership.new(team_membership_params)
    if @team_membership.save 
      render json: "team membership saved"
    else 
      render json: "no team membership created"
    end 
  end 

  private 
  def team_membership_params 
    params.require(:team_membership).permit(:team_id, :user_id)
  end
end 