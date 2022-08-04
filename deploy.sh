rm -rf build &&
yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "commit page" &&
git branch -M main &&
git remote add origin git@github.com:AlierQ/Mint-react-page.git &&
git push -u -f origin main &&
cd -
