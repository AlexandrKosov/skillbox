export const indexTemplate = (content) => {
return `<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Reddit</title>
		<script src="/static/client.js" type="application/javascript"></script>
	</head>
	<body>
		<div id="react-root">${content}</div>
	</body>
</html>
	`
}
