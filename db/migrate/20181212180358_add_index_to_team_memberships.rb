class AddIndexToTeamMemberships < ActiveRecord::Migration[5.2]
  def change
      add_index :team_memberships, [:team_id, :user_id], unique: true
  end
end
