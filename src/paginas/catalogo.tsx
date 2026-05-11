import { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/componentes/estrutura/estruturaPrincipal';
import { ProductCard } from '@/componentes/catalogo/cartaoProduto';
import { products } from '@/dados/produtos';
import { Input } from '@/componentes/interface/input';
import { Button } from '@/componentes/interface/button';

import imgPolaroide from '@/ativos/subcat-polaroide.png';
import imgPolaroidMini1 from '@/ativos/produtos/PolaroidMini1.png';
import imgPolaroidMini2 from '@/ativos/produtos/PolaroidMini2.png';
import imgPolaroidClassica1 from '@/ativos/produtos/PolaroidClassica1.png';
import imgPolaroidClassica2 from '@/ativos/produtos/PolaroidClassica2.png';
import imgPolaroidGrande1 from '@/ativos/produtos/PolaroidGrande1.png';
import imgPolaroidGrande2 from '@/ativos/produtos/PolaroidGrande2.png';
import img3x4 from '@/ativos/subcat-3x4.png';
import img10x15 from '@/ativos/subcat-10x15.png';
import imgA5 from '@/ativos/subcat-a5.png';
import imgA4 from '@/ativos/subcat-a4.png';
import imgFoto3x4_1 from '@/ativos/produtos/Foto3x4_1.jpg';
import imgFoto3x4_2 from '@/ativos/produtos/Foto3x4_2.jpg';
import imgFoto10x15_1 from '@/ativos/produtos/Foto10x15_1.jpg';
import imgFoto10x15_2 from '@/ativos/produtos/Foto10x15_2.jpg';
import imgFotoA5_1 from '@/ativos/produtos/FotoA5_1.jpg';
import imgFotoA5_2 from '@/ativos/produtos/FotoA5_2.jpg';
import imgFotoA4_1 from '@/ativos/produtos/FotoA4_1.jpg';
import imgFotoA4_2 from '@/ativos/produtos/FotoA4_2.jpg';

import imgCaixa15x13x4_1 from '@/ativos/caixa-15-13-4-1.png';
import imgCaixa15x13x4_2 from '@/ativos/caixa-15-13-4-2.png';
import imgCaixa9x4x2_1 from '@/ativos/caixa-9-4-2-1.png';
import imgCaixa9x4x2_2 from '@/ativos/caixa-9-4-2-2.png';

import imgEtiquetaCaixao from '@/ativos/EtiquetaCaixao.png';
import imgSacolaGeneric from '@/ativos/subcat-sacola-generic.png';
import imgSacolaVertical from '@/ativos/subcat-sacola-vertical.jpg';
import imgSacolaAlmofada from '@/ativos/subcat-sacola-almofada.jpg';
import imgSacolaHorizontal from '@/ativos/subcat-sacola-horizontal.jpg';
import imgCaixaPiramide from '@/ativos/subcat-caixa-piramide.png';
import imgCaixa10x9_1 from '@/ativos/produtos/Caixa10x9_1.png';
import imgCaixaMilk from '@/ativos/subcat-caixa-milk.jpg';
import imgCaixaGeneric from '@/ativos/subcat-caixa-generic.png';
import imgCaixaMaletinha from '@/ativos/subcat-caixa-maletinha.jpg';
import imgCaixaDocinho from '@/ativos/subcat-caixa-docinho.jpg';
import imgCaixaCanudo from '@/ativos/subcat-caixa-canudo.jpg';
import imgCaixaLanchinho from '@/ativos/subcat-caixa-lanchinho.jpg';
import imgCaixaPortaCaneta from '@/ativos/subcat-caixa-porta-caneta.jpg';
import imgCaixaPortaChaveiro from '@/ativos/subcat-caixa-porta-chaveiro.jpg';
import imgCaixaAlmofada from '@/ativos/subcat-caixa-almofada.jpg';
import imgCaixaCenario from '@/ativos/subcat-caixa-cenario.jpg';
import imgCaixaPortaSabonete from '@/ativos/subcat-caixa-porta-sabonete.jpg';
import imgCaixaCubo from '@/ativos/subcat-caixa-cubo.jpg';
import imgCaixaCachepo from '@/ativos/subcat-caixa-cachepo.jpg';
import imgCaixaCentroMesa from '@/ativos/subcat-caixa-centro-mesa.jpg';
import imgCaixaPortaBis from '@/ativos/subcat-caixa-porta-bis.jpg';
import imgCaixaMcDonalds from '@/ativos/subcat-caixa-mcdonalds.jpg';
import imgEtiquetaGeneric from '@/ativos/subcat-etiqueta-generic.png';
import imgEtiquetaQuadrada1 from '@/ativos/produtos/EtiquetaQuadrada1.png';
import imgAdesivoPersonalizado from '@/ativos/subcat-adesivo-personalizado.png';
import imgChaveiroRedondo from '@/ativos/produtos/ChaveiroRedondo.png';
import imgChaveiroRedondo2 from '@/ativos/produtos/ChaveiroRedondo2.png';
import imgChaveiroQuadrado1 from '@/ativos/produtos/ChaveiroQuadrado1.jpg';
import imgChaveiroQuadrado2 from '@/ativos/produtos/ChaveiroQuadrado2.jpg';
import imgCartaoGeneric from '@/ativos/subcat-cartao-generic.png';
import imgCartaoVisita1 from '@/ativos/produtos/CartaoVisita1.jpg';
import imgCartaoVisita2 from '@/ativos/produtos/CartaoVisita2.png';
import imgCartaoAgradecimento from '@/ativos/produtos/CartaoAgradecimento.png';
import imgAdesivoRedondo1 from '@/ativos/AdesivoRedondo1.png';
import imgAdesivoQuadrado from '@/ativos/produtos/AdesivoQuadrado.png';
import imgCartaoFidelidade from '@/ativos/produtos/CartaoFidelidade.jpg';
import imgCartaoPresente from '@/ativos/produtos/CartaoPresente.jpg';
import imgGeneratedCard1 from '@/ativos/produtos/generated_card_1.png';
import imgGeneratedCard2 from '@/ativos/produtos/generated_card_2.png';
import imgGeneratedCard3 from '@/ativos/produtos/generated_card_3.png';
import imgLabelRound1 from '@/ativos/produtos/label_round_1.png';
import imgLabelRound2 from '@/ativos/produtos/label_round_2.png';
import imgLabelRound3 from '@/ativos/produtos/label_round_3.png';
import imgLabelRect1 from '@/ativos/produtos/label_rect_1.png';
import imgLabelRect2 from '@/ativos/produtos/label_rect_2.png';
import imgLabelRect3 from '@/ativos/produtos/label_rect_3.png';
import imgIdentidadeVisualSamira from '@/ativos/produtos/IdentidadeVisualSamira.png';
import imgLogoDianaSantos from '@/ativos/produtos/LogoDianaSantos.png';
import imgLogoKatiaNunes from '@/ativos/produtos/LogoKatiaNunes.png';
import imgLogoSolangeAlves from '@/ativos/produtos/LogoSolangeAlves.png';
import imgCalendarioMini1 from '@/ativos/produtos/CalendarioMini1.jpg';
import imgCalendarioMini2 from '@/ativos/produtos/CalendarioMini2.png';
import imgCalendarioA4_1 from '@/ativos/produtos/CalendarioA4_1.jpg';
import imgCalendarioA4_2 from '@/ativos/produtos/CalendarioA4_2.png';
import imgBuqueBorboletas from '@/ativos/subcat-buque-borboletas.jpg';
import imgImaGeladeira1 from '@/ativos/produtos/ImaGeladeira1.jpg';
import imgImaGeladeira2 from '@/ativos/produtos/ImaGeladeira2.jpg';
import imgConviteInterativo1 from '@/ativos/produtos/ConviteInterativo1.jpg';
import imgConviteInterativo2 from '@/ativos/produtos/ConviteInterativo2.jpg';
import imgConviteInterativo3 from '@/ativos/produtos/ConviteInterativo3.jpg';
import imgCaixaPortaTubete from '@/ativos/subcat-caixa-porta-tubete.png';
import imgTagXuxinha from '@/ativos/subcat-tag-xuxinha.png';
import imgConviteVideo from '@/ativos/subcat-convite-video.png';
import imgConviteDigital from '@/ativos/subcat-convite-digital.png';
import imgConviteInterativoSub from '@/ativos/subcat-convite-interativo.jpg';
import imgConvitePdfLongo from '@/ativos/subcat-convite-pdf-longo.jpg';
import imgConviteIndividualSub from '@/ativos/subcat-convite-individual.jpg';
import imgCofre from '@/ativos/subcat-cofre.png';
import imgApliqueTubete from '@/ativos/subcat-aplique-tubete.png';
import imgKitCorporativo from '@/ativos/subcat-kit-corporativo.jpg';
import imgKitFesta from '@/ativos/subcat-kit-festa.jpg';
import imgPortaDocinho from '@/ativos/subcat-porta-docinho.jpg';
import imgLivreto from '@/ativos/subcat-livreto.jpg';
import imgCaderno from '@/ativos/subcat-caderno.jpg';
import imgLambeLambe from '@/ativos/subcat-lambe-lambe.jpg';
import imgCadernoA5 from '@/ativos/subcat-caderno-a5.jpg';


const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'dia-dos-namorados', name: 'Dia dos Namorados' },
  { id: 'casamento', name: 'Casamento' },
  { id: 'fotos', name: 'Fotos' },
  { id: 'sacolas', name: 'Sacolas' },
  { id: 'caixas', name: 'Caixas' },
  { id: 'etiquetas', name: 'Etiquetas' },
  { id: 'adesivos', name: 'Adesivos' },
  { id: 'chaveiros', name: 'Chaveiros' },
  { id: 'cartoes', name: 'Cartões' },
  { id: 'convites', name: 'Convites' },
  { id: 'outros', name: 'Outros' },
];

const subcategoriesList: Record<string, { id: string, name: string, image?: string, images?: string[] }[]> = {
  'dia-dos-namorados': [
    { id: 'all', name: 'Todos de Amor' },
    { id: 'buques', name: 'Buquês e Flores', image: '/images/buque.jpeg' },
    { id: 'polaroide-personalizada', name: 'Polaroide Personalizada', image: '/images/polaroide amor.jpeg' },
    { id: 'album-copa-love', name: 'Álbum da Copa Love', image: '/images/album da copa love.jpeg' },
    { id: 'livro-personalizado', name: 'Livro Personalizado', image: '/images/maarvel.jpeg' },
    { id: 'caneca-acrilico', name: 'Caneca Acrílico Personalizada', image: '/images/caneca.jpeg' },
    { id: 'quadros-personalizados', name: 'Quadros Personalizados', image: '/images/quadro.jpeg' },
    { id: '12-motivos', name: '12 Motivos para te Amar', image: '/images/12 motibos.jpeg' },
    { id: 'vinho-personalizado', name: 'Vinho Personalizado', image: '/images/vinho.jpeg' },
    { id: 'cartao-google', name: 'Cartão Google', image: '/images/google.jpeg' },
    { id: 'love-goods', name: 'Love Goods', image: '/images/love goods.jpeg' },
    { id: 'chaveiro-personalizado', name: 'Chaveiro Personalizado', image: '/images/chaveiro.jpeg' },
    { id: 'hotwheels-personalizado', name: 'Carrinho Hotwheels Personalizado', image: '/images/hotweels.jpeg' },
    { id: 'caixa-bombom', name: 'Caixa Bombom Personalizada', image: '/images/WhatsApp Image 2026-05-10 at 19.00.08.jpeg' },
    { id: 'caixa-cascata', name: 'Caixa Cascata', image: '/images/cascata.jpeg' },
    { id: 'caixa-explosao', name: 'Caixa Explosão', image: '/images/explosao.jpeg' },
    { id: 'caixa-cenario', name: 'Caixa Cenário', image: '/images/cenario.jpeg' },
    { id: 'vela-personalizada', name: 'Vela Personalizada', image: '/images/vela.jpeg' },
    { id: 'jornal-personalizado', name: 'Jornal Personalizado', image: '/images/jornal.jpeg' },
    { id: 'certidao-namoro', name: 'Certidão de Namoro', image: '/images/certidao.jpeg' },
    { id: 'caixa-envelope', name: 'Caixa Envelope', image: '/images/caixa envelope.jpeg' },
    { id: 'kit-cinema', name: 'Kit Cinema', image: '/images/kit cinema.jpeg' },
    { id: 'uno-amor', name: 'Uno do Amor', image: '/images/uno do amor.jpeg' },
    { id: 'cartao-popup', name: 'Cartão Pop Up', image: '/images/popup.jpeg' },
    { id: 'tickets', name: 'Tickets', image: '/images/ticket.jpeg' },
    { id: '10-musicas-nos', name: '10 Músicas sobre Nós', image: '/images/10musicas.jpeg' },
  ],
  casamento: [
    { id: 'all', name: 'Tudo para Casamento' },
    { id: 'manual-padrinhos', name: 'Manual dos Padrinhos', image: '/images/manual.jpg' },
    { id: 'convite-tradicional', name: 'Convite Tradicional', image: '/images/conv casam.jpeg' },
    { id: 'convite-individual', name: 'Convite Individual', image: imgConviteIndividualSub },
    { id: 'lagrimas-alegria', name: 'Lágrimas de Alegria', image: '/images/lagrimas.jpeg' },
    { id: 'convite-padrinhos', name: 'Convite Padrinhos', image: '/images/caixa padr.jpeg' },
    { id: 'convite-altar', name: 'Convite Altar', image: '/images/convite altar.jpeg' },
    { id: 'tag-bem-casado', name: 'Tag Bem Casado', image: '/images/bem casado.jpeg' },
    { id: 'vale-conforto', name: 'Vale Conforto', image: '/images/vale conforto.jpeg' },
    { id: 'save-the-date', name: 'Save the Date', image: '/images/save the date.jpeg' },
    { id: 'site-dos-noivos', name: 'Site dos Noivos', image: imgConviteDigital },
    { id: 'monograma', name: 'Monograma', image: imgLogoDianaSantos },
    { id: 'identidade-visual', name: 'Identidade Visual', image: imgIdentidadeVisualSamira },
    { id: 'convite-digital', name: 'Convite Digital', image: '/images/convite digital.jpeg' },
    { id: 'placa-pix', name: 'Placa Pix', image: '/images/placa pix.jpeg' },
    { id: 'placa-reservado', name: 'Placa Reservado', image: imgA4 },
    { id: 'placa-numerada', name: 'Placa Numerada', image: imgA5 },
    { id: 'menu', name: 'Menu', image: imgFotoA5_1 },
    { id: 'caderno-de-votos', name: 'Caderno de Votos', image: imgCaderno },
  ],
  fotos: [
    { id: 'all', name: 'Todas as Fotos' },
    { id: 'polaroide', name: 'Polaroide', image: imgPolaroidClassica2, images: [imgPolaroidClassica2, imgPolaroidClassica1, imgPolaroidGrande2, imgPolaroidGrande1, imgPolaroidMini2, imgPolaroidMini1] },
    { id: '3x4', name: 'Fotos 3x4', image: imgFoto3x4_1, images: [imgFoto3x4_1, imgFoto3x4_2] },
    { id: '10x15', name: 'Fotos 10x15', image: imgFoto10x15_1, images: [imgFoto10x15_1, imgFoto10x15_2] },
    { id: 'a5', name: 'Fotos A5', image: imgFotoA5_1, images: [imgFotoA5_1, imgFotoA5_2] },
    { id: 'a4', name: 'Fotos A4', image: imgFotoA4_1, images: [imgFotoA4_1, imgFotoA4_2] },
  ],
  sacolas: [
    { id: 'all', name: 'Todas as Sacolas' },
    { id: 'sacola-vertical', name: 'Sacola personalizada vertical', image: imgSacolaVertical },
    { id: 'sacola-horizontal', name: 'Sacola personalizada horizontal', image: imgSacolaHorizontal },
    { id: 'sacola-almofada', name: 'Sacola almofada', image: imgSacolaAlmofada },
  ],



  caixas: [
    { id: 'all', name: 'Todas as Caixas' },
    { id: 'piramide', name: 'Pirâmide', image: imgCaixaPiramide },
    { id: 'milk', name: 'Milk', image: imgCaixaMilk },
    { id: 'lanchinho', name: 'Lanchinho', image: imgCaixaLanchinho },
    { id: 'caixa-canudo', name: 'Caixa canudo', image: imgCaixaCanudo },
    { id: 'maletinha', name: 'Maletinha', image: imgCaixaMaletinha },
    { id: 'almofada', name: 'Almofada', image: imgCaixaAlmofada },
    { id: 'caixa-cenario', name: 'Caixa cenário', image: imgCaixaCenario },
    { id: 'caixa-docinho', name: 'Caixa para docinho', image: imgCaixaDocinho },
    { id: 'porta-caneta', name: 'Porta caneta', image: imgCaixaPortaCaneta },
    { id: 'porta-chaveiro', name: 'Porta chaveiro', image: imgCaixaPortaChaveiro },
    { id: 'porta-sabonete', name: 'Porta sabonete', image: imgCaixaPortaSabonete },
    { id: 'cubo', name: 'Cubo', image: imgCaixaCubo },
    { id: 'cachepo', name: 'Cachepô', image: imgCaixaCachepo },
    { id: 'centro-mesa', name: 'Centro de mesa', image: imgCaixaCentroMesa },
    { id: 'porta-bis', name: 'Porta Bis', image: imgCaixaPortaBis },
    { id: 'mc-donalds', name: 'Mc donalds', image: imgCaixaMcDonalds },
    { id: 'porta-tubete', name: 'Porta tubete', image: imgCaixaPortaTubete },
  ],

  etiquetas: [
    { id: 'all', name: 'Todas as Etiquetas' },
    { id: 'redonda', name: 'Etiqueta Redonda', image: imgLabelRound1, images: [imgLabelRound1, imgLabelRound2, imgLabelRound3] },
    { id: 'quadrada', name: 'Etiqueta Quadrada', image: imgEtiquetaQuadrada1 },
    { id: 'retangular', name: 'Etiqueta Retangular', image: imgLabelRect1, images: [imgLabelRect1, imgLabelRect2, imgLabelRect3] },
    { id: 'caixao', name: 'Etiqueta Caixão', image: imgEtiquetaCaixao },
    { id: 'tag-xuxinha', name: 'Tag para Xuxinha', image: imgTagXuxinha },
  ],
  adesivos: [
    { id: 'all', name: 'Todos os Adesivos' },
    { id: 'redondo', name: 'Adesivos Redondos', image: imgAdesivoRedondo1 },
    { id: 'quadrado', name: 'Adesivos Quadrados', image: imgAdesivoQuadrado },
    { id: 'personalizado', name: 'Adesivos Personalizados', image: imgAdesivoPersonalizado },
  ],
  chaveiros: [
    { id: 'all', name: 'Todos os Chaveiros' },
    { id: 'acrilico-quadrado', name: 'Chaveiro 3x4 acrílico quadrado', image: imgChaveiroQuadrado1, images: [imgChaveiroQuadrado1, imgChaveiroQuadrado2] },
    { id: 'acrilico-redondo', name: 'Chaveiro 3x4 acrílico redondo', image: imgChaveiroRedondo, images: [imgChaveiroRedondo, imgChaveiroRedondo2] },
  ],
  cartoes: [
    { id: 'all', name: 'Todos os Cartões' },
    { id: 'visita', name: 'Cartão de Visita', image: imgCartaoGeneric, images: [imgCartaoVisita1, imgCartaoVisita2] },
    { id: 'agradecimento', name: 'Cartão de Agradecimento', image: imgCartaoAgradecimento },
    { id: 'personalizado', name: 'Cartão Personalizado', image: imgGeneratedCard1, images: [imgGeneratedCard1, imgGeneratedCard2, imgGeneratedCard3] },
    { id: 'fidelidade', name: 'Cartão Fidelidade', image: imgCartaoFidelidade },
    { id: 'presente', name: 'Cartão Presente', image: imgCartaoPresente },

  ],
  convites: [
    { id: 'all', name: 'Todos os Convites' },
    { id: 'digital-simples', name: 'Convite digital simples', image: imgConviteDigital },
    { id: 'interativo', name: 'Convite interativo', image: imgConviteInterativoSub, images: [imgConviteInterativoSub, imgConviteInterativo1, imgConviteInterativo2, imgConviteInterativo3] },
    { id: 'pdf-longo', name: 'Convite PDF longo', image: imgConvitePdfLongo },
    { id: 'video-1min', name: 'Convite em vídeo 1 min', image: imgConviteVideo },
    { id: 'video-plus-1min', name: 'Convite em vídeo +1 min', image: imgConviteVideo },
    { id: 'impresso', name: 'Convite individual 5x5', image: imgConviteIndividualSub },
    { id: 'a5', name: 'Convite A5', image: imgA5 },
  ],
  outros: [
    { id: 'all', name: 'Outros Serviços' },
    { id: 'arte-personalizada', name: 'Arte Personalizada', image: imgCartaoGeneric },
    { id: 'identidade-visual', name: 'Identidade Visual', image: imgIdentidadeVisualSamira },
    { id: 'logomarca', name: 'Logomarca', image: imgLogoDianaSantos, images: [imgLogoDianaSantos, imgLogoSolangeAlves, imgLogoKatiaNunes] },
    { id: 'buque-borboletas', name: 'Buquê de Borboletas', image: imgBuqueBorboletas },
    { id: 'calendario', name: 'Calendário', image: imgCalendarioMini1, images: [imgCalendarioMini1, imgCalendarioMini2] },
    { id: 'imas-geladeira', name: 'Ímãs de Geladeira', image: imgImaGeladeira1, images: [imgImaGeladeira1, imgImaGeladeira2] },
    { id: 'kit-festa', name: 'Kit só um bolinho', image: imgKitFesta },
    { id: 'cofre', name: 'Cofre personalizado', image: imgCofre },
    { id: 'aplique-tubete', name: 'Aplique para tubete', image: imgApliqueTubete },
    { id: 'kit-corporativo', name: 'Kit corporativo', image: imgKitCorporativo },
    { id: 'porta-docinho', name: 'Porta docinhos', image: imgPortaDocinho },
    { id: 'lambe-lambe', name: 'Painel lambe lambe', image: imgLambeLambe },
    { id: 'caderno', name: 'Caderno personalizado', image: imgCaderno },
    { id: 'livreto', name: 'Livreto personalizado', image: imgLivreto },
  ]
};

const SubcategoryImage = ({ sub }: { sub: { id: string, image?: string, images?: string[], name: string } }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (sub.images && sub.images.length > 1) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % sub.images!.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [sub.images]);

  const displayImage = (sub.images && sub.images.length > 0) ? sub.images[index] : sub.image;

  // Reduced zoom for specific subcategories requested by user
  const lowZoomCategories = ['piramide', 'milk', 'lanchinho', 'caixa-docinho', 'porta-caneta', 'porta-sabonete', 'cubo', 'cachepo', 'centro-mesa', 'porta-bis', 'mc-donalds', 'porta-tubete'];
  const isLowZoom = lowZoomCategories.includes(sub.id);

  return (
    <img
      src={displayImage}
      alt={sub.name}
      className={`w-full h-full object-cover transition-transform duration-700 ${isLowZoom ? 'scale-100 group-hover:scale-[1.2]' : 'scale-[1.1] group-hover:scale-[1.5]'}`}
    />
  );
};

const Catalogo = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('categoria');
  const subcategoryParam = searchParams.get('subcategoria');

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [selectedSubcategory, setSelectedSubcategory] = useState(subcategoryParam || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sync state with URL parameter
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('all');
    }

    if (subcategoryParam) {
      setSelectedSubcategory(subcategoryParam);
    } else {
      setSelectedSubcategory('all');
    }
  }, [categoryParam, subcategoryParam]);

  const handleCategoryChange = (id: string) => {
    setSelectedCategory(id);
    setSelectedSubcategory('all');

    const newParams = new URLSearchParams(searchParams);
    if (id === 'all') {
      newParams.delete('categoria');
    } else {
      newParams.set('categoria', id);
    }
    newParams.delete('subcategoria');
    setSearchParams(newParams);
  };

  const handleSubcategoryChange = (id: string) => {
    setSelectedSubcategory(id);
    const newParams = new URLSearchParams(searchParams);
    if (id === 'all') {
      newParams.delete('subcategoria');
    } else {
      newParams.set('subcategoria', id);
    }
    setSearchParams(newParams);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === 'all' || product.subcategory === selectedSubcategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-hero py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Nosso</span> <span style={{ color: '#e11d48' }}>Catálogo</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore nossa seleção especial de materiais de papelaria
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-2xl"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleCategoryChange(category.id)}
                  className="rounded-2xl whitespace-nowrap"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Subcategory Filters */}
          {selectedCategory && subcategoriesList[selectedCategory] && (
            <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-border/50">
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap mr-2">Subcategorias:</span>
              {subcategoriesList[selectedCategory].map((sub) => (
                <Button
                  key={sub.id}
                  variant={selectedSubcategory === sub.id ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => handleSubcategoryChange(sub.id)}
                  className="rounded-full text-xs h-8 px-4"
                >
                  {sub.name}
                </Button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Subcategory Cards Grid (Generic "Portal" for categories with subcategories) */}
          {selectedCategory && subcategoriesList[selectedCategory] && selectedSubcategory === 'all' && (
            <div className="mb-16">
              <h2 className="font-heading text-2xl font-bold mb-8 text-center uppercase tracking-wider text-muted-foreground/60">
                {selectedCategory === 'dia-dos-namorados' ? 'Escolha o presente do seu ' : 'Escolha o modelo de '}
                <span className="text-primary">{categories.find(c => c.id === selectedCategory)?.name}</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {subcategoriesList[selectedCategory].filter(sub => sub.id !== 'all').map((sub, index) => (
                  <button
                    key={sub.id}
                    onClick={() => handleSubcategoryChange(sub.id)}
                    className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 border border-border/50 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-square overflow-hidden bg-accent/20">
                      <SubcategoryImage sub={sub} />
                    </div>

                    <div className="p-4 text-center bg-gradient-to-b from-transparent to-accent/5">
                      <h3 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors text-sm">
                        {sub.name}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* WhatsApp Contact for Personalized Items */}
          {(((selectedCategory === 'adesivos' || selectedCategory === 'cartoes') && selectedSubcategory === 'personalizado') || (selectedCategory === 'outros' && selectedSubcategory === 'arte-personalizada')) && (
            <div className="mb-16 animate-fade-in">
              <div className="bg-card rounded-[2rem] p-8 md:p-12 shadow-card border border-border flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-[#25D366]/10 rounded-3xl flex items-center justify-center flex-shrink-0 animate-bounce-slow">
                  <svg className="w-12 h-12 md:w-16 md:h-16 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-heading text-2xl font-bold mb-4">
                    {selectedSubcategory === 'arte-personalizada' ? 'Artes Personalizadas' : (selectedCategory === 'adesivos' ? 'Adesivos' : 'Cartões')} sob Medida
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                    {selectedSubcategory === 'arte-personalizada'
                      ? 'Deseja uma arte digital exclusiva para o seu projeto? Entre em contato conosco via WhatsApp para conversarmos sobre a sua ideia!'
                      : `Deseja um ${selectedCategory === 'adesivos' ? 'adesivo' : 'cartão'} com formato ou tamanho específico? Entre em contato conosco via WhatsApp para conversarmos sobre o seu projeto!`}
                  </p>
                  <Button
                    onClick={() => {
                      const phoneNumber = '5521971690013';
                      const messageText = selectedSubcategory === 'arte-personalizada'
                        ? 'Olá, gostaria de fazer um orçamento para uma arte personalizada.'
                        : `Olá, gostaria de fazer um orçamento de ${selectedCategory === 'adesivos' ? 'adesivos' : 'cartões'} personalizados. Quais modelos e tamanhos tem disponíveis?`;
                      const message = encodeURIComponent(messageText);
                      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                    }}
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-2xl px-8 h-14 text-lg font-bold shadow-soft flex items-center gap-3 transition-all hover:scale-105"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Falar via WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Products Grid (Only if not showing category "portal") */}
          {!(selectedCategory && subcategoriesList[selectedCategory] && selectedSubcategory === 'all') && (
            filteredProducts.length > 0 ? (
              <>
                <p className="text-muted-foreground mb-6">
                  {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product, index) => (
                    <div key={product.id} style={{ animationDelay: `${index * 0.05}s` }}>
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  Nenhum produto encontrado para "{searchQuery}"
                </p>
                <Button
                  variant="outline"
                  onClick={() => { setSearchQuery(''); handleCategoryChange('all'); }}
                  className="mt-4 rounded-2xl"
                >
                  Limpar filtros
                </Button>
              </div>
            )
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Catalogo;
