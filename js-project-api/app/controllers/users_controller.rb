class UsersController < ApplicationController

    def create 
        user = User.find_or_create_by(user_params)
        if user.valid?
            render json:user
        else
            render json: {error: "User was not submitted"}
        end
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def index
        user = User.all
        render json: UserSerializer.new(user)
    end

    private

    def user_params
        params.require(:user).permit(:name)
    end

end
