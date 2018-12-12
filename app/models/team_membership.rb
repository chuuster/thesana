class TeamMembership < ApplicationRecord
  validates :team_id, :user_id
end 