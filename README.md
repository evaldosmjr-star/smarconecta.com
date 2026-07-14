# Conecta Tecnologia

Site institucional da Conecta Tecnologia, preparado para hospedagem na Hostinger.

## Publicacao

Os arquivos prontos para envio ficam na pasta `hostinger/`.

O fluxo em `.github/workflows/deploy-hostinger.yml` publica automaticamente essa pasta por FTP quando houver push na branch `main`.

Configure estes segredos no repositorio do GitHub:

- `FTP_SERVER`
- `FTP_USERNAME`
- `FTP_PASSWORD`

Depois disso, cada atualizacao enviada para `main` sobe o site para a raiz da conta FTP usada pela Hostinger.
