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

Task.create!(creator_id: User.find_by(email: "dprince@example.com").id, project_id: Project.find_by(name: "Potluck time!").id, name: "Get decorations", done: false)
Task.create!(creator_id: User.find_by(email: "icmorimoto@example.com").id, project_id: Project.find_by(name: "Potluck time!").id, name: "Call Joe for custom order", done: false)
Task.create!(creator_id: User.find_by(email: "icmorimoto@example.com").id, project_id: Project.find_by(name: "Potluck time!").id, name: "Get headcount", done: false)
Task.create!(creator_id: User.find_by(email: "suniverse@example.com").id, project_id: Project.find_by(name: "Potluck time!").id, name: "Plan for party games", done: false)
Task.create!(creator_id: User.find_by(email: "suniverse@example.com").id, project_id: Project.find_by(name: "Potluck time!").id, name: "Invite Connie", done: false)
Task.create!(creator_id: User.find_by(email: "suniverse@example.com").id, project_id: Project.find_by(name: "Mom's bday").id, name: "Invite Connie and Dad", done: false)
Task.create!(creator_id: User.find_by(email: "mscott@example.com").id, project_id: Project.find_by(name: "Mom's bday").id, name: "Get extra fries", done: false)
Task.create!(creator_id: User.find_by(email: "mscott@example.com").id, project_id: Project.find_by(name: "Prep kit for emergencies").id, name: "Learn parkour", done: false)
Task.create!(creator_id: User.find_by(email: "mscott@example.com").id, project_id: Project.find_by(name: "Prep kit for emergencies").id, name: "Ask Dwight?", done: false)
Task.create!(creator_id: User.find_by(email: "jvaljean@example.com").id, project_id: Project.find_by(name: "Prep kit for emergencies").id, name: "bread", done: false)
Task.create!(creator_id: User.find_by(email: "dprince@example.com").id, project_id: Project.find_by(name: "Prep kit for emergencies").id, name: "justice", done: false)