class GamesController < ApplicationController

    def index
        @games = Game.all
        render json: Game.all.to_json({})
    end

    def show
        @game = Game.find(params[:id])
        render json: @user.to_json({}) 
    end

end
