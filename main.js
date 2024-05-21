import { createHash } from 'crypto';
import { pbkdf2Sync, randomBytes } from 'crypto';
import crypto from 'crypto';


function generateHash(input) {
  const hash = createHash('sha256');
  hash.update(input);
  return hash.digest('hex');
}
console.log(generateHash('Hello, World!'))


function generatePasswordHash(password, salt, iterations = 10000, keylen = 64, digest = 'sha512') {
  const hash = pbkdf2Sync(password, salt, iterations, keylen, digest);
  return hash.toString('hex');
}

function verifyPassword(inputPassword, storedHash, salt, iterations = 10000, keylen = 64, digest = 'sha512') {
  const hash = pbkdf2Sync(inputPassword, salt, iterations, keylen, digest);
  return hash.toString('hex') === storedHash;
}

export { generateHash, generatePasswordHash, verifyPassword }
