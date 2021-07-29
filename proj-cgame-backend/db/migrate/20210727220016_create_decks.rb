class CreateDecks < ActiveRecord::Migration[6.1]
  def change
    create_table :decks do |t|
      t.boolean :shuffled, default: false
      t.boolean :success
      t.integer :total_cards
      t.integer :cards_id
      t.timestamps
    end
  end
end
