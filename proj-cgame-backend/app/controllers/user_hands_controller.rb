class UserHandsController < ApplicationController

    def show
        @user_hand = UserHand.find(params[:id])
        render json: @user_hand.to_json({}) 
    end
       
    def create
        @user_hand = User.new(user_hand_params(:user_id))
        if @user_hand.valid?
            @user_hand.save
            
            render json: {message: 'Application Submitted', user_hand: @user_hand}
        else
            render json: {message: @user_hand.errors}
        end
       
    end

    def update
        @user_hand = UserHand.find(params[:id])
        @user_hand.update(user_hand_params())
        render json: @user_hand.to_json({})
        
    end

    private

    def user_hand_params(*args)
        params.require(:user_hand).permit(*args)
    end

end
