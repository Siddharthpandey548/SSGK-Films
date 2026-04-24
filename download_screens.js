const fs = require('fs');
const https = require('https');
const path = require('path');

const screens = [
  { name: 'philosophy', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwYWRjZDFiZGMxNTQ5ODBhOGU5ZjdiNDZlN2UyNWU2EgsSBxDJ-ZHr4wwYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDM0ODE1MTkzNzM5ODA5Mjc4OQ&filename=&opi=89354086' },
  { name: 'awards', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzg4M2I5YzY0YzExOTRiYTg5ZjFjMWFlYzJlYTE4YTI5EgsSBxDJ-ZHr4wwYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDM0ODE1MTkzNzM5ODA5Mjc4OQ&filename=&opi=89354086' },
  { name: 'weddings', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzIxZGU5OWE3YjNlNDRhNjU5ZDc4Y2MyYTJiN2Y0YjhjEgsSBxDJ-ZHr4wwYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDM0ODE1MTkzNzM5ODA5Mjc4OQ&filename=&opi=89354086' },
  { name: 'pre-weddings', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2IwNjc3NjQ4NTJmYzRiNGE4YjdlNmIwNGQxNTdlYTMzEgsSBxDJ-ZHr4wwYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDM0ODE1MTkzNzM5ODA5Mjc4OQ&filename=&opi=89354086' },
  { name: 'faqs', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzQwYjZmMWUyZTE1YzQzY2ZiYmEzOTg1OTc0MWY0ZmY4EgsSBxDJ-ZHr4wwYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDM0ODE1MTkzNzM5ODA5Mjc4OQ&filename=&opi=89354086' },
  { name: 'process', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2I2ZjQxNmQwZTE3NTQyNmFhMzYwNTJiZjcyYzYyZmE0EgsSBxDJ-ZHr4wwYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDM0ODE1MTkzNzM5ODA5Mjc4OQ&filename=&opi=89354086' }
];

const outDir = path.join(__dirname, 'stitch_downloads');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

screens.forEach(screen => {
  const filePath = path.join(outDir, `${screen.name}.html`);
  const file = fs.createWriteStream(filePath);
  https.get(screen.url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${screen.name}`);
    });
  }).on('error', err => {
    fs.unlink(filePath);
    console.error(`Error downloading ${screen.name}: ${err.message}`);
  });
});
