# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Package.create([
  {
    title: "Machine Learning",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7mbK6Gb_6FGbSnAUWKfdGGQRLUzCO8Q4TkgeErMjxoqcPNgTwKpJyhdBe6k2HdRIjrc&usqp=CAU",
    description: "Whoopi Goldberg brings Alice Walker's Pulitzer Prize-winning feminist novel to life as Celie, a Southern woman who suffered abuse over decades. A project brought to a hesitant Steven Spielberg by producer Quincy Jones, the film marks Spielberg's first female lead.",
    duration: 5,
    price: 10
  },
  {
    title: "Backend",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS2wZxY5RBHO6KoahllHb5ANx22UeQDI7m48VN1rYGeRUpmDKvGZgsoak0mprsyuXOBhc&usqp=CAU",
    description: "Whoopi Goldberg brings Alice Walker's Pulitzer Prize-winning feminist novel to life as Celie, a Southern woman who suffered abuse over decades. A project brought to a hesitant Steven Spielberg by producer Quincy Jones, the film marks Spielberg's first female lead.",
    duration: 5,
    price: 10 
  },
  {
    title: "Frontend",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7mbK6Gb_6FGbSnAUWKfdGGQRLUzCO8Q4TkgeErMjxoqcPNgTwKpJyhdBe6k2HdRIjrc&usqp=CAU",
    description: "Whoopi Goldberg brings Alice Walker's Pulitzer Prize-winning feminist novel to life as Celie, a Southern woman who suffered abuse over decades. A project brought to a hesitant Steven Spielberg by producer Quincy Jones, the film marks Spielberg's first female lead.",
    duration: 5,
    price: 10 
  }
])
Lesson.create([
  {
    title: "Machine Learning",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7mbK6Gb_6FGbSnAUWKfdGGQRLUzCO8Q4TkgeErMjxoqcPNgTwKpJyhdBe6k2HdRIjrc&usqp=CAU",
    description: "Whoopi Goldberg brings Alice Walker's Pulitzer Prize-winning feminist novel to life as Celie, a Southern woman who suffered abuse over decades. A project brought to a hesitant Steven Spielberg by producer Quincy Jones, the film marks Spielberg's first female lead.",
    price: 10
  },
  {
    title: "Frontend",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7mbK6Gb_6FGbSnAUWKfdGGQRLUzCO8Q4TkgeErMjxoqcPNgTwKpJyhdBe6k2HdRIjrc&usqp=CAU",
    description: "Whoopi Goldberg brings Alice Walker's Pulitzer Prize-winning feminist novel to life as Celie, a Southern woman who suffered abuse over decades. A project brought to a hesitant Steven Spielberg by producer Quincy Jones, the film marks Spielberg's first female lead.",
    price: 10 
  },
  {
    title: "Backend",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS2wZxY5RBHO6KoahllHb5ANx22UeQDI7m48VN1rYGeRUpmDKvGZgsoak0mprsyuXOBhc&usqp=CAU",
    description: "Whoopi Goldberg brings Alice Walker's Pulitzer Prize-winning feminist novel to life as Celie, a Southern woman who suffered abuse over decades. A project brought to a hesitant Steven Spielberg by producer Quincy Jones, the film marks Spielberg's first female lead.",
    price: 10 
  }
])
Tutor.create([
  {
    name: "John John",
    image: "https://img.freepik.com/premium-photo/excited-african-american-guy-is-using-smartphone-credit-card-shopping-online-happy-black-man-is-ordering-food-online-male-paying-long-awaited-purchase-mobile-phone-e-banking_216356-301.jpg?w=2000",
    description: "Whoopi Goldberg brings Alice Walker's Pulitzer Prize-winning feminist novel to life as Celie, a Southern woman who suffered abuse over decades. A project brought to a hesitant Steven Spielberg by producer Quincy Jones, the film marks Spielberg's first female lead.",
    rating: 10,
    review: 10,
    no_of_student: 200
  },
  {
    name: "Teacher Tot",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRepi3vejByRfeD3Y-dhIEyUqSBgzdUKb1QLSS1_0p0JepN7-EzFz2hknEvtO7luv7OQBA&usqp=CAU",
    description: "Whoopi Goldberg brings Alice Walker's Pulitzer Prize-winning feminist novel to life as Celie, a Southern woman who suffered abuse over decades. A project brought to a hesitant Steven Spielberg by producer Quincy Jones, the film marks Spielberg's first female lead.",
    rating: 10,
    review: 10,
    no_of_student: 200 
  },
  {
    name: "Master Eas",
    image: "https://media.thetab.com/blogs.dir/7/files/2014/03/new-wolf-of-wall-street-trailer-leonardo-dicaprio-is-the-wealthiest-stockbroker-in-the-world.jpg",
    description: "Whoopi Goldberg brings Alice Walker's Pulitzer Prize-winning feminist novel to life as Celie, a Southern woman who suffered abuse over decades. A project brought to a hesitant Steven Spielberg by producer Quincy Jones, the film marks Spielberg's first female lead.",
    rating: 10,
    review: 10,
    no_of_student: 200 
  }
])