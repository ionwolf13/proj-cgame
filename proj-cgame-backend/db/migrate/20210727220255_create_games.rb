class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string  :name
      t.integer :max_players
      t.integer :min_players
      t.string  :description
      t.string  :rules, default: ""
      t.boolean :success
      t.integer :total_cards
      t.timestamps
    end
  end
end
