class CardsController < ApplicationController

    def index
        @cards = Card.all
        render json: @cards.to_json({})
    end

    def show
        @card = Card.find(params[:id])
        render json: @card.to_json({}) 
    end

    def create
        @card = Card.new(card_params())
        if @card.valid?
            @card.save
            
            render json: {message: 'Application Submitted', card: @card}
        else
            render json: {message: @card.errors}
        end
       
    end

    def update
        @card = Card.find(params[:id])
        @card.update(user_params(:image))
        render json: @user.to_json({})
    end

    private

    def card_params(*args)
        params.require(:card).permit(*args)
    end

end
