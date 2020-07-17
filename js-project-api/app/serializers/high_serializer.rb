class HighSerializer
  include FastJsonapi::ObjectSerializer
  attributes :score
  belongs_to :user
end
