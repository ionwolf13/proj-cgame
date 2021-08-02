class GameSession < ApplicationRecord

    belongs_to  :user
    belongs_to  :game

    has_many    :rounds
    
    has_one     :discard_pile
    has_one     :card_deck
    
end
 