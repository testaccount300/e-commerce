
const compareString = (s1,s2) => {
    let isSame = true;
    if (s1.length == s2.length) {
        for (let i=0; i<s1.length; i += 1) {
            if (s1[i] != s2[i]) {
              isSame = false;
              break;
            }
        }
    } else isSame = false;
    return isSame;
}

