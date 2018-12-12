class RemoveTeamNameUniqueIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :teams, :name
    add_index :teams, :name
  end
end
