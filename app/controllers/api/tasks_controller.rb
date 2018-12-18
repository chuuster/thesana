class Api::TasksController < ApplicationController
  def index 
    @tasks = current_user.team_tasks
  end 

  def create 
    @task = Task.new(task_params)
    @task.creator_id = current_user.id
    @task.project_id = params[:project_id]
    
    if @task.save 
      render :show
    else 
      render json: @task.errors.full_messages, status: 422
    end 
  end 

  def update
    @task = Task.find(params[:id])
    if @task.update(task_params)
      render :show
    else 
      render json: @task.errors.full_messages, status: 422
    end 
  end 

  def show 
    @task = Task.find(params[:id])
  end 

  def destroy
    @task = Task.find(params[:id])
    task_id = @task.id

    if @task.destroy
      render json: task_id
    else
      render json: @task.errors.full_messages, status: 422
    end
  end 

  private 
  def task_params 
    params.require(:task).permit(:name, :description, :assignee_id, :due_date, :done)
  end
end 