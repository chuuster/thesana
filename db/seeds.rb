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

Team.create!(name: "Team Awesome", description: "An awesome team")
TeamMembership.create!(team_id: Team.find_by(name: "Team Awesome").id, user_id: User.find_by(email: "mscott@example.com").id)
TeamMembership.create!(team_id: Team.find_by(name: "Team Awesome").id, user_id: User.find_by(email: "icmorimoto@example.com").id)
TeamMembership.create!(team_id: Team.find_by(name: "Team Awesome").id, user_id: User.find_by(email: "dprince@example.com").id)
TeamMembership.create!(team_id: Team.find_by(name: "Team Awesome").id, user_id: User.find_by(email: "suniverse@example.com").id)
TeamMembership.create!(team_id: Team.find_by(name: "Team Awesome").id, user_id: User.find_by(email: "jvaljean@example.com").id)

Project.create!(name: "Potluck time!", description: "A nice dinner party with friends", team_id: Team.find_by(name: "Team Awesome").id)
Project.create!(name: "Prep kit for emergencies", team_id: Team.find_by(name: "Team Awesome").id)
Project.create!(name: "Mom's bday", team_id: Team.find_by(name: "Team Awesome").id)

michael_id = User.find_by(email: "mscott@example.com").id
pam_id = User.find_by(email: "phalpert@example.com").id
jean_id = User.find_by(email: "jvaljean@example.com").id
morimoto_id = User.find_by(email: "icmorimoto@example.com").id
diana_id = User.find_by(email: "dprince@example.com").id
steven_id = User.find_by(email: "suniverse@example.com").id

potluck_id = Project.find_by(name: "Potluck time!").id
bday_id = Project.find_by(name: "Mom's bday").id
prep_id = Project.find_by(name: "Prep kit for emergencies").id

Task.create!(creator_id: steven_id, project_id: potluck_id, name: "Get decorations", done: false, assignee_id: steven_id, due_date: Time.new(2019, 12, 25))
Task.create!(creator_id: steven_id, project_id: potluck_id, name: "Call Joe for custom order", assignee_id: michael_id, done: false, due_date: Time.new(2019, 12, 18))
Task.create!(creator_id: diana_id, project_id: potluck_id, name: "Get headcount", done: false, assignee_id: michael_id)
Task.create!(creator_id: steven_id, project_id: potluck_id, name: "Plan for party games", done: false)
Task.create!(creator_id: steven_id, project_id: potluck_id, name: "Invite Connie", done: false, due_date: Time.new(2019, 12, 21))
Task.create!(creator_id: steven_id, project_id: bday_id, assignee_id: steven_id, name: "Invite Connie and Dad", done: false)
Task.create!(creator_id: diana_id, project_id: bday_id, name: "Get extra fries", done: false)
Task.create!(creator_id: michael_id, project_id: prep_id, name: "Learn parkour", assignee_id: michael_id, done: false)
Task.create!(creator_id: michael_id, project_id: prep_id, name: "Ask Dwight?", done: false)
Task.create!(creator_id: michael_id, project_id: prep_id, name: "bread", assignee_id: jean_id, done: false)
Task.create!(creator_id: steven_id, project_id: prep_id, name: "justice", assignee_id: diana_id, done: false)