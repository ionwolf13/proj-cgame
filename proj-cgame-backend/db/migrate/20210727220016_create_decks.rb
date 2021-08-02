class CreateDecks < ActiveRecord::Migration[6.1]
  def change
    create_table :decks do |t|
      t.boolean :shuffled, default: false
      t.integer :total_cards, default: 0
      t.timestamps
    end
  end
end
