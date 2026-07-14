# Conecta Tecnologia

Site institucional da Conecta Tecnologia, desenvolvedora de sistemas, aplicativos, automações e soluções digitais para empresas.

## Publicacao

Gere a versão de produção com:

```bash
npm run build
```

Os arquivos prontos para envio ficam na pasta `dist/`.

O deploy automatico pelo GitHub Actions envia a pasta `dist/` por FTP para a Hostinger.

Configure este segredo no repositorio:

- `FTP_PASS`

O host e o usuario FTP ja estao definidos no workflow. A senha fica apenas nos segredos do GitHub.
