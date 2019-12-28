class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :amount, :date, :kind, :description
end
