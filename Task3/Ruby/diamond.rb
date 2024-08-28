print "Enter the number of rows for the diamond pattern: "
n = gets.to_i

(1..n).each do |i|
  puts ' ' * (n - i) + '*' * (2 * i - 1)
end

(n - 1).downto(1) do |i|
  puts ' ' * (n - i) + '*' * (2 * i - 1)
end

