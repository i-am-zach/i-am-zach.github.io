:parse
IF "%~1"=="" GOTO endparse
rmdir /s /q docs
hudo -d docs
git add .
git commit -m %1
git push -u origin main
:endparse