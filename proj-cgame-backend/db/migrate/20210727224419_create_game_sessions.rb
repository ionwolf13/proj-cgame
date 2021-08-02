class CreateGameSessions < ActiveRecord::Migration[6.1]
  def change
    create_table :game_sessions do |t|
      t.integer :date
      t.integer  :first_place, default: 0
      t.integer :second_place, ,default: 0
      t.integer :third_place, default: 0
      t.integer :user_id
      t.integer :game_id
      
      t.timestamps
    end
  end
end
