class HighsController < ApplicationController

    def create 
        score = High.create(score_params)
        if score.valid?
            render json:score
        else
            render json: {error: "High Score was not submitted"}
        end
    end

    def index
        score = High.all
        render json:score
    end

    private

    def score_params
        params.require(:high).permit(:score)
    end

end
