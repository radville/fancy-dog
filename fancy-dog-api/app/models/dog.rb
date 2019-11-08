class Dog < ApplicationRecord
    has_many :accessories, dependent: :destroy
    accepts_nested_attributes_for :accessories
    validates :name, presence: true
end
