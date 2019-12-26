class Api::V1::TransactionsController < ApplicationController

  before_action :set_account

  def index
    render json: @account.transactions
  end

  def create
    @transaction = @account.transaction.new(transaction_params)
    if @account.update_balance(transaction) != "Balance too low."
      @transaction.save
      render json: @transaction
    else
      render json: {error: 'Balance too low.'}
    end

  end

  def show
    # @transacton = @account.transactions.find_by(id: params[:id])
    @transaction = Transaction.find(params[:id])
    render json: @transaction
  end

  # def destroy
  #   @transaction = Transaction.find(params[:id])
  #   @transaction.destroy
  # end


  private

  def set_account
    @account = Account.find(params[:account_id])
  end

  def transaction_params
    params.require(:transation).permit(:account_id, :amount, :kind, :date, :description)
  end



end
