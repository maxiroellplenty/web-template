RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
SET='\033[0m'


# change your branch name
gitBranch="master"
sshConnection="yourUser@yourServer.de:httpdocs"

function uploadToWebServer()
{
    echo "${YELLOW} ### Upload to Webserver with ssh ### ${SET}"
    scp -r dist/* $sshConnection
    echo "${YELLOW} ### Done ### ${SET}"
}
function pushToGithub()
{
    echo "${YELLOW} ### Upload to Github ### ${SET}"
    # Updates your local git
    git fetch
    # Adds all changed files and creates a commit message

    git add -A && git commit -m 'Deployed to Github'
    # Pushes to the given repository 
    git push origin $master
    echo "${YELLOW} ### Done ### ${SET}"
}

function main()
{
    echo "${GREEN} ### Started Deployer ### ${SET}"
    echo ''
    sh build.sh
    echo ''
    pushToGithub
    echo ''
    uploadToWebServer

    echo ''
    echo "${GREEN} ### Finished Deployer ### ${SET}"
}
main






