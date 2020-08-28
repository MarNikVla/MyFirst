
from pathlib import Path
import random

LISTS_DIR = Path(__file__).resolve(strict=True).parent/"static"/"main"
FRIENDS_OF_CATS_LIST = LISTS_DIR/"список друзей кошек.txt"
ENEMIES_OF_CATS_LIST = LISTS_DIR/"список врагов кошек.txt"
BREEDS_OF_CATS_LIST = LISTS_DIR/"породы кошек.txt"

"""Получает друга кошек из списка"""
def get_friend():
    friends = (FRIENDS_OF_CATS_LIST.read_text(encoding="utf-8"))
    friend = random.choice(friends.split("""\n"""))
    return friend


"""Получает врага кошек из списка"""
def get_enemy():
    enemies = ENEMIES_OF_CATS_LIST.read_text(encoding="utf-8")
    enemy = random.choice(enemies.split("""\n"""))
    return enemy


"""Получает породу кошек из списка"""
def get_breed():
    breeds = BREEDS_OF_CATS_LIST.read_text(encoding="utf-8")
    breed = random.choice(breeds.split("""\n"""))
    return breed
