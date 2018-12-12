class TeamMembership < ApplicationRecord
  validates :team_id, :user_id, presence: true
  validates :team_id, uniqueness: { scope: :user_id }
end 