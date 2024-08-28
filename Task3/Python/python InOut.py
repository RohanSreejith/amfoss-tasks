#python In and Out program

with open("input.txt", "r") as input: 
       
    with open("output.txt", "w") as output: 
          
        for line in input: 
            output.write(line)

