class TeamMembership < ApplicationRecord
  validates :team_id, :user_id, presence: true
  validates :team_id, uniqueness: { scope: :user_id }

  belongs_to :team, 
    primary_key: :id,
    foreign_key: :team_id,
    class_name: :Team

  belongs_to :member, 
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end 