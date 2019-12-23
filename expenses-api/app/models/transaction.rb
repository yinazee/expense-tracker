class Transaction < ApplicationRecord
  belongs_to :account
  validates :amount, prescence: true
end
