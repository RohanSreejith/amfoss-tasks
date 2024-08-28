def generate_diamond(n):
    lines = []
    for i in range(1, n + 1):
        lines.append(' ' * (n - i) + '*' * (2 * i - 1))
    for i in range(n - 1, 0, -1):
        lines.append(' ' * (n - i) + '*' * (2 * i - 1))
    return '\n'.join(lines)

with open('input.txt', 'r') as infile:
    n = int(infile.read().strip())

diamond = generate_diamond(n)

with open('output.txt', 'w') as outfile:
    outfile.write(diamond)

