import random
from random import randint

print("Welcome to the number guessing game!")
seed_value = input("Enter a random seed: ")
random.seed(seed_value)

play = True
while play:
    num = random.randint(1,100)
    guess = int(input("Please enter a guess:"))
    
while guess != num:
    guesses_taken += 1  
    
    if guess > num:
        print("Lower")

    elif guess < num:
        print("Higher")

    elif guess == num:
        print("Congratulations. You guessed it!")
        print("It took you"+ str(guesses_taken)+ "guesses.")    
    while guess == num:
        play_again = input("Would you like to play again (yes/no)?")
        if play_again == "no":
            print("Thank you. Goodbye")
            play = False