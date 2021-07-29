class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string  :image
      t.integer :suite
      t.string  :value
      t.string  :code
      t.integer :deck_id
      t.integer :user_hand_id
      t.integer :discard_pile
      t.timestamps
    end
  end
end
