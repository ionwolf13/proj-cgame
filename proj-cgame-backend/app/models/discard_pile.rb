class DiscardPile < ApplicationRecord

    belongs_to  :game_session

    has_many    :card_decks
    has_many    :cards, through: :card_decks
    
end
