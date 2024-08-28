//read file and output c program

#include <stdio.h>
#include <stdlib.h>

int main()
{
    FILE *f1, *f2;
    int c;

    fptr1 = "input.txt";

    fptr2 = "output.txt"

    while ((c = fgetc(f1)) != EOF)
    {
        fputc(c, f2);
    }

    fclose(fptr1);
    fclose(fptr2);
    return 0;
}
