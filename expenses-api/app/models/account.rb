class Account < ApplicationRecord
  has_many :transations
  validates :name, :balance, presence: true

end
