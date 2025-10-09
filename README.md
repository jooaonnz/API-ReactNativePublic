 App de Conversão de Câmbio

Aplicativo mobile desenvolvido em **React Native** com **Expo**, que consome uma **API pública de câmbio** para exibir as taxas de conversão entre o **dólar americano (USD)** e outras moedas do mundo.

API Utilizada

[ExchangeRate API](https://www.exchangerate-api.com/)  
Motivo da escolha:  
- É **gratuita** para uso básico.  
- Possui uma **documentação simples e clara**.  
- Retorna dados de câmbio atualizados e completos.  
- Permite fácil integração via **requisições HTTP usando Axios**.

O projeto foi organizado seguindo um padrão de **arquitetura modular por features**, facilitando a manutenção e escalabilidade.

 Tecnologias e Dependências
 
| **expo** | Plataforma para rodar o app sem configuração nativa complexa |
| **axios** | Cliente HTTP para acessar a API pública |
| **react-navigation/native** | Navegação entre telas |
| **react-navigation/native-stack** | Sistema de pilha de navegação |
| **@react-native-async-storage/async-storage** | Armazenamento local (não obrigatório neste projeto, mas disponível) |
| **react-native-screens** e **safe-area-context** | Melhor performance e segurança visual em dispositivos modernos |

git clone https://github.com/jooaonnz/API-ReactNativePublic.git
cd AppApiPublica

Instalar dependêcias

npm install

Acesse https://www.exchangerate-api.com/
Crie uma conta gratuita.
Copie sua API KEY.
Cole no arquivo:

const API_KEY = "SUA_CHAVE_API";

npx expo start

Desafios Enfrentados
Organização da Estrutura do Projeto

 Manter o código organizado e escalável conforme o app crescesse.
A solução foi adotar a estrutura modular por features (cada parte do app isolada em pastas).


