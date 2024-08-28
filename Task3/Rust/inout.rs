use std::fs;
use std::io::Result;

fn main() -> Result<()> {
    let content = fs::read_to_string("input.txt")?;
    fs::write("output.txt", content)?;
    Ok(())
}

