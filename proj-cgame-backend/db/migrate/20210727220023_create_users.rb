class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string  :username
      t.string  :first_name
      t.string  :middle_name, defaul: ""
      t.string  :last_name
      t.integer :age
      t.string  :image
      t.string  :hobbies
      t.string  :experience, default: 0
      t.integer :rank, default: 0 
      t.string  :email, 
      t.string  :email_confirmation
      t.string  :password_digest:
      t.integer :friends_id
      t.timestamps
    end
  end
end
