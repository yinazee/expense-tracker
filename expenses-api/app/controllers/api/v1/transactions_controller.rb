class Api::V1::TransactionsController < ApplicationController

  def index
    @transactions = Transaction.all
    render json: @transactions
  end

  def create
    @transaction = Transaction.new(transaction_params)
    if @transaction.save
      render json: @transaction
    else
      render json: (error: "Error creating transaction")
    end
  end

  def show
    @transacton = Transaction.find(params[:id])
    render json: @transaction
  end

  def destroy
    @transaction = Transaction.find(params[:id])
    @transaction.destroy
  end


  private

  def transaction_params
    params.require(:transation).permit(:account_id, :amount, :kind, :date, :description)
  end



end
