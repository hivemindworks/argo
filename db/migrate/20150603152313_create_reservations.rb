class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.belongs_to :user
      t.belongs_to :bus
    end
  end
end
