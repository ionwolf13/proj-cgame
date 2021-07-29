# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
 cardArray = [
'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH',
'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD',
'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS',
'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC'
]


cardArray.each{ |x| 
    if(x.include?("H"))
        Card.create(image: "https://deckofcardsapi.com/static/img/#{x}.png", suite: "H", value: x[0], code: x )
    elsif(x.include?("D"))
        Card.create(image: "https://deckofcardsapi.com/static/img/#{x}.png", suite: "D", value: x[0], code: x )
    
    elsif(x.include?("S"))
        Card.create(image: "https://deckofcardsapi.com/static/img/#{x}.png", suite: "S", value: x[0], code: x )
    
    elsif(x.include?("C"))
        Card.create(image: "https://deckofcardsapi.com/static/img/#{x}.png", suite: "C", value: x[0], code: x )
    end
} 


user1 = User.create(username: "jesus", first_name: "jesus", middle_name: "israel", last_name: "garcia", age: 20, image: "image goes here", hobbies: "Playing board games and card Games!", email: "jesus@gmail.com", password: "jesus", friends_id: 0)
user2 = User.create(username: "gzuz", first_name: "gzuz", middle_name: "israel", last_name: "garcia", age: 20, image: "image goes here", hobbies: "Playing board games and card Games!", email: "gzuz@gmail.com", password: "gzuz", friends_id: 0)
user3 = User.create(username: "ira", first_name: "ira", middle_name: "israel", last_name: "garcia", age: 20, image: "image goes here", hobbies: "Playing board games and card Games!", email: "ira@gmail.com", password: "ira", friends_id: [User.first.id])
user4 = User.create(username: "jeisga", first_name: "jeisga", middle_name: "israel", last_name: "garcia", age: 20, image: "image goes here", hobbies: "Playing board games and card Games!", email: "jeisga@gmail.com", password: "jeisga", friends_id: [User.second.id, User.first.id])

game1 = Game.create(name: "War", max_players: 8, min_players: 2, 
                    description: "The game ends when one player has won all the cards.", 
                    rules: "The divide deck evenly amongst players, deal one at a time, face down. Anyone may deal first. Each player must have their stack face down in front of them. At the same time, every player turns up a card. 
                    The player with the higher card takes all cards and must be place under their deck face down. If played cards are the same, it's War! Each player playes a card face down and another card face up. The player with 
                    the higher card takes all piles. If the turned-up cards are again the same rank, each player places one card face down and turns another card face up. The player with the higher card takes all cards, and so on.")
game2 = Game.create(name: "Gold Fish", max_players: 5, min_players: 2, 
                    description: "The goal obtain the most `books`, of cards. A `book` is any four of a kind, such as four kings, four aces, and so on.", 
                    rules: "Any player deals one card face up to each player. The player with the lowest card is the dealer. Shuffle cards, and the player to the right cuts them.
                    The dealer completes the cut and deals the cards clockwise one at a time, face down, beginning the left player. If 2 or 3 people are playing, each 
                    player receives 7 cards. If 4 or 5 people are playing, each receives 5 cards. The remainder is placed face down at the center to form the stock. The player 
                    to the left of the dealer, calls out another opponent and says, for example, `Give me your queens`, make sure to specify the rank that they want, from ace down to 2.
                    The player who is fishing (player who got called out) must have at least one card of the rank that was asked for. That player must hand over all the cards requested.
                    If the player has none, they say, `Go fish!` and the player who made the request draws a card from the center pile and places it in their hand.
                    If a player gets one or more cards of the named rank that was asked for, they are entitled to ask the same or another player for a card. The player can ask for the same card or a different one. As long as the player succeeds in getting cards (makes a catch), their turn continues. When a player makes a catch, they must reveal the card so that the catch is verified. If a player gets the fourth card of a book, the player shows all four cards, places them on the table face up in front of everyone, and plays again.
                    If the player goes fishing without, making a catch, (does not receive a card he asked for), the turn passes to the left.
                    The winner is the player with the most books. During the game, if a player is left without cards, they may draw from the center pile on their turn and then ask for cards of that rank. If there are no cards left in the stock, they are out of the game.")
game3 = Game.create(name: "Spoon", max_players: 6, min_players: 2, 
                    description: "Players take turns trying to collect a four-of-a-kind. Once someone does, everyone tries to grab a spoon. Without a spoon, you get a letter. If a player spells, Spoon, they’re out! The last player standing wins!", 
                    rules: "Arrange the spoons in a small circle in the center of the table and deal four cards to each player. Each player tries to make four of a kind. The dealer takes a card off the top of the deck to have five cards in their hand, removes one and passes it face down to the left. Each player discards to the person on their left.
                    The last player places their discard into a trash pile. Cards are picked up and passed quickly around the table until someone gets four of a kind and takes a spoon from the center. Once the player with four of a kind takes a spoon, anyone can take a spoon. The player left without a spoon gets a letter. If at any time the draw cards run out, pause to reshuffle the trash pile and keep going.")
game4 = Game.create(name: "Trash", max_players: 2, min_players: 2, 
                    description: "Be the first player to complete your layout of ten cards Ace through Ten (A,1,2,3,4,5,6,7,8,9,10)", 
                    rules: "Aces count as one, cards 2 to 10 have their face values, Jacks are wild, and Queens and Kings automatically end the player's turn. Each player 
                        gets ten cards face down in two rows of five cards each. Players are not allowed to look at their cards. The remaining cards are placed face down in a pile. 
                        The player who doesn't deal the cards starts the game. The first player draws from the stock. If they can play the card (meaning Ace through Jack) 
                        the player places the card in the appropriate spot on their grid. If they drew an Ace, for instance, they would place it in the top left position of the grid; a 10 would be the bottom right and so on. When they place a card on the grid, they flip over the faced down card previously in that position. If they can use that card then they do the same thing until they get a card they cannot play (meaning a King, Queen, or a card they have already played).
                        When they have an unplayable card, they place it face up beside the stock pile, forming the discard pile, and player 2 begins their turn.
                        Starting with player 2's first turn, players can choose to either draw from the stock pile or the discard pile.
                        The first player to fill out their entire grid wins the round")
game5 = Game.create(name: "Black Jack", max_players: 8, min_players: 2, 
                    description: "Aim of the 21 Card Game is to get 21 or as close to as possible.", 
                    rules: "Number cards have their face value, jacks, kings and queens are worth 10. Ace can be either 1 or 11 and the player who holds the ace gets to choose the value of the card.
                    The dealer and all other players have two cards. With the exception of the dealer the players have their cards face up. The dealer has one card up and one card face down.
                    The dealer goes to each player one at a time. The player needs to decide if they want another card (hit) or will sit on what they have. You can have as many cards as you like as long as you don’t go over 21.
                    The dealer does this with every player. Players are not competing against each other, but against the dealer.
                    The dealer then turns over their other card and needs to decide what to do. If the dealer has 16 or under then they must take another card.
                    If the dealer has 21 (Ace and a ten value card) the dealer wins.
                    If the dealer goes bust then everyone else wins.
                    We reshuffle the deck of cards after every game.")

gameSession1 = GameSession.create(date:7292021, first_place: 0, second_place: 0, third_place: 0, user_id: User.first.id, game_id: Game.first.id)

print "seeded"

print cardArray