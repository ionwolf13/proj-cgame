class AuthController < ApplicationController

    # skip_before_action :authorized, only: [:create, :auto_login]

    def create
        @user = User.find_by(username: login_params[:username])

        if @user && @user.authenticate(login_params[:password])
          # user = @user.to_json({include: [:rooms]})
          render json: {user: @user.to_json,token: JWT.encode({user_id: @user.id}, 'ChildrenOfTheCode')}, status: :accepted   
        else
          render json: { message: 'Invalid username or password', status: :unauthorized }
        end
    end

    def auto_login
      @token = params[:token]
      user = User.find(JWT.decode(@token, "ChildrenOfTheCode", true, algorithm: 'HS256')[0]["user_id"])
      render json: user
    end
  
    private
  
    def login_params
      params.require(:user).permit(:username, :password)
    end

end