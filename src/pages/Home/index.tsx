import Header from '../../components/Header'
import ListaRestaurantes from '../../components/ListaRestaurantes'
import ModeloRestaurante from '../../models/Restaurante'

import prato1 from '../../assets/images/imagem.png'
import prato2 from '../../assets/images/image1.png'
import estrela from '../../assets/images/estrela.png'

const comercios: ModeloRestaurante[] = [
  {
    id: 1,
    infos: ['Destaque da semana', 'Japonesa'],
    image: prato1,
    title: 'Hioki Sushi',
    number: '4.9',
    star: estrela,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    // eslint-disable-next-line react/jsx-key
    button: 'Saiba mais'
  },
  {
    id: 2,
    infos: ['Italiana'],
    image: prato2,
    title: 'La Dolce Vita Trattoria',
    number: '4.6',
    star: estrela,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    button: 'Saiba mais'
  },
  {
    id: 3,
    infos: ['Italiana'],
    image: prato2,
    title: 'La Dolce Vita Trattoria',
    number: '4.6',
    star: estrela,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    button: 'Saiba mais'
  },
  {
    id: 4,
    infos: ['Italiana'],
    image: prato2,
    title: 'La Dolce Vita Trattoria',
    number: '4.6',
    star: estrela,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    button: 'Saiba mais'
  },
  {
    id: 5,
    infos: ['Italiana'],
    image: prato2,
    title: 'La Dolce Vita Trattoria',
    number: '4.6',
    star: estrela,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    button: 'Saiba mais'
  },
  {
    id: 6,
    infos: ['Italiana'],
    image: prato2,
    title: 'La Dolce Vita Trattoria',
    number: '4.6',
    star: estrela,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    button: 'Saiba mais'
  }
]

const Home = () => (
  <>
    <Header />
    <ListaRestaurantes comercios={comercios} />
  </>
)

export default Home
