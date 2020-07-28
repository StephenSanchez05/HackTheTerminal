class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :highs
  # has_many :highs
end
