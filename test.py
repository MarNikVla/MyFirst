
def isPalindrom(number):
    print(len(number))
    isPalindrom = True
    for i in range(len(number)):
        isPalindrom *= (number[i] == number[-1-i])
    return print(bool(isPalindrom))


if __name__ == "__main__":
    isPalindrom("112211")