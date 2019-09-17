# Cloning / starting with new project

'git clone --depth=1 [repoUrl][foldername]' to clone this repo with only the last commit (i.e - without all the commit history) to a new folder in my current directory

'cd [foldername]'
'open .' to open the contents in vsCode
'rm -rf .git' to remove linking to remote / ref to git as without this 'git remote -v' still points to the source it was cloned from
'git init' to initialise new repo
'git add . + git commit -m 'initial commit' to create an initial commit
go to Git, create a new repo with [folder name]
copy "git remote add origin [url]", paste in Terminal
'git push -u origin master'
rename project name in package.json and remove references to homepage, repository, bugs, etc (wherever there's a url to the original git repo)
'npm init -y' will update all those fields
'npm i' to install all the dependencies

# Formatting

'npx prettier --write "\*_/_.js"' to format all js files

# Authorship

Created following "Modern JavaScript Tooling with React" course by Andy Van Slaars on egghead.io
