class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string  :image
      t.integer :suite
      t.string  :value
      t.string  :code
      t.integer :deck_id, default: nil
      t.integer :user_hand_id, default: nil
      t.integer :discard_pile, default: nil
      t.timestamps
    end
  end
end
