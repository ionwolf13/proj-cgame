class DiscardPilesController < ApplicationController


    def show
        @discard_pile = DiscardPile.find(params[:id])
        render json: @discard_pile.to_json({}) 
    end
       
    def create
        @discard_pile = discard_pile.new(discard_pile_params(:game_session_id))
        if @discard_pile.valid?
            @discard_pile.save
            
            render json: {message: 'Application Submitted', discard_pile: @discard_pile}
        else
            render json: {message: @discard_pile.errors}
        end
       
    end

    def update
        @discard_pile = DiscardPile.find(params[:id])
        @discard_pile.update(discard_pile_params())
        render json: @discard_pile.to_json({})
        
    end

    private

    def discard_pile_params(*args)
        params.require(:discard_pile).permit(*args)
    end

end
