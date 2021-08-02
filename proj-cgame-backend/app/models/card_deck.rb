class CardDeck < ApplicationRecord

    belongs_to  :card
    belongs_to  :deck
    belongs_to  :game_session
    belongs_to  :discard_pile
    belongs_to  :user_hand
end
