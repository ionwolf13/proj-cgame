class Deck < ApplicationRecord
    
    belongs_to  :game_session

    has_many    :cards
    
end
