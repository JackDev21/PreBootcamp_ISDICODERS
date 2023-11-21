const getCodeToString = (code) => {
    return code.toString().split("");
};

const changeDigitsPosition = (code) => {
    const codeToString = getCodeToString(code);
    const lastDigit = codeToString.pop();
    codeToString.unshift(lastDigit);
    return codeToString.join("");
};

const multiplyDigits = (code, multiplicator) => {
    const codeToString = getCodeToString(code);
    const multipliedCode = codeToString.map(
        (digit) => parseInt(digit) * multiplicator
    );
    return multipliedCode.join("");
};

const decrypt = (codeToDecrypt, dividend) => {
    const decryptedCode = getCodeToString(codeToDecrypt).map(
        (digit) => parseInt(digit) / dividend
    );
    return decryptedCode.join("");
};

const codeScript = (firstCode, secondCode, multiplicator) => {
    let encryptedFirstCode = changeDigitsPosition(firstCode);
    encryptedFirstCode = multiplyDigits(encryptedFirstCode, multiplicator);

    let encryptedSecondCode = changeDigitsPosition(secondCode);
    encryptedSecondCode = multiplyDigits(encryptedSecondCode, multiplicator);

    const result = [encryptedFirstCode, encryptedSecondCode];
    console.log(`Encrypted Codes: ${result}`);

    decrypt(result, multiplicator);
};

codeScript(2321, 4132, 2);