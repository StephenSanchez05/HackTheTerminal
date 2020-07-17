class UsersController < ApplicationController

    def create 
        user = User.create(user_params)
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
        render json:user
    end

    private

    def user_params
        params.require(:user).permit(:name)
    end

end
