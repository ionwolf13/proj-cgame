class CardDecksController < ApplicationController

    def index
       @card_decks = CardDeck.all
       render json: @card_decks
    end

    def show
        @card_deck = CardDeck.find(params[:id])
        render json: @card_deck
    end

    def create
        @card_deck = CardDeck.new(card_deck_params(:card_id, :deck_id, :game_session_id))
        if @card_deck.valid?
            @card_deck.save
            render json: {message: 'Accepted', card_deck: @card_deck}
        else
            render json: {message: "Error"}
        end
    end

    def update
      
    end

    private

    def card_deck_params(*args)
        params.require(:card_deck).permit(*args)
    end

end
