# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "jesus", first_name: "jesus", middle_name: "israel", last_name: "garcia", age: 20, image: "image goes here", hobbies: "Playing board games and card Games!", email: jesus@gmail.com, password: "jesus", friends_id: 0)
user1 = User.create(username: "gzuz", first_name: "gzuz", middle_name: "israel", last_name: "garcia", age: 20, image: "image goes here", hobbies: "Playing board games and card Games!", email: gzuz@gmail.com, password: "gzuz", friends_id: 0)
user1 = User.create(username: "ira", first_name: "ira", middle_name: "israel", last_name: "garcia", age: 20, image: "image goes here", hobbies: "Playing board games and card Games!", email: ira@gmail.com, password: "ira", friends_id: User.first.id)
user1 = User.create(username: "jeisga", first_name: "jeisga", middle_name: "israel", last_name: "garcia", age: 20, image: "image goes here", hobbies: "Playing board games and card Games!", email: jeisga@gmail.com, password: "jeisga", friends_id: User.second.id)