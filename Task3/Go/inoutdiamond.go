package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strconv"
	"strings"
)

func main() {
	inputFile := "input.txt"
	outputFile := "output.txt"

	content, err := ioutil.ReadFile(inputFile)
	if err != nil {
		fmt.Println("Error reading file:", err)
		return
	}

	n, err := strconv.Atoi(strings.TrimSpace(string(content)))
	if err != nil || n <= 0 {
		fmt.Println("Invalid number in input file.")
		return
	}

	var result strings.Builder

	for i := 1; i <= n; i++ {
		result.WriteString(strings.Repeat(" ", n-i))
		result.WriteString(strings.Repeat("*", 2*i-1))
		result.WriteString("\n")
	}

	for i := n - 1; i >= 1; i-- {
		result.WriteString(strings.Repeat(" ", n-i))
		result.WriteString(strings.Repeat("*", 2*i-1))
		result.WriteString("\n")
	}

	err = ioutil.WriteFile(outputFile, []byte(result.String()), 0644)
	if err != nil {
		fmt.Println("Error writing to file:", err)
	}
}

