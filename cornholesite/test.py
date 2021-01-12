import random
from random import randint
guesses_taken = 0
num = randint(1,100)


print("Welcome to the number guessing game")
guess = input("Please enter a guess: ")
guess=int(guess)
while guesses_taken:
    guesses_taken = guesses_taken + 1    
    if guess > num:
        print("Lower")
    if guess < num:
        print("Higher")
    if guess == num:
        break
if guess == num:
    guesses_taken= str(guesses_taken)
    print("Congratulations. You guessed it! 
    It took you", guesses_taken, "guesses.")    

if guess != num:
    print("Please enter a guess: ")