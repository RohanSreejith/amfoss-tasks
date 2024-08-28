import Control.Monad (forM_)

main :: IO ()
main = do
    putStr "Enter the number of rows for the diamond pattern: "
    n <- readLn
    let topHalf = [generateRow n i | i <- [1..n]]
        bottomHalf = [generateRow n i | i <- [n-1,n-2..1]]
        diamond = topHalf ++ bottomHalf
    forM_ diamond putStrLn

generateRow :: Int -> Int -> String
generateRow n i = replicate (n - i) ' ' ++ replicate (2 * i - 1) '*'

