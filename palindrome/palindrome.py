string1 = "level"
string2 = "algorithm"
string3 = "A man, a plan, a canal: Panama."

def isPalindrome(s):
    sReversed = s[::-1]
    if s == sReversed:
        print(True)
    else:
        print(False)

isPalindrome(string1)
isPalindrome(string2)
isPalindrome(string3)