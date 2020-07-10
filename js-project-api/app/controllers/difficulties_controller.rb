class DifficultiesController < ApplicationController

    def index
        difficulty = Difficulty.All
        options = {}
        options[:include] = [:name, :words]
        render json: DifficultySerializer.new(difficulty, options).serializable_hash
    end

    def show
        difficulties = Difficulty.find(params[:id])
        options = {}
        options[:include] = [:name, :words]
        render json: DifficultySerializer.new(difficulty, options).serializable_hash
    end
        
end
