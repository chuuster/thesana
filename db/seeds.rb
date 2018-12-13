# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.create!(email: "mscott@example.com", fname: "Michael", lname: "Scott", password: "password")
User.create!(email: "phalpert@example.com", fname: "Pam", lname: "Halpert", password: "password")
User.create!(email: "jvaljean@example.com", fname: "Jean", lname: "Valjean", password: "password")
User.create!(email: "icmorimoto@example.com", fname: "Iron Chef", lname: "Morimoto", password: "password")
User.create!(email: "dprince@example.com", fname: "Diana", lname: "Prince", password: "password")
User.create!(email: "suniverse@example.com", fname: "Steven", lname: "Universe", password: "password")
User.create!(email: "pgem@example.com", fname: "Pearl", lname: "Gem", password: "password")

Team.create!(name: "Team Awesome", description: "An awesome team")
TeamMembership.create!(team_id: Team.find_by(name: "Team Awesome").id, user_id: User.find_by(email: "mscott@example.com").id)
TeamMembership.create!(team_id: Team.find_by(name: "Team Awesome").id, user_id: User.find_by(email: "icmorimoto@example.com").id)
TeamMembership.create!(team_id: Team.find_by(name: "Team Awesome").id, user_id: User.find_by(email: "dprince@example.com").id)
TeamMembership.create!(team_id: Team.find_by(name: "Team Awesome").id, user_id: User.find_by(email: "suniverse@example.com").id)

Project.create!(name: "Potluck time!", description: "A nice dinner party with friends", team_id: Team.find_by(name: "Team Awesome").id)
Project.create!(name: "Prep kit for emergencies", team_id: Team.find_by(name: "Team Awesome").id)
Project.create!(name: "Mom's bday", team_id: Team.find_by(name: "Team Awesome").id)