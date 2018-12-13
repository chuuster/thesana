class Api::ProjectsController < ApplicationController
  def index 
    @projects = current_user.projects 
    render json: "projectss"
  end 

  def create 
    @project = Project.new(project_params)
    if @project.save 
      render json: "project saved"
    else 
      render json: "project not created"
    end 
  end 

  def show 
    @project = Project.find(params[project][id])
  end 

  private 
  def project_params 
    params.require(:project).permit(:name, :description, :team_id)
  end
end 