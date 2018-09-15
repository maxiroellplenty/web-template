# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
SET='\033[0m'

function copyAdditionalFiles()
{
    echo 'copy custom files';
    cp ./.htaccess ./dist
    echo 'done'
}

echo "${GREEN} ### Started Build Script ### ${SET}"

gulp build
copyAdditionalFiles

echo "${GREEN} ### Finished Build Script ### ${SET}"