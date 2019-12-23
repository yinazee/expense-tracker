class Account < ApplicationRecord
  has_may :transations
  validates :name, :balance, presence: true
  
end
