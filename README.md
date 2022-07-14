# Cadasto de Carro

**RF**
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias.

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado por padrão com o status disponível.
\*O usuário responsável pelo cadastro deve ser um administrador.

# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome da carro.

**RN**
O usuário não precisa estar logado no sistema

# Cadastro de Especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro
Deve ser possível listar todas as especificações
Deve ser possível listar todos os carros

**RN**
Não deve ser possível cadastrar um especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um administrador.

# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro.

**RNF**
Utilizar o multer para upload dos arquivos.

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um administrador.

# Aluguel do carro

**RF**
Deve ser possível cadastrar um aluguel

**RN**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um em aberto para o mesmo usuário
Não deve ser possível cadastrar um novo aluguel caso já exista um em aberto para o mesmo carro
