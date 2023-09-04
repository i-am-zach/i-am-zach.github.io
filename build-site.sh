yarn build
rm -rf docs
cp -r dist docs
touch docs/.nojekyll