
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

const findCharPost = (string1, k1) => {
  let position = 0;
  [...string1].forEach(c => {
    if (c == k1) {
      return position;
    }
    position += 1;
  })
}

const hello = () => 'hello';
