class CreateBuses < ActiveRecord::Migration
  def change
    create_table :buses do |t|
      t.string :name
      t.string :pick_up
      t.string :distance
      t.date :date
      t.string :drive_time
      t.string :total_time
    end
  end
end
