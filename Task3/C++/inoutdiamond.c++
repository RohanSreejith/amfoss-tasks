#include <iostream>
#include <fstream>
#include <iomanip>

void writeDiamondPattern(std::ofstream &outFile, int n) {
    for (int i = 1; i <= n; ++i) {
        outFile << std::setw(n - i + 1);
        outFile << std::setfill('*') << std::left << std::setw(2 * i - 1) << '*';
        outFile << '\n';
    }

    for (int i = n - 1; i >= 1; --i) {
        outFile << std::setw(n - i + 1);
        outFile << std::setfill('*') << std::left << std::setw(2 * i - 1) << '*';
        outFile << '\n';
    }
}

int main() {
    std::ifstream inputFile("input.txt");
    std::ofstream outputFile("output.txt");

    if (!inputFile) {
        std::cerr << "Error opening input file\n";
        return 1;
    }

    if (!outputFile) {
        std::cerr << "Error opening output file\n";
        return 1;
    }

    int n;
    inputFile >> n;
    
    if (inputFile.fail()) {
        std::cerr << "Error reading number from input file\n";
        return 1;
    }

    writeDiamondPattern(outputFile, n);

    inputFile.close();
    outputFile.close();

    return 0;
}

