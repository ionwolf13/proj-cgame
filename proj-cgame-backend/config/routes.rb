Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get '/path', to: "controller#action"
  resources :games, :users, :game_sessions, :rounds, :decks, :user_hands, :discard_piles, :cards, :card_decks

  post '/signin', to: 'auth#create'
  get   '/shuffle', to: 'deck#shuffle'

end
