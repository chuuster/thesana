class Project < ApplicationRecord
  validates :name, :team_id, null: false

  belongs_to :team,
    primary_key: :id,
    foreign_key: :team_id,
    class_name: :Team

  has_many :members,
    through: :team,
    source: :members
end 