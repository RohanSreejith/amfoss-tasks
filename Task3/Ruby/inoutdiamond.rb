n = File.read('input.txt').to_i

diamond = ""

(1..n).each do |i|
  diamond << ' ' * (n - i) + '*' * (2 * i - 1) + "\n"
end

(n - 1).downto(1) do |i|
  diamond << ' ' * (n - i) + '*' * (2 * i - 1) + "\n"
end

File.write('output.txt', diamond)

