# Conecta Tecnologia

Site institucional da Conecta Tecnologia, preparado para hospedagem na Hostinger.

## Publicacao

Os arquivos prontos para envio ficam na pasta `hostinger/`.

Para publicar pela Hostinger, envie o conteudo da pasta `hostinger/` para a pasta usada pelo dominio no FTP.

O deploy automatico pelo GitHub Actions envia a pasta `dist/` por FTP para a Hostinger.

Configure este segredo no repositorio:

- `FTP_PASS`

O host e o usuario FTP ja estao definidos no workflow. A senha fica apenas nos segredos do GitHub.
