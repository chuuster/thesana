class Task < ApplicationRecord
  validates :creator_id, :project_id, presence: true 
  validates :done, inclusion: { in: [ true, false ] }

  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :User

  belongs_to :assignee,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :User

  belongs_to :project,
    primary_key: :id,
    foreign_key: :project_id,
    class_name: :Project
end 