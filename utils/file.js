import fs from 'fs';

export const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function(err, data) {
      if (err) reject(err);
      resolve(data);
    });
  });
};

export const writeFile = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf-8', function(err, data) {
      if (err) reject(err);
      resolve(data);
    });
  });
};
