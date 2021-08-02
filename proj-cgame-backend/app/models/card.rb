class Card < ApplicationRecord

    has_many  :card_decks
    has_many  :decks, through: :card_decks

    has_many  :user_hands, through: :card_decks

    has_many  :discard_piles, through: :card_decks
end
