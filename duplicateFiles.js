const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const basePath = path.join(__dirname, './');

const hashFileAsync = (filePath, type) => {
  const hashType = type.toLowerCase();

  if (!fs.existsSync(filePath)) throw new Error('文件不存在');

  if (!crypto.getHashes().includes(hashType))
    throw new Error(`不支持 ${type} 类型`);

  const buffer = fs.readFileSync(filePath);
  const hash = crypto.createHash(hashType);
  hash.update(buffer);

  return hash.digest('hex');
};

const getFilesHash = (dir) => {
  const loop = (dir, filesList = [], dirName = '') => {
    const files = fs.readdirSync(dir);

    files.forEach((item) => {
      const filePath = path.join(dir, item);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        loop(filePath, filesList, item);
      } else {
        filesList.push({
          name: dirName,
          path: filePath,
          hash: hashFileAsync(filePath, 'SHA256'),
        });
      }
    });

    return filesList;
  };

  return loop(dir);
};

const duplicateFiles = () => {
  const filesList = getFilesHash(basePath);
  const map = new Map();
  const obj = {};

  filesList.map((f) => {
    if (map.has(f.hash)) {
      obj[f.hash].push(f.path);
    } else {
      map.set(f.hash, f.path);
      obj[f.hash] = [f.path];
    }

    return f;
  });

  const stack = [];

  Object.values(obj).map((item) => {
    if (item.length > 1) {
      stack.push(item);
    }

    return item;
  });

  return stack;
};

console.log(duplicateFiles());
