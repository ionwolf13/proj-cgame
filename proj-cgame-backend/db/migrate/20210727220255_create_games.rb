class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string  :name
      t.string  :description
      t.string  :instructions
      t.string  :rules
      t.boolean :success
      t.integer :total_cards
      t.timestamps
    end
  end
end
