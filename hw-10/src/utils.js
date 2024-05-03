const generateKey = alphabet => {
  const max = alphabet.length;
  return length => {
    let key = '';
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * max);
      key = key + alphabet[index];
    }
    return key;
  };
};

const dat = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ-';
export const generateId = generateKey(dat);

const today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = today.getFullYear();
export const currentDate = day + '.' + month + '.' + year;
