class CreateUserHands < ActiveRecord::Migration[6.1]
  def change
    create_table :user_hands do |t|
      t.integer :user_id
      t.integer :max_cards, default: 5

      t.timestamps
    end
  end
end
