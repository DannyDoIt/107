# JavaScript way
# create variable
# let, var or const
# let name = "Danny";

last_name = "Do"
age = 33
found = False
name = "Danny"
print(name)

# if / else statements
if not found:
    print("hello world!")
elif found:
    pass

if age < 100:
    print("great you're not that old")
    print("I'm inside of the if statement")
elif age > 100:
    print("yeah, seems that you're not that young anymore")
else:
    print("i don't know how you get here")
print("im outside of the if statement")

# functiondoSomething() {
#
# }

def sayHello():
    print("Hello there")

sayHello()

# list .... this is the arrays
colors = ["black", "blue",1, "yellow"]
# add
colors.append("pink")
# get any element
print(colors[1])

# travel the list - for loop
# for(i=0; i<colors.length; i++)
# {
    # let
    # console.log(tmp)
# }

for col in colors:
    print(col)



    print(colors)


    # dictionary
    me = {
        "age":33,
        "firstName": "Danny",
        "lastName": "Do"
    }

print(me)
# modify
me["age"]=99
# get the values
print(me["firstName"])


# create a calculatior using functions.
def printMenu():
    print("[1]sum")
    print("[2]Subtract")
    print("[3]Multiplication")
    print("[4]Division")

#plain instructions
printMenu()
opt = input("Select the option")

number1=float(input("please give me the first number "))
number2=float(input("please give me the 2nd number "))

if opt=="1":
    total= number1 + number2
    print("the total is:"+ str(total))
elif opt=="2":
    total = number1 - number2
    print("the total is:"+ str(total))
elif opt=="3":
    total = number1 * number2
    print("the total is:"+ str(total))
elif opt=="4":
    if number2 == 0:
        print("You cannot divide by zero")
    else:
        total = number1 / number2
        print("the total is:"+ str(total))