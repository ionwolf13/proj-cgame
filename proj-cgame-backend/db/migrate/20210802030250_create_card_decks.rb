class CreateCardDecks < ActiveRecord::Migration[6.1]
  def change
    create_table :card_decks do |t|
      t.integer :card_id
      t.integer :deck_id
      t.integer :game_session_id
      t.timestamps
    end
  end
end
