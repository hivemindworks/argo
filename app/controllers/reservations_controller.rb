class ReservationsController < ApplicationController
  def create
    @bus = Bus.find(params[:bus_id])
    @reservation = Reservation.new bus: @bus, user: current_user
    if @reservation.save
      redirect_to bus_path @bus
    end
  end
end