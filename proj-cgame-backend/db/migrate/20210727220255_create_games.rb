class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string  :name
      t.integer :max_players
      t.integer :min_players, default: 2
      t.string  :description
      t.string  :rules, default: ""
      t.boolean :success, default: false
      t.integer :total_cards, default: 52
      t.timestamps
    end
  end
end
