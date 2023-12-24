const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let normalizedMessage = message.toUpperCase();
    const normalizedKey = key.toUpperCase();
    let encryptedText = '';
    let keyIndex = 0;

    for (let i = 0; i < normalizedMessage.length; i++) {
      const messageChar = normalizedMessage[i];

      if (this.alphabet.includes(messageChar)) {
        const messageIndex = this.alphabet.indexOf(messageChar);
        const keyChar = normalizedKey[keyIndex % normalizedKey.length];
        const keyIndexChar = this.alphabet.indexOf(keyChar);

        const newIndex = (messageIndex + keyIndexChar) % this.alphabet.length;
        encryptedText += this.alphabet[newIndex];
        keyIndex++;
      } else {
        encryptedText += messageChar;
      }
    }

    return this.reverse ? encryptedText : encryptedText.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    let normalizedMessage = encryptedMessage.toUpperCase();
    const normalizedKey = key.toUpperCase();
    let decryptedText = '';
    let keyIndex = 0;

    for (let i = 0; i < normalizedMessage.length; i++) {
      const messageChar = normalizedMessage[i];

      if (this.alphabet.includes(messageChar)) {
        const messageIndex = this.alphabet.indexOf(messageChar);
        const keyChar = normalizedKey[keyIndex % normalizedKey.length];
        const keyIndexChar = this.alphabet.indexOf(keyChar);

        const newIndex = (messageIndex - keyIndexChar + this.alphabet.length) % this.alphabet.length;
        decryptedText += this.alphabet[newIndex];
        keyIndex++;
      } else {
        decryptedText += messageChar;
      }
    }

    return this.reverse ? decryptedText : decryptedText.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
