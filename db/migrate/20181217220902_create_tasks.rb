class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.integer :creator_id, null: false 
      t.integer :project_id, null: false 
      t.string :name
      t.integer :assignee_id
      t.date :due_date 
      t.string :description
      t.boolean :done, default: false, null: false 

      t.timestamps 
    end
  end
end
