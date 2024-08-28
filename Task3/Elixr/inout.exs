defmodule FileCopy do
  def run do
    # Define the file paths
    input_file = "input.txt"
    output_file = "output.txt"

    # Read the content from the input file
    case File.read(input_file) do
      {:ok, content} ->
        # Write the content to the output file
        case File.write(output_file, content) do
          :ok -> IO.puts("File successfully copied to #{output_file}")
          {:error, reason} -> IO.puts("Error writing to file: #{reason}")
        end

      {:error, reason} ->
        IO.puts("Error reading file: #{reason}")
    end
  end
end
FileCopy.run()

