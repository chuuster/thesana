class Project < ApplicationRecord
  validates :name, :team_id, presence: true

  belongs_to :team,
    primary_key: :id,
    foreign_key: :team_id,
    class_name: :Team

  has_many :members,
    through: :team,
    source: :members

  has_many :tasks, 
    primary_key: :id,
    foreign_key: :project_id,
    class_name: :Task
end 