let currentDate = date now | format date "%Y.%m.%d"
open package.json | update version $currentDate | save -f package.json
