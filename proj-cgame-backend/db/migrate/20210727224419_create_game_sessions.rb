class CreateGameSessions < ActiveRecord::Migration[6.1]
  def change
    create_table :game_sessions do |t|
      t.integer :date
      t.string  :first_place
      t.string  :second_place
      t.string  :third_place
      t.integer :user_id
      t.integer :game_id
      

      t.timestamps
    end
  end
end
