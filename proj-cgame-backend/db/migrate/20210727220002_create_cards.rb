class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string  :image
      t.integer :suite
      t.string  :value
      t.string  :code
      t.integer :discard_pile, default: nil
      t.timestamps
    end
  end
end
