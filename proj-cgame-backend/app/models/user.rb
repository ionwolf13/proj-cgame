class User < ApplicationRecord

    has_many    :game_sessions
    has_many    :games, through: :game_sessions
    has_one     :user_hand

    has_secure_password

    def full_name
        return self.first_name + " " + self.middle_name + ' ' + self.last_name
    end
end
