class DifficultySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :words, :highs
end
