json.extract! project, :id, :name, :description, :team_id
json.taskIds project.tasks.pluck(:id)
