class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :fname, :string, :null => true
    change_column :users, :lname, :string, :null => true
  end
end
