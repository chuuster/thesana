class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :name, null: false 
      t.string :description 
      t.timestamps 
    end

    create_table :team_memberships do |t| 
      t.integer :user_id, null: false 
      t.integer :team_id, null: false 
    end 

    add_index :teams, :name
    add_index :team_memberships, :user_id
    add_index :team_memberships, :team_id
  end
end
