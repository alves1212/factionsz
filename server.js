require('dotenv').config();
const express = require('express');
const multer = require('multer');
const fetch = require('node-fetch');
const FormData = require('form-data');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer();
const VT_API = 'https://www.virustotal.com/api/v3';
const API_KEY = process.env.VT_API_KEY;

if (!API_KEY) {
  console.error('Erro: defina VT_API_KEY no arquivo .env');
  process.exit(1);
}

// Upload file to VirusTotal
app.post('/vt/scan-file', upload.single('file'), async (req, res) => {
  try {
    const form = new FormData();
    form.append('file', req.file.buffer, { filename: req.file.originalname });
    const vt = await fetch(`${VT_API}/files`, {
      method: 'POST',
      headers: { 'x-apikey': API_KEY },
      body: form
    });
    const data = await vt.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao enviar arquivo ao VirusTotal' });
  }
});

// Scan URL
app.post('/vt/scan-url', async (req, res) => {
  try {
    const { url } = req.body;
    const form = new URLSearchParams();
    form.append('url', url);
    const vt = await fetch(`${VT_API}/urls`, {
      method: 'POST',
      headers: { 'x-apikey': API_KEY, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: form.toString()
    });
    const data = await vt.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao enviar URL ao VirusTotal' });
  }
});

// Get analysis by id
app.get('/vt/analysis/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const vt = await fetch(`${VT_API}/analyses/${id}`, {
      headers: { 'x-apikey': API_KEY }
    });
    const data = await vt.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar análise' });
  }
});

// Get file report by hash (sha256)
app.get('/vt/file/:hash', async (req, res) => {
  try {
    const hash = req.params.hash;
    const vt = await fetch(`${VT_API}/files/${hash}`, {
      headers: { 'x-apikey': API_KEY }
    });
    const data = await vt.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar relatório do arquivo' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor Proxy VirusTotal rodando na porta ${PORT}`));
