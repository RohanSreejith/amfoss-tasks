defmodule DiamondPattern do
  def run do
    IO.write("Enter the number of rows for the diamond pattern: ")
    
    n = case IO.gets("") do
      {:ok, input} ->
        String.trim(input)
        |> Integer.parse()
        |> case do
          {number, ""} -> number
          _ -> 
            IO.puts("Invalid input. Please enter a valid integer.")
            System.halt(1)
        end

      :error ->
        IO.puts("Error reading input.")
        System.halt(1)
    end

    print_diamond(n)
  end

  defp print_diamond(n) when n > 0 do
    for i <- 1..n do
      print_row(n, i)
    end

    for i <- n-1..1 do
      print_row(n, i)
    end
  end

  defp print_row(n, i) do
    IO.write(String.duplicate(" ", n - i))

    IO.write(String.duplicate("*", 2 * i - 1))

    IO.puts("")
  end
end

DiamondPattern.run()

