#python diamond
def Diamond(rows):
    n = 1
    for i in range(1, rows + 1):
        for j in range (1, (rows - i) + 1):
            print(end = " ")
        while n != (i+1):
            print("*", end = " ")
            n = n + 1
        n = 1
        print()

    k = 0
    n = 0
    for i in range(1, rows + 1):
        for j in range (1, k + 1):
            print(end = " ")
        k = k + 1
        while n <= (rows - i):
            print("*", end = " ")
            n = n + 1
        n = 0
        print()

rows = 5
Diamond(rows)
