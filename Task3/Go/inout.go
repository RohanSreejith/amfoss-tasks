package main

import (
	"fmt"
	"io/ioutil"
	"os"
)

func main() {
	inputFile := "input.txt"
	outputFile := "output.txt"

	content, err := ioutil.ReadFile(inputFile)
	if err != nil {
		fmt.Println("Error reading file:", err)
		return
	}

	err = ioutil.WriteFile(outputFile, content, 0644)
	if err != nil {
		fmt.Println("Error writing file:", err)
	}
}

