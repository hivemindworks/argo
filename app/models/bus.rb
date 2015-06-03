class Bus < ActiveRecord::Base
  has_many :reservations
end
