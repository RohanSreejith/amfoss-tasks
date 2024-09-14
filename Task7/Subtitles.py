import click
import os
import hashlib
import requests
from bs4 import BeautifulSoup

@click.command()
@click.option('-l', '--language', help='Filter subtitles by language.')
@click.option('-o', '--output', type=click.Path(), default='.', help='Specify the output folder for subtitles.')
@click.option('-s', '--file-size', type=int, help='Filter subtitles by movie file size.')
@click.option('-h', '--match-by-hash', is_flag=True, help='Match subtitles by movie hash.')
@click.option('-b', '--batch-download', type=click.Path(), help='Enable batch mode for downloading subtitles for all movies in a directory.')
@click.argument('file', type=click.Path(exists=True))
def download_subtitles(language, output, file_size, match_by_hash, batch_download, file):
    """Download subtitles for a given movie file."""
    if batch_download:
        process_batch(batch_download, language, output, file_size, match_by_hash)
    else:
        process_single(file, language, output, file_size, match_by_hash)

def process_single(file, language, output, file_size, match_by_hash):
    #the processing logic for a single file
    imdb_id = extract_imdb_id(file)
    movie_hash = calculate_hash(file) if match_by_hash else None
    file_size = get_file_size(file) if file_size else None

    subtitles = scrape_subtitles(imdb_id, movie_hash, file_size, language)
    
    if not subtitles:
        print("No subtitles found.")
        return
    
    list_subtitles(subtitles)
    
    choice = int(input("Enter the number of the subtitle to download: "))
    selected_subtitle = subtitles[choice - 1]
    
    download_subtitle(selected_subtitle['link'], output)

def process_batch(directory, language, output, file_size, match_by_hash):
    # Processing all .mp4 files in the directory
    for file_name in os.listdir(directory):
        if file_name.endswith('.mp4'):
            print(f"Processing {file_name}...")
            process_single(os.path.join(directory, file_name), language, output, file_size, match_by_hash)

def calculate_hash(file_path):
    # Calculate a hash of the file
    hasher = hashlib.md5()
    with open(file_path, 'rb') as file:
        while chunk := file.read(8192):
            hasher.update(chunk)
    return hasher.hexdigest()

def get_file_size(file_path):
    # file size
    return os.path.getsize(file_path)

def extract_imdb_id(file_name):
    # Extract IMDb ID
     pattern = r"tt\d{7,10}"
    
    match = re.search(pattern, filename)
    
    if match:
        return match.group(0) 
    else:
        return None

def scrape_subtitles(imdb_id=None, movie_hash=None, file_size=None, language=None):
    # OpenSubtitles for subtitle options
    url = 'https://www.opensubtitles.org/en/search2'
    params = {
        'sublanguageid': language,
        'imdbid': imdb_id,
        'moviehash': movie_hash,
        'moviebytesize': file_size,
    }
    response = requests.get(url, params=params)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # parsing
    subtitles = []
    for result in soup.find_all('a', {'class': 'bnone'}):
        subtitles.append({
            'title': result.text.strip(),
            'link': result['href']
        })
    return subtitles

def list_subtitles(subtitles):
    # all available subtitles
    for idx, subtitle in enumerate(subtitles, start=1):
        print(f"{idx}. {subtitle['title']}")

def download_subtitle(url, output_folder):
    # Download the selected subtitle
    response = requests.get(url)
    file_name = os.path.join(output_folder, url.split('/')[-1] + ".srt")
    with open(file_name, 'wb') as file:
        file.write(response.content)
    print(f"Downloaded: {file_name}")

if __name__ == '__main__':
    download_subtitles()

