const express = require('express');
const cors = require('cors');
const app = express();
var bcrypt = require('bcryptjs');

const Home = require('./models/Home');
const Mercado = require('./models/Mercado');
const Cadastrar = require('./models/Cadastrar.js');
const Produto = require('./models/Produto.js');
const db = require('./models/db');
const carrinho = require('./models/carrinho');
const { isNull } = require('util');

app.use(express.json());

app.use((req, res, next) => {
    // * qualquer url pode fazer requisição
    res.header("Access-Control-Allow-Origin", "*");
    // Métodos que  serão utilizados
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

/*app.get('/Mercado', async(req, res) => {
    return res.json({
        erro: false,
        datahome: {
            Mercado_one: "Celulares",
            Mercado_two: "Eletrodomésticos",
            Mercado_three: "Acessórios",
            Mercado_three: "Materias para animais",
            Mercado_four: "Limpeza",
            Mercado_five: "Casa e banho",
            Mercado_six: "Estudos",
            Mercado_seven: "Gameplay",
            Mercado_eight: "Automóveis"
        }
    });
});*/


// Obtém todos os dados de um produto pelo seu ID
app.get('/get-produto-detalhes', async (req, res) => {

    const { id } = req.query; // Obtém o ID dos parâmetros da URL

    if (!id) {
        return res.status(400).json({
            erro: true,
            mensagem: "ERRO: ID do produto não fornecido!"
        });
    }

    // Busca a linha com o ID especificado
    const prod = await Produto.findAll({attributes: ['nome', 'marca', 'quantidade', 'preco', 'descricao'], where: {id: id}});

    if (prod === null) {
        return res.status(400).json({
            erro: true,
            mensagem: "ERRO: Produto não encontrado!"
        })
    } else {
        return res.json(prod);
    }
});


// Obtém todos os produtos cadastrados para a página home
app.get('/get-produtos-home', async (req, res) => {

    await Produto.findAll({
        attributes: ['nome', 'marca', 'quantidade', 'preco', 'descricao']
    })
        .then((dataproduto) => {
            return res.json({
                erro: false,
                dataproduto
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhum produto encontrado para a página home!"
            });
        });
});

// Obtém 7 mercados/categorias cadastrados para a página home
app.get('/get-mercados-home', async (req, res) => {

    await Mercado.findAll({
        attributes: ['nome'],
        limit: 7
    })
        .then((datamercado) => {
            return res.json({
                erro: false,
                datamercado
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhum mercado encontrado para a página home!"
            });
        });
});

// Atualiza um novo produto na tabela carrinho
app.post("/add-carrinho", async (req, res) => {
    try {
        const { nome, quantidade, usuarioId } = req.body;

        // Busca o produto pelo nome na tabela Produto
        const produto = await Produto.findOne({
            attributes: ['id', 'preco'],
            where: { nome: nome }
        });

        // Verifica se o produto foi encontrado
        if (!produto) {
            return res.status(404).json({
                erro: true,
                mensagem: "Produto não encontrado!"
            });
        }

        // Prepara os dados para salvar na tabela Carrinho
        const carrinhoData = {
            prodId: produto.id, // Assumindo que a tabela Carrinho tem uma coluna id_produto como chave estrangeira
            userId: usuarioId,
            quantidade: quantidade, // Usa a quantidade passada no corpo do POST
            valor: produto.preco
        };

        // Salva os dados na tabela Carrinho
        await carrinho.create(carrinhoData);

        return res.json({
            erro: false,
            mensagem: "Dados do carrinho salvos com sucesso!"
        });
    } catch (error) {
        return res.status(400).json({
            erro: true,
            mensagem: "ERRO: Dados para o carrinho não foram salvos!",
            detalhe: error.message
        });
    }
});

// Cadastra um novo produto no banco de dados
app.post("/add-produto", async (req, res) => {

    await Produto.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Dados do produto cadastrados com sucesso!"
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "ERRO: Dados para o produto não cadastrados com sucesso!"
            });
        })
});

// Cadastra um novo mercado/categoria no banco de dados
app.post("/add-mercado", async (req, res) => {

    await Mercado.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Dados do mercado cadastrados com sucesso!"
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "ERRO: Dados para o mercado não cadastrados com sucesso!"
            });
        })
});

// Cadastra um novo produto no banco de dados
app.post("/add-produto", async (req, res) => {

    await Produto.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Dados do produto cadastrados com sucesso!"
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "ERRO: Dados para o produto não cadastrados com sucesso!"
            });
        })
});

// Cadastra um novo usuário no banco de dados
app.post("/cadastrar", async (req, res) => {

    var data = req.body;
    var usuario = await Cadastrar.findOne({ where: { email: data.email } });
    if (usuario === null) {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(data.senha, salt);
        data.senha = hash;
        await Cadastrar.create(data).
            then((cadastrar) => {
                return res.json({
                    erro: false,
                    mensagem: "Cadastro realizado com sucesso"
                });
            }).catch(() => {
                return res.status(400).json({
                    erro: true,
                    mensagem: "ERRO : Cadastro não foi realizado"
                });
            });
    }
    else {
        return res.status(400).json({
            erro: true,
            mensagem: "Usuário já cadastrado"
        });
    }
});

// Realiza o login de um usuário
app.post("/login", async (req, res) => {
    var data = req.body;
    var usuario = await Cadastrar.findOne({ where: { email: data.email } });
    if (usuario === null) {
        return res.status(400).json({
            erro: true,
            mensagem: "Usuário não cadastrado ou senha invalida"
        });
    }
    else {
        var senhaValida = bcrypt.compareSync(data.senha, usuario.senha);
        if (senhaValida) {
            return res.json({
                erro: false,
                mensagem: "Login realizado com sucesso",
                usuario: usuario.id
            });
        }
        else {
            return res.status(400).json({
                erro: true,
                mensagem: "Usuário não cadastrado ou senha invalida"
            });
        }
    }
});

app.get('/pesquisa-produto', async (req, res) => {

    const { nome } = req.query; // Obtém o Nome dos parâmetros da URL

    if (!nome) {
        return res.status(400).json({
            erro: true,
            mensagem: "ERRO: ID do produto não fornecido!"
        });
    }

    // Busca todos os produtos com o nome fornecido
    const prod = await Produto.findAll({attributes: ['nome', 'marca', 'quantidade', 'preco', 'descricao', 'vendidoPor'], where: {nome: nome}});

    if (prod === null) {
        return res.status(400).json({
            erro: true,
            mensagem: "ERRO: Produto não encontrado!"
        })
    } else {
        return res.json(prod);
    }


});

app.get('/carrinho', async (req, res) => {

    var data = req.body;
    const _carrinho = await carrinho.findAll({attributes: ['prodID', 'userID', 'quantidade', 'valor'], where:{userID: data.userID}});

    if (_carrinho.length == 0) {
        return res.status(400).json({
            erro: true,
            mensagem: "O carrinho esta vazio!"
        })
    } else {
        for (let i = 0; i < _carrinho.length; i++) {
            _prodList.push(await Produto.findOne({attributes: ['nome', 'marca', 'quantidade', 'preco', 'descricao', 'vendidoPor'], where:{id:_carrinho[i].get('prodID')} }));      
        }
        return res.json(_prodList);
    }
});


app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});