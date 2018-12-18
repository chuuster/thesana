class Team < ApplicationRecord
  validates :name, null: false

  has_many :team_memberships,
    primary_key: :id,
    foreign_key: :team_id,
    class_name: :TeamMembership

  has_many :projects,
    primary_key: :id,
    foreign_key: :team_id,
    class_name: :Project

  has_many :members,
    through: :team_memberships,
    source: :member

  has_many :tasks,
    through: :projects,
    source: :tasks
end 