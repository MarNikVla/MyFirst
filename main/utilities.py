
from pathlib import Path
import random

LISTS_DIR = Path(__file__).resolve(strict=True).parent/"static"/"main"
FRIENDS_OF_CATS_LIST = LISTS_DIR/"список друзей кошек.txt"
ENEMIES_OF_CATS_LIST = LISTS_DIR/"список врагов кошек.txt"
BREEDS_OF_CATS_LIST = LISTS_DIR/"породы кошек.txt"


# friends = FRIENDS_OF_CATS_LIST.read_text(encoding="utf-8")
# enemies = ENEMIES_OF_CATS_LIST.read_text(encoding="utf-8")
# breeds = BREEDS_OF_CATS_LIST.read_text(encoding="utf-8")

def get_friend():
    friends = (FRIENDS_OF_CATS_LIST.read_text(encoding="utf-8")).split("""\n""")
    # friend = random.choice(friends.split("""\n"""))
    return friends

def get_enemie():
    enemies = ENEMIES_OF_CATS_LIST.read_text(encoding="utf-8").split("""\n""")
    # enemie = random.choice(enemies.split("""\n"""))
    return enemies

def get_breed():
    breeds = BREEDS_OF_CATS_LIST.read_text(encoding="utf-8")
    breed = random.choice(breeds.split("""\n"""))
    return breed

# friends=get_breed()
#  if __name__=="__main__":
#     print(friends)
