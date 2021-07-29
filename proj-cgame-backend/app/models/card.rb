class Card < ApplicationRecord

    belongs_to  :deck
    belongs_to  :discard_pile
    belongs_to  :user_hand
end
