import java.io.*;
import java.nio.file.*;

public class DiamondPattern {

    public static void main(String[] args) {
        try {
            String inputFile = "input.txt";
            String outputFile = "output.txt";
            
            int n = Integer.parseInt(Files.readString(Paths.get(inputFile)).trim());
            StringBuilder diamond = new StringBuilder();
            
            for (int i = 1; i <= n; i++) {
                diamond.append(" ".repeat(n - i))
                       .append("*".repeat(2 * i - 1))
                       .append("\n");
            }
            
            for (int i = n - 1; i >= 1; i--) {
                diamond.append(" ".repeat(n - i))
                       .append("*".repeat(2 * i - 1))
                       .append("\n");
            }
            
            Files.writeString(Paths.get(outputFile), diamond.toString());
        } catch (IOException | NumberFormatException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}

