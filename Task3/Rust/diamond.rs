use std::io;

fn main() {
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let n: usize = input.trim().parse().expect("Invalid input");

    for i in 1..=n {
        println!("{}{}", " ".repeat(n - i), "*".repeat(2 * i - 1));
    }

    for i in (1..n).rev() {
        println!("{}{}", " ".repeat(n - i), "*".repeat(2 * i - 1));
    }
}

