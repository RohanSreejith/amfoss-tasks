defmodule DiamondPattern do
  def run do
    input_file = "input.txt"
    output_file = "output.txt"

    case File.read(input_file) do
      {:ok, content} ->
        case Integer.parse(String.trim(content)) do
          {n, ""} when n > 0 ->
            diamond_pattern = generate_diamond(n)
            write_to_file(output_file, diamond_pattern)
          _ ->
            IO.puts("The content of #{input_file} is not a valid positive integer.")
        end
      {:error, reason} ->
        IO.puts("Error reading from #{input_file}: #{reason}")
    end
  end

  defp generate_diamond(n) do
    top_half = for i <- 1..n do
      row(n, i)
    end
    bottom_half = for i <- n-1..1 do
      row(n, i)
    end
    Enum.join(top_half ++ bottom_half, "\n")
  end

  defp row(n, i) do
    spaces = String.duplicate(" ", n - i)
    asterisks = String.duplicate("*", 2 * i - 1)
    spaces <> asterisks
  end

  defp write_to_file(file, content) do
    case File.write(file, content) do
      :ok -> IO.puts("Diamond pattern successfully written to #{file}")
      {:error, reason} -> IO.puts("Error writing to #{file}: #{reason}")
    end
  end
end

DiamondPattern.run()

