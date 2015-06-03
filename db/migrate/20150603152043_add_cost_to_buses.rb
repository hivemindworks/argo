class AddCostToBuses < ActiveRecord::Migration
  def change
    add_column :buses, :cost, :float
  end
end
