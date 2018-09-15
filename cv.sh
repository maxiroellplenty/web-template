echo "enter file name";
read filename;

basePath=./views/$filename

mkdir $basePath;
html=$basePath/"$filename.html";
scss=$basePath/"$filename.scss";
js=$basePath/"$filename.js";

# Create HTML file
/bin/cat <<EOM >$html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"crossorigin="anonymous">
    <link rel="stylesheet" href="$filename.css">
    <title>$filename</title>
</head>
<body>
<h1>$filename</h1>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="./$filename.js"></script>
</html>
EOM
/bin/cat <<EOM >$scss
@import "../../variables";
EOM

touch $js;
echo "$html created";
echo "$scss created";
echo "$js created";



