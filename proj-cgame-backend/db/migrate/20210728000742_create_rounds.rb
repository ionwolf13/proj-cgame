class CreateRounds < ActiveRecord::Migration[6.1]
  def change
    create_table :rounds do |t|
      t.integer :round_time, default: 30
      t.integer :game_session_id

      t.timestamps
    end
  end
end
