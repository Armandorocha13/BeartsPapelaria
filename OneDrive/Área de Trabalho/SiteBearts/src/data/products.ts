import boxPresente from '@/assets/products/box-presente.jpg';
import imgPolaroide from '@/assets/subcat-polaroide.png';
import imgPolaroidMini1 from '@/assets/products/PolaroidMini1.png';
import imgPolaroidMini2 from '@/assets/products/PolaroidMini2.png';
import imgPolaroidClassica1 from '@/assets/products/PolaroidClassica1.png';
import imgPolaroidClassica2 from '@/assets/products/PolaroidClassica2.png';
import imgPolaroidGrande1 from '@/assets/products/PolaroidGrande1.png';
import imgPolaroidGrande2 from '@/assets/products/PolaroidGrande2.png';
import imgA5 from '@/assets/subcat-a5.png';
import imgA4 from '@/assets/subcat-a4.png';
import imgSacolaGeneric from '@/assets/subcat-sacola-generic.png';
import imgCaixaPiramide1 from '@/assets/products/CaixaPiramide1.png';
import imgCaixaMilk1 from '@/assets/products/CaixaMilk1.png';
import imgCaixa10x9_1 from '@/assets/products/Caixa10x9_1.png';
import imgEtiquetaGeneric from '@/assets/subcat-etiqueta-generic.png';
import imgCaixa15x13x4 from '@/assets/caixa-15-13-4-2.png';
import imgCaixa15x13x4_1 from '@/assets/caixa-15-13-4-1.png';
import imgChaveiroRedondo from '@/assets/products/ChaveiroRedondo.png';
import imgChaveiroRedondo2 from '@/assets/products/ChaveiroRedondo2.png';
import imgChaveiroQuadrado1 from '@/assets/products/ChaveiroQuadrado1.jpg';
import imgChaveiroQuadrado2 from '@/assets/products/ChaveiroQuadrado2.jpg';
import imgCartaoGeneric from '@/assets/subcat-cartao-generic.png';
import imgCartaoVisita1 from '@/assets/products/CartaoVisita1.jpg';
import imgCartaoVisita2 from '@/assets/products/CartaoVisita2.png';
import imgCartaoAgradecimento from '@/assets/products/CartaoAgradecimento.png';
import imgCartaoFidelidade from '@/assets/products/CartaoFidelidade.jpg';
import imgSacola18x21_1 from '@/assets/sacola-18-21-1.png';
import imgSacola18x21_2 from '@/assets/sacola-18-21-2.png';
import imgSacola18x21_3 from '@/assets/sacola-18-21-3.png';
import imgSacola18x21_Kraft_1 from '@/assets/sacola-18-21-kraft-1.png';
import imgSacola18x21_Kraft_2 from '@/assets/sacola-18-21-kraft-2.png';
import imgSacola11x8_1 from '@/assets/sacola-11-8-1.png';
import imgSacola11x8_2 from '@/assets/sacola-11-8-2.png';
import imgSacola15x11_1 from '@/assets/sacola-15-11-1.png';
import imgSacola15x11_2 from '@/assets/sacola-15-11-2.png';
import imgCaixa9x4x2_1 from '@/assets/caixa-9-4-2-1.png';
import imgCaixa9x4x2_2 from '@/assets/caixa-9-4-2-2.png';
import imgEtiquetaCaixao from '@/assets/EtiquetaCaixao.png';
import imgEtiquetaQuadrada1 from '@/assets/products/EtiquetaQuadrada1.png';
import imgEtiquetaQuadrada2 from '@/assets/products/EtiquetaQuadrada2.png';
import imgAdesivoRedondo1 from '@/assets/AdesivoRedondo1.png';
import imgAdesivoRedondo2 from '@/assets/AdesivoRedondo2.png';
import imgAdesivoRedondo3 from '@/assets/AdesivoRedondo3.png';
import imgAdesivoTransparente from '@/assets/AdesivoRedondoTransparente.png';
import imgAdesivoQuadrado from '@/assets/products/AdesivoQuadrado.png';
import imgAdesivoQuadradoTransparente from '@/assets/products/AdesivoQuadradoTransparente.png';
import imgCartaoPresente from '@/assets/products/CartaoPresente.jpg';
import imgPolaroideDeMesa1 from '@/assets/products/PolaroideDeMesa1.png';
import imgFoto3x4_1 from '@/assets/products/Foto3x4_1.jpg';
import imgFoto3x4_2 from '@/assets/products/Foto3x4_2.jpg';
import imgFoto10x15_1 from '@/assets/products/Foto10x15_1.jpg';
import imgFoto10x15_2 from '@/assets/products/Foto10x15_2.jpg';
import imgFotoA5_1 from '@/assets/products/FotoA5_1.jpg';
import imgFotoA5_2 from '@/assets/products/FotoA5_2.jpg';
import imgFotoA4_1 from '@/assets/products/FotoA4_1.jpg';
import imgFotoA4_2 from '@/assets/products/FotoA4_2.jpg';
import imgLabelRound1 from '@/assets/products/label_round_1.png';
import imgLabelRound2 from '@/assets/products/label_round_2.png';
import imgLabelRound3 from '@/assets/products/label_round_3.png';
import imgLabelRect1 from '@/assets/products/label_rect_1.png';
import imgLabelRect2 from '@/assets/products/label_rect_2.png';
import imgLabelRect3 from '@/assets/products/label_rect_3.png';







export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory?: string;
  image: string;
  images?: string[];
  kraftImages?: string[];
  isNew?: boolean;


  isFeatured?: boolean;
  variations?: { name: string; price: number }[];
}

export const products: Product[] = [
  // Novos produtos Polaroid
  {
    id: 101,
    name: 'Polaroid Mini',
    description: 'Polaroid tamanho mini (5x7cm), ideal para carteira ou decoração delicada.',
    price: 1.25,
    category: 'fotos',
    subcategory: 'polaroide',
    image: imgPolaroidMini2,
    images: [imgPolaroidMini2, imgPolaroidMini1],
    isFeatured: true,
  },
  {
    id: 102,
    name: 'Polaroid Clássica',
    description: 'O formato clássico (7x10cm) que todo mundo ama, com espaço para legenda.',
    price: 3.00,
    category: 'fotos',
    subcategory: 'polaroide',
    image: imgPolaroidClassica2,
    images: [imgPolaroidClassica2, imgPolaroidClassica1],
  },
  {
    id: 103,
    name: 'Polaroid Grande',
    description: 'Polaroid em tamanho maior (10x12cm) para destacar seus melhores momentos.',
    price: 6.00,
    category: 'fotos',
    subcategory: 'polaroide',
    image: imgPolaroidGrande2,
    images: [imgPolaroidGrande2, imgPolaroidGrande1],
    isNew: true,
  },
  {
    id: 104,
    name: 'Polaroid de Mesa',
    description: 'Polaroid tamanho 13x11cm colada em um suporte de mesa feito de MDF.',
    price: 12.00,
    category: 'fotos',
    subcategory: 'polaroide',
    image: imgPolaroideDeMesa1,
    isNew: true,
  },

  {
    id: 2,
    name: 'Kit Fotos 3x4 Tradicional',
    description: 'Kit com 10 fotos 3x4 em papel fotográfico glossy de alta qualidade.',
    price: 5.00,
    category: 'fotos',
    subcategory: '3x4',
    image: imgFoto3x4_1,
    images: [imgFoto3x4_1, imgFoto3x4_2],
  },
  {
    id: 3,
    name: 'Revelação 10x15 Premium',
    description: 'Revelação de foto no tamanho clássico 10x15cm em papel fotográfico.',
    price: 8.00,
    category: 'fotos',
    subcategory: '10x15',
    image: imgFoto10x15_1,
    images: [imgFoto10x15_1, imgFoto10x15_2],
  },
  {
    id: 105,
    name: 'Revelação  Fotográfica A5',
    description: 'Revelação  de alta resolução em tamanho A5 (15x21cm).',
    price: 12.00,
    category: 'fotos',
    subcategory: 'a5',
    image: imgFotoA5_1,
    images: [imgFotoA5_1, imgFotoA5_2],
    isNew: true,
  },
  {
    id: 106,
    name: 'Revelação  Fotográfica A4',
    description: 'Ampliação fotográfica em tamanho A4 (21x30cm), perfeita para emoldurar.',
    price: 18.00,
    category: 'fotos',
    subcategory: 'a4',
    image: imgFotoA4_1,
    images: [imgFotoA4_1, imgFotoA4_2],
  },


  {
    id: 13,
    name: 'Sacola de Papel 18x21',
    description: 'Sacola resistente, ideal para presentes médios.',
    price: 8.50,
    category: 'sacolas',
    subcategory: '18x21',
    image: imgSacola18x21_1,
    images: [imgSacola18x21_1, imgSacola18x21_2, imgSacola18x21_3],
    kraftImages: [imgSacola18x21_Kraft_1, imgSacola18x21_Kraft_2],
    isFeatured: true,
  },


  {
    id: 14,
    name: 'Sacola de Papel 11x8',
    description: 'Mini sacola charmosa, ideal para joias e pequenos mimos.',
    price: 5.50,
    category: 'sacolas',
    subcategory: '11x8',
    image: imgSacola11x8_1,
    images: [imgSacola11x8_1, imgSacola11x8_2],
  },

  {
    id: 110,
    name: 'Sacola de Papel 15x11',
    description: 'Sacola de papel 15x11cm, tamanho ideal para itens médios e pequenos.',
    price: 7.00,
    category: 'sacolas',
    subcategory: '15x11',
    image: imgSacola15x11_1,
    images: [imgSacola15x11_1, imgSacola15x11_2],
  },

  {
    id: 111,
    name: 'Sacola de Papel 10x9',
    description: 'Sacola de papel 10x9cm, perfeita para lembranças e acessórios.',
    price: 6.00,
    category: 'sacolas',
    subcategory: '10x9',
    image: imgSacolaGeneric,
  },
  {
    id: 15,
    name: 'Caixa Pirâmide Personalizada',
    description: 'Caixa em formato de pirâmide decorada para festas e eventos.',
    price: 4.50,
    category: 'caixas',
    subcategory: 'piramide',
    image: imgCaixaPiramide1,
    isNew: true,
  },
  {
    id: 16,
    name: 'Caixa Milk',
    description: 'Caixa milk decoradas para festa e eventos',
    price: 4.50,
    category: 'caixas',
    subcategory: 'milk',
    image: imgCaixaMilk1,

  },
  {
    id: 112,
    name: 'Caixa 15x13x4',
    description: 'Caixa personalizada no tamanho 15x13x4cm, ideal para kits e presentes.',
    price: 7.00,
    category: 'caixas',
    subcategory: '15x13x4',
    image: imgCaixa15x13x4_1,
    images: [imgCaixa15x13x4_1, imgCaixa15x13x4],
    isNew: true,
  },
  {
    id: 113,
    name: 'Caixa 10x9',
    description: 'Caixa personalizada no tamanho 10x9cm, perfeita para pequenos presentes.',
    price: 6.00,
    category: 'caixas',
    subcategory: '10x9',
    image: imgCaixa10x9_1,
  },
  {
    id: 114,
    name: 'Caixa 9x4x2',
    description: 'Mini caixa personalizada no formato 9x4x2cm, ideal para doces e lembrancinhas.',
    price: 4.00,
    category: 'caixas',
    subcategory: '9x4x2',
    image: imgCaixa9x4x2_1, images: [imgCaixa9x4x2_1, imgCaixa9x4x2_2]
  },
  {
    id: 17,
    name: 'Etiqueta Redonda Personalizada',
    description: 'Kit com 10 unidades. Escolha o tamanho ideal para sua marca.',
    price: 6.50,
    category: 'etiquetas',
    subcategory: 'redonda',
    image: imgLabelRound1,
    images: [imgLabelRound1, imgLabelRound2, imgLabelRound3],
    isNew: true,
    variations: [
      { name: '2x2', price: 6.50 },
      { name: '3x3', price: 8.50 },
      { name: '4x4', price: 11.00 },
      { name: '5x5', price: 12.00 },
      { name: '6x6', price: 14.00 },
    ],
  },
  {
    id: 18,
    name: 'Etiqueta Quadrada Minimalista',
    description: 'Kit com 10 unidades. Escolha o tamanho ideal para sua embalagem.',
    price: 6.50,
    category: 'etiquetas',
    subcategory: 'quadrada',
    image: imgEtiquetaQuadrada1,
    images: [imgEtiquetaQuadrada1, imgEtiquetaQuadrada2],
    variations: [
      { name: '2x2', price: 6.50 },
      { name: '3x3', price: 8.50 },
      { name: '4x4', price: 11.00 },
      { name: '5x5', price: 12.00 },
      { name: '6x6', price: 14.00 },
    ],
  },
  {
    id: 115,
    name: 'Etiqueta Retangular Personalizada',
    description: 'Kit com 10 unidades. Perfeita para identificar e estilizar seus produtos',
    price: 15.00,
    category: 'etiquetas',
    subcategory: 'retangular',
    image: imgLabelRect1,
    images: [imgLabelRect1, imgLabelRect2, imgLabelRect3],
    variations: [
      { name: '4x10', price: 15.00 },
    ],
  },
  {
    id: 116,
    name: 'Etiqueta Caixão Personalizada',
    description: 'Kit com 10 unidades. Formato diferenciado para destacar sua marca.',
    price: 8.00,
    category: 'etiquetas',
    subcategory: 'caixao',
    image: imgEtiquetaCaixao,
    images: [imgEtiquetaCaixao],
    variations: [
      { name: '6x10', price: 8.00 },
    ],
  },
  {
    id: 19,
    name: 'Adesivo Redondo Personalizado',
    description: 'Kit com 10 unidades. Perfeito para personalizar seus mimos e embalagens.',
    price: 6.50,
    category: 'adesivos',
    subcategory: 'redondo',
    image: imgAdesivoRedondo2, images: [imgAdesivoRedondo1, imgAdesivoRedondo2,
      imgAdesivoTransparente, imgAdesivoRedondo3],
    isNew: true,
    variations: [
      { name: '2x2', price: 6.50 },
      { name: '3x3', price: 8.50 },
      { name: '4x4', price: 11.00 },
      { name: '5x5', price: 12.00 },
      { name: '6x6', price: 14.00 },
    ],
  },
  {
    id: 20,
    name: 'Adesivo Quadrado Personalizado',
    description: 'Kit com 10 unidades. Ideal para lacres e identificação de produtos.',
    price: 6.50,
    category: 'adesivos',
    subcategory: 'quadrado',
    image: imgAdesivoQuadrado,
    images: [imgAdesivoQuadrado, imgAdesivoQuadradoTransparente],
    variations: [
      { name: '2x2', price: 6.50 },
      { name: '3x3', price: 8.50 },
      { name: '4x4', price: 11.00 },
      { name: '5x5', price: 12.00 },
      { name: '6x6', price: 14.00 },
    ],
  },

  {
    id: 21,
    name: 'Chaveiro Quadrado 3x4',
    description: 'Chaveiro em acrílico resistente com foto personalizada frente e verso.',
    price: 8.50,
    category: 'chaveiros',
    subcategory: 'acrilico-quadrado',
    image: imgChaveiroQuadrado1,
    images: [imgChaveiroQuadrado1, imgChaveiroQuadrado2],
    isNew: true,
    isFeatured: true,
  },
  {
    id: 22,
    name: 'Chaveiro Redondo 3x4',
    description: 'Chaveiro redondo em acrílico cristal, perfeito para lembranças.',
    price: 10.00,
    category: 'chaveiros',
    subcategory: 'acrilico-redondo',
    image: imgChaveiroRedondo,
    images: [imgChaveiroRedondo, imgChaveiroRedondo2],

  },
  {
    id: 23,
    name: 'Cartão de Visita',
    description: 'A primeira impressão é a que fica. Cartão profissional para elevar a credibilidade',
    price: 35.00,
    category: 'cartoes',
    subcategory: 'visita',
    image: imgCartaoVisita1,
    images: [imgCartaoVisita1, imgCartaoVisita2],
    isNew: true,
    variations: [
      { name: '50 unidades', price: 35.00 },
    ],
  },
  {
    id: 24,
    name: 'Cartão de Agradecimento',
    description: 'O toque final perfeito para encantar e fidelizar seus clientes em cada entrega.',
    price: 15.00,
    category: 'cartoes',
    subcategory: 'agradecimento',
    image: imgCartaoAgradecimento,
    variations: [
      { name: '10 unidades', price: 15.00 },
    ],
  },
  {
    id: 118,
    name: 'Cartão Fidelidade',
    description: 'A melhor forma de recompensar e manter seus clientes sempre por perto.',
    price: 15.00,
    category: 'cartoes',
    subcategory: 'fidelidade',
    image: imgCartaoFidelidade,
    isNew: true,
    variations: [
      { name: '10 unidades', price: 15.00 },
    ],
  },
  {
    id: 119,
    name: 'Cartão Presente',
    description: 'Surpreenda quem você ama com um vale-presente personalizado e especial.',
    price: 15.00,
    category: 'cartoes',
    subcategory: 'presente',
    image: imgCartaoPresente,
    isNew: true,
    variations: [
      { name: '10 unidades', price: 15.00 },
    ],
  },

  {
    id: 121,
    name: 'Convite Digital Simples',
    description: 'Convite digital estático enviado em formato de imagem, ideal para WhatsApp.',
    price: 20.00,
    category: 'convites',
    subcategory: 'digital-simples',
    image: imgCartaoGeneric,
  },
  {
    id: 25,
    name: 'Convite Interativo',
    description: 'Convite digital com botões clicáveis para localização e confirmação de presença.',
    price: 35.00,
    category: 'convites',
    subcategory: 'interativo',
    image: imgCartaoGeneric,
    isNew: true,
    isFeatured: true,
  },
  {
    id: 122,
    name: 'Convite PDF Longo',
    description: 'Convite em formato PDF com rolagem, permitindo incluir mais informações e fotos.',
    price: 50.00,
    category: 'convites',
    subcategory: 'pdf-longo',
    image: imgCartaoGeneric,
  },
  {
    id: 26,
    name: 'Convite em Vídeo 1 Minuto',
    description: 'Vídeo personalizado de até 1 minuto para convidar seus amigos pelas redes sociais.',
    price: 65.00,
    category: 'convites',
    subcategory: 'video-1min',
    image: boxPresente,
  },
  {
    id: 123,
    name: 'Convite em Vídeo +1 Minuto',
    description: 'Vídeo detalhado com mais de 1 minuto.',
    price: 75.00,
    category: 'convites',
    subcategory: 'video-plus-1min',
    image: boxPresente,
  },
  {
    id: 125,
    name: 'Arte Personalizada',
    description: 'Criação de arte digital exclusiva para cartões, adesivos ou etiquetas.',
    price: 12.00,
    category: 'outros',
    subcategory: 'arte-personalizada',
    image: imgCartaoGeneric,
  },
  {
    id: 27,
    name: 'Criação de Logomarca Profissional',
    description: 'Desenvolvimento de logomarca exclusiva com entrega de arquivos em vetor.',
    price: 65.00,
    category: 'outros',
    subcategory: 'logomarca',
    image: boxPresente,

  },
  {
    id: 28,
    name: 'Projeto Identidade Visual Completa',
    description: 'Logomarca, paleta de cores, tipografia e guia de uso da marca.',
    price: 85.00,
    category: 'outros',
    subcategory: 'identidade-visual',
    image: boxPresente,
    isNew: true,
  },
  {
    id: 29,
    name: 'Convite Individual 5x5',
    description: 'Convite individual impresso, ideal para controle de entrada em eventos.',
    price: 12.00,
    category: 'convites',
    subcategory: 'impresso',
    image: boxPresente,
    isNew: true,
    variations: [
      { name: 'Kit com 10', price: 12.00 },
    ],
  },
  {
    id: 124,
    name: 'Convite A5 Personalizado',
    description: 'Convite impresso em tamanho A5 (15x21cm) com design exclusivo para o seu evento.',
    price: 60.00,
    category: 'convites',
    subcategory: 'a5',
    image: imgA5,
    isNew: true,
  },
  {
    id: 126,
    name: 'Calendário Personalizado',
    description: 'Calendário personalizado com suas fotos favoritas, ideal para mesa ou parede.',
    price: 25.00,
    category: 'outros',
    subcategory: 'calendario',
    image: imgCartaoGeneric,
    isNew: true,
  },
  {
    id: 127,
    name: 'Buquê de Borboletas',
    description: 'Lindo buquê artesanal com borboletas delicadas, perfeito para presentear.',
    price: 45.00,
    category: 'outros',
    subcategory: 'buque-borboletas',
    image: imgCartaoGeneric,
    isNew: true,
  },
  {
    id: 128,
    name: 'Ímãs de Geladeira',
    description: 'Kit com 6 ímãs personalizados com suas fotos, alta qualidade de impressão.',
    price: 18.00,
    category: 'outros',
    subcategory: 'imas-geladeira',
    image: imgCartaoGeneric,
    isNew: true,
  },
  {
    id: 129,
    name: 'Kit Festa Personalizado',
    description: 'Combo com diversos itens personalizados para tornar sua festa inesquecível.',
    price: 150.00,
    category: 'outros',
    subcategory: 'kit-festa',
    image: imgCartaoGeneric,
    isNew: true,
  },
];
