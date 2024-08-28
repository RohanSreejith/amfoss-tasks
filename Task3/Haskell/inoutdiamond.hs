import System.IO

main :: IO ()
main = do
    input <- readFile "input.txt"
    let n = read (input :: String) :: Int
        topHalf = [generateRow n i | i <- [1..n]]
        bottomHalf = [generateRow n i | i <- [n-1, n-2..1]]
        diamond = unlines (topHalf ++ bottomHalf)
    writeFile "output.txt" diamond

generateRow :: Int -> Int -> String
generateRow n i = replicate (n - i) ' ' ++ replicate (2 * i - 1) '*'

