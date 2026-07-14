# Conecta Tecnologia

Site institucional da Conecta Tecnologia, preparado para hospedagem na Hostinger.

## Publicacao

Os arquivos prontos para envio ficam na pasta `hostinger/`.

Para publicar pela Hostinger, envie o conteudo da pasta `hostinger/` para a pasta usada pelo dominio no FTP.

Se quiser ativar deploy automatico pelo GitHub Actions depois, configure estes segredos no repositorio:

- `FTP_SERVER`
- `FTP_USERNAME`
- `FTP_PASSWORD`

Com os segredos configurados, o workflow de deploy pode ser adicionado novamente sem expor senha no codigo.
