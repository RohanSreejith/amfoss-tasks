use std::fs;
use std::io::Result;

fn main() -> Result<()> {
    let input = fs::read_to_string("input.txt")?;
    let n: usize = input.trim().parse().expect("Invalid number");

    let mut diamond = String::new();

    for i in 1..=n {
        diamond.push_str(&format!("{:width$}\n", "*".repeat(2 * i - 1), width = n - i + 1));
    }

    for i in (1..n).rev() {
        diamond.push_str(&format!("{:width$}\n", "*".repeat(2 * i - 1), width = n - i + 1));
    }

    fs::write("output.txt", diamond)?;
    Ok(())
}

