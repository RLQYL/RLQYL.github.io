#!/bin/sh


numLines=`git status | wc -l`
if [ $numLines -gt 3 ]
then
	git status
	git add -A
	echo "git add completed"
	git commit -m "Commiting files"
	echo "git commit completed"
	git pull git@github.com:RLQYL/RLQYL.github.io.git
	git push origin master
else
	echo "Nothing to commit"
fi

