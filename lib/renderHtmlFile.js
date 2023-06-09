const renderHtmlFile = (svg) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../assets/css/style.css" />

<title>SVG Display</title>

</head>
<body>
    <div class="card">
        <header class="header"><h1>Generated SVG Image:</h1></header>
        <div class="svg-image">${svg}</div>
        
    </div>
</body>
</html>
`;
}

module.exports = renderHtmlFile;