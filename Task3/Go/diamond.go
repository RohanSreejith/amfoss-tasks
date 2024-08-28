package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Enter the number of rows for the diamond pattern: ")
	input, _ := reader.ReadString('\n')
	input = strings.TrimSpace(input)
	n, err := strconv.Atoi(input)
	if err != nil || n <= 0 {
		fmt.Println("Invalid input. Please enter a positive integer.")
		return
	}

	for i := 1; i <= n; i++ {
		fmt.Printf("%s%s\n", strings.Repeat(" ", n-i), strings.Repeat("*", 2*i-1))
	}
	for i := n - 1; i >= 1; i-- {
		fmt.Printf("%s%s\n", strings.Repeat(" ", n-i), strings.Repeat("*", 2*i-1))
	}
}

