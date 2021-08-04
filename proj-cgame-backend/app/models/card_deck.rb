class CardDeck < ApplicationRecord

    belongs_to  :card
    belongs_to  :deck
    belongs_to  :game_session
end
