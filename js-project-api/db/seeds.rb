# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Difficulty.delete_all
hard = Difficulty.create({:name => 'HARD', :words => ["BASIS", "TRUTH", "NIGHT", "TOPIC", "OWNER", "POWER", "PHONE", "HONEY", "DEATH", "HEART", "CHEEK", "RATIO", "MEDIA", "DEPTH", "CHEST", "GUEST", "SALAD", "BLOOD", "STORY", "UNION"]})
easy = Difficulty.create({:name => 'EASY', :words => ["PREMATURE", "INFLUENCE", "ADVERTISE", "EVOLUTION", "UNDERMINE", "OFFSPRING", "EFFECTIVE", "LIFESTYLE", "FAVORITED", "DIRECTION", "FINANCIAL", "CONSTRUCT", "EXEMPTION", "TRANSLATE", "TREASURER", "WATERFALL", "RECESSION", "POLLUTION", "VARIATION", "EDUCATION", "DIMENSION", "PROMOTION"]})