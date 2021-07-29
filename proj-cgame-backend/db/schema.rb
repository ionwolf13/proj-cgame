# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_28_000824) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.string "image"
    t.integer "suite"
    t.string "value"
    t.string "code"
    t.integer "deck_id"
    t.integer "user_hand_id"
    t.integer "discard_pile"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "decks", force: :cascade do |t|
    t.boolean "shuffled", default: false
    t.boolean "success", default: false
    t.integer "total_cards"
    t.integer "game_session_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "discard_piles", force: :cascade do |t|
    t.integer "game_session_id"
    t.integer "total_cards"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "game_sessions", force: :cascade do |t|
    t.integer "date"
    t.string "first_place"
    t.string "second_place"
    t.string "third_place"
    t.integer "user_id"
    t.integer "game_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "games", force: :cascade do |t|
    t.string "name"
    t.integer "max_players"
    t.integer "min_players", default: 2
    t.string "description"
    t.string "rules", default: ""
    t.boolean "success", default: false
    t.integer "total_cards", default: 52
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "rounds", force: :cascade do |t|
    t.integer "round_time", default: 30
    t.integer "game_session_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_hands", force: :cascade do |t|
    t.integer "user_id"
    t.integer "max_cards", default: 5
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.integer "age"
    t.string "image"
    t.string "hobbies"
    t.string "experience", default: "0"
    t.integer "rank", default: 0
    t.string "email"
    t.string "email_confirmation"
    t.string "password_digest"
    t.integer "friends_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
