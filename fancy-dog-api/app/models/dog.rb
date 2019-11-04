class Dog < ApplicationRecord
    has_many :accessories
    accepts_nested_attributes_for :accessories
end
