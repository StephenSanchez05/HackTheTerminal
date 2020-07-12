class DifficultiesController < ApplicationController

    def index
        difficulty = Difficulty.all
        options = {}
        options[:include] = [:name, :words]
        render json: difficulty
    end
    
    def create

    end

    def show
        difficulties = Difficulty.find(params[:id])
        options = {}
        options[:include] = [:name, :words]
        render json: DifficultySerializer.new(difficulty, options).serializable_hash
    end
end
