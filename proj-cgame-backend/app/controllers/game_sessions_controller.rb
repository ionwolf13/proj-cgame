class GameSessionsController < ApplicationController

    def index
        @gameSessions = GameSession.all
        render json: @gameSessions
    end

    def show
        @gameSession = GameSession.find(params[:id])
        render json: @gameSession 
    end
       
    def create
        debugger
        @gameSession = GameSession.new(game_session_params(:user_id, :game_id))
        if @gameSession.valid?
            @gameSession.save
            render json: {message: 'Submitted', gameSession: @gameSession}
        else
            render json: {message: @gameSession.errors}
        end
    end

    def update
        @gameSession = GameSession.find(params[:id])
        @gameSession.update(game_session_params())
        render json: @gameSession.to_json({})
        
    end

    def destroy
        @gameSession = GameSession.find(params[:id])
        @gameSession.destroy
        render json: {message: "Account Removed"}
    end


    private

    def game_session_params(*args)
        params.require(:game_session).permit(*args)
    end

end    