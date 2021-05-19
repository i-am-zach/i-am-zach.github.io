rmdir /s /q docs
hudo -d docs
git add .
git commit -m "Built docs directory with hugo"
git push -u origin main