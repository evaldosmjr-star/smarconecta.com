# Deploy na Hostinger

Publique o conteúdo da pasta `dist/` na raiz pública real do domínio `smartconecta.com`.

Importante:

- Envie o conteúdo de `dist/`, não a pasta `dist` inteira.
- O arquivo `index.html` precisa ficar diretamente na raiz pública.
- Não crie uma pasta `public_html` dentro de outra `public_html`.
- Remova ou substitua arquivos padrão da Hostinger, como `default.php`.
- Depois do deploy, acesse `https://smartconecta.com/` e confirme que o título contém `Conecta Tecnologia`.

O workflow `.github/workflows/deploy.yml` gera `dist/` com `npm run build` e envia por FTP.

O único segredo necessário no GitHub é:

- `FTP_PASS`
