#include <stdio.h>
#include <stdlib.h>

void writeDiamondPattern(FILE *file, int n) {
    int i, j;

    for (i = 1; i <= n; i++) {
        for (j = 1; j <= (n - i); j++) {
            fprintf(file, " ");
        }
        for (j = 1; j <= (2 * i - 1); j++) {
            fprintf(file, "*");
        }
        fprintf(file, "\n");
    }

    for (i = n - 1; i >= 1; i--) {
        for (j = 1; j <= (n - i); j++) {
            fprintf(file, " ");
        }
        for (j = 1; j <= (2 * i - 1); j++) {
            fprintf(file, "*");
        }
        fprintf(file, "\n");
    }
}

int main() {
    FILE *inputFile, *outputFile;
    int n;

    inputFile = fopen("input.txt", "r");
    if (inputFile == NULL) {
        perror("Error opening input file");
        return 1;
    }

    if (fscanf(inputFile, "%d", &n) != 1) {
        perror("Error reading number from input file");
        fclose(inputFile);
        return 1;
    }
    fclose(inputFile);

    outputFile = fopen("output.txt", "w");
    if (outputFile == NULL) {
        perror("Error opening output file");
        return 1;
    }

    writeDiamondPattern(outputFile, n);
    fclose(outputFile);

    return 1;
}

