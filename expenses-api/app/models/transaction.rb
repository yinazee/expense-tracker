class Transaction < ApplicationRecord
  belongs_to :account
  validates :amount, prescence: true
  validates_inclusion_of :kind, :in => ['deposit', 'withdraw']
end
