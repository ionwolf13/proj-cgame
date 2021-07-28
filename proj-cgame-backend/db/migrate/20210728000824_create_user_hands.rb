class CreateUserHands < ActiveRecord::Migration[6.1]
  def change
    create_table :user_hands do |t|

      t.timestamps
    end
  end
end
