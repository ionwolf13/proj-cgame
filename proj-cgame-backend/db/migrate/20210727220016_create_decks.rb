class CreateDecks < ActiveRecord::Migration[6.1]
  def change
    create_table :decks do |t|
      t.boolean :shuffled, default: false
      t.boolean :success, default: false
      t.integer :total_cards
      t.integer :game_session_id
      t.timestamps
    end
  end
end
