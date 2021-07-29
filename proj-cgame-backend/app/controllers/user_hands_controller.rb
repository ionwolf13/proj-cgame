class UserHandsController < ApplicationController

    def index
        @user_hands = UserHand.all
        render json: UserHand.all.to_json({})
    end

    def show
        @userhand = UserHand.find(params[:id])
        render json: @userhand.to_json({}) 
    end
       
    def create
        @userhand = User.new(user_hand_params())
        if @userhand.valid?
            @userhand.save
            
            render json: {message: 'Application Submitted', user: @userhand}
        else
            render json: {message: @userhand.errors}
        end
       
    end

    def update
        @userhand = UserHand.find(params[:id])
        @userhand.update(user_hand_params())
        render json: @userhand.to_json({})
        
    end

    def destroy
        @userhand = UserHand.find(params[:id])
        @userhand.destroy
        render json: {message: "Account Removed"}
    end


    private

    def user_hand_params(*args)
        params.require(:user_hand).permit(*args)
    end

end
