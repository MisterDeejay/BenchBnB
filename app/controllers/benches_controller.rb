class BenchesController < ApplicationController

  def index
    @benches = Bench.in_bounds(params[:bounds])
    render json: @benches
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save!
      render json: @bench
    else
      flash.now[:errors] = @bench.errors.full_messages
      render json: @bench
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end


end
