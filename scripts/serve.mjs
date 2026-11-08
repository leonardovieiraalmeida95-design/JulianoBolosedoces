import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../out/', import.meta.url));
const prefix = '/JulianoBolosedoces';
const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript', '.css':'text/css', '.json':'application/json', '.txt':'text/plain', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.webp':'image/webp', '.svg':'image/svg+xml', '.woff2':'font/woff2', '.ttf':'font/ttf', '.xml':'application/xml; charset=utf-8', '.ico':'image/x-icon' };
createServer(async (req, res) => {
  try {
    if (!['GET','HEAD'].includes(req.method)) { res.writeHead(405).end(); return; }
    let pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (pathname === prefix || pathname.startsWith(prefix + '/')) pathname = pathname.slice(prefix.length);
    let target = path.resolve(root, '.' + (pathname || '/'));
    if (target !== path.resolve(root) && !target.startsWith(path.resolve(root) + path.sep)) { res.writeHead(403).end(); return; }
    if ((await stat(target)).isDirectory()) target = path.join(target, 'index.html');
    const body = await readFile(target);
    res.writeHead(200, { 'Content-Type': mime[path.extname(target)] || 'application/octet-stream' });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch {
    try { const page = await readFile(path.join(root, '404.html')); res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'}).end(req.method === 'HEAD' ? undefined : page); }
    catch { res.writeHead(404).end('Página não encontrada.'); }
  }
}).listen(Number(process.env.PORT || 3000), '127.0.0.1', () => console.log('Site disponível em http://localhost:' + (process.env.PORT || 3000)));
