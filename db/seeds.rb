User.destroy_all
users = User.create([
  { email:"o@o.com",password:"12345678" },
  { email:"p@p.com",password:"12345678" }
])

Bus.destroy_all
bus = Bus.create( name: "test bus", cost: 500.0 )

Reservation.destroy_all
bus.reservations.create([
  { user: users[0] }
])
