function palindrome(sentence) {
    var regExp = /[^A-Za-z0-9]/g;
    sentence = sentence.toLowerCase().replace(regExp, '');
    var senLen = sentence.length;

    for (var i = 0; i < senLen/2; i++) {
            if (sentence[i] !== sentence[senLen - 1 - i]) {
                return false;
        }
    }

    return true;
}

//Replace string with the palindrome sentence you want to evaluate
palindrome("Redivider");