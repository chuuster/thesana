class AddProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.integer :team_id, null: false 
      t.string :name, null: false  
      t.string :description 
      t.timestamps 
    end

    add_index :projects, :team_id
  end
end

