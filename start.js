let targetUrl = "https://jaist.dl.sourceforge.net/project/pentaho/Pentaho 8.2/client-tools/pdi-ce-8.2.0.0-342.zip";
let download = require('./DownloadUtil')

download(targetUrl, './temp/')