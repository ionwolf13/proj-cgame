class DecksController < ApplicationController

    def index
        @decks = Deck.all
        render json: @decks.to_json({})
    end

    def show
        @deck = Deck.find(params[:id])
        render json: @deck.to_json({}) 
    end

    def create
        @deck = Deck.new(deck_params())
        if @deck.valid?
            @deck.save
            
            render json: {message: 'Application Submitted', deck: @deck}
        else
            render json: {message: @deck.errors}
        end
       
    end

    def update
        @deck = Deck.find(params[:id])
        @deck.update(deck_params())
        render json: @deck.to_json({})
    end

    def delete
        @deck = Deck.find(params[:id])
        @user
        @deck.delete
        render json: @user.to_json({})
    end

    private

    def deck_params(*args)
        params.require(:deck).permit(*args)
    end

end
