class DifficultySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :words
end
