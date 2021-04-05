import fs from 'fs';
import path from 'path';

const rootDirPath = path.resolve(__dirname, '../..');
const pkgJsonPath = path.resolve(rootDirPath, 'package.json');

const readPackageJson = (): Record<string, unknown> => {
  const pkgJsonContents = fs.readFileSync(pkgJsonPath, 'utf8');
  return JSON.parse(pkgJsonContents);
};

export const PackageJson = readPackageJson();
