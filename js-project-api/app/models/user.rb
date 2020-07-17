class User < ApplicationRecord
    has_many :highs
    validates :name, presence: true
end
