import cadernoPontilhado from '@/assets/products/caderno-pontilhado.jpg';
import canetasGel from '@/assets/products/canetas-gel.jpg';
import adesivosFlorais from '@/assets/products/adesivos-florais.jpg';
import washiTape from '@/assets/products/washi-tape.jpg';
import brushPens from '@/assets/products/brush-pens.jpg';
import boxPresente from '@/assets/products/box-presente.jpg';
import aquarela from '@/assets/products/aquarela.jpg';
import planner from '@/assets/products/planner.jpg';
import imgPolaroide from '@/assets/subcat-polaroide.png';
import imgA5 from '@/assets/subcat-a5.png';
import imgA4 from '@/assets/subcat-a4.png';
import imgSacola18x21 from '@/assets/subcat-sacola-18-21.png';
import imgSacola11x8 from '@/assets/subcat-sacola-11-8.png';
import imgSacolaGeneric from '@/assets/subcat-sacola-generic.png';
import imgCaixaPiramide from '@/assets/subcat-caixa-piramide.png';
import imgCaixaMilk from '@/assets/subcat-caixa-milk.png';
import imgCaixaGeneric from '@/assets/subcat-caixa-generic.png';
import imgEtiquetaGeneric from '@/assets/subcat-etiqueta-generic.png';

import imgChaveiroRedondo from '@/assets/products/ChaveiroRedondo.png';
import imgChaveiroRedondo2 from '@/assets/products/ChaveiroRedondo2.png';
import imgChaveiroQuadrado from '@/assets/subcat-chaveiro-quadrado.png';
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
import imgEtiquetaQuadrada from '@/assets/EtiquetaQuadrada.jpg';
import imgAdesivoRedondo1 from '@/assets/AdesivoRedondo1.png';
import imgAdesivoRedondo2 from '@/assets/AdesivoRedondo2.png';
import imgAdesivoRedondo3 from '@/assets/AdesivoRedondo3.png';
import imgAdesivoTransparente from '@/assets/AdesivoRedondoTransparente.png';
import imgAdesivoQuadrado from '@/assets/products/AdesivoQuadrado.png';
import imgAdesivoQuadradoTransparente from '@/assets/products/AdesivoQuadradoTransparente.png';
import imgCartaoPresente from '@/assets/products/CartaoPresente.jpg';







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
    image: imgPolaroide,
    isFeatured: true,
  },
  {
    id: 102,
    name: 'Polaroid Clássica',
    description: 'O formato clássico (7x10cm) que todo mundo ama, com espaço para legenda.',
    price: 3.00,
    category: 'fotos',
    subcategory: 'polaroide',
    image: imgPolaroide,
    isFeatured: true,
  },
  {
    id: 103,
    name: 'Polaroid Grande',
    description: 'Polaroid em tamanho maior (10x12cm) para destacar seus melhores momentos.',
    price: 6.00,
    category: 'fotos',
    subcategory: 'polaroide',
    image: imgPolaroide,
    isNew: true,
  },
  {
    id: 104,
    name: 'Polaroid de Mesa',
    description: 'Polaroid tamanho 13x11cm colada em um suporte de mesa feito de MDF.',
    price: 12.00,
    category: 'fotos',
    subcategory: 'polaroide',
    image: imgPolaroide,
    isNew: true,
  },

  {
    id: 2,
    name: 'Kit Fotos 3x4 Tradicional',
    description: 'Kit com 10 fotos 3x4 em papel fotográfico glossy de alta qualidade.',
    price: 5.00,
    category: 'fotos',
    subcategory: '3x4',
    image: canetasGel,
  },
  {
    id: 3,
    name: 'Revelação 10x15 Premium',
    description: 'Revelação de foto no tamanho clássico 10x15cm em papel fotográfico.',
    price: 8.00,
    category: 'fotos',
    subcategory: '10x15',
    image: canetasGel,
  },
  {
    id: 105,
    name: 'Revelação  Fotográfica A5',
    description: 'Revelação  de alta resolução em tamanho A5 (15x21cm).',
    price: 12.00,
    category: 'fotos',
    subcategory: 'a5',
    image: imgA5,
    isNew: true,
  },
  {
    id: 106,
    name: 'Revelação  Fotográfica A4',
    description: 'Ampliação fotográfica em tamanho A4 (21x30cm), perfeita para emoldurar.',
    price: 18.00,
    category: 'fotos',
    subcategory: 'a4',
    image: imgA4,
    isFeatured: true,
  },

  {
    id: 4,
    name: 'Washi Tape Lilás Sakura',
    description: 'Fita decorativa 15mm x 10m com estampa de flores de cerejeira.',
    price: 12.90,
    category: 'craft',
    image: washiTape,
  },
  {
    id: 5,
    name: 'Marcadores Brush Pen',
    description: 'Kit com 6 brush pens para lettering e ilustração.',
    price: 54.90,
    category: 'canetas',
    image: brushPens,
  },
  {
    id: 6,
    name: 'Caderno de Receitas',
    description: 'Caderno especial para receitas com divisórias e fichas.',
    price: 62.00,
    category: 'cadernos',
    image: cadernoPontilhado,
  },
  {
    id: 7,
    name: 'Kit Aquarela Iniciante',
    description: 'Estojo com 24 cores, pincel e bloco de papel aquarela.',
    price: 89.90,
    category: 'arte',
    image: aquarela,
    isNew: true,
  },
  {
    id: 8,
    name: 'Box Presente Journaling',
    description: 'Caixa especial com caderno, canetas, adesivos e washi tape.',
    price: 129.90,
    category: 'presentes',
    image: boxPresente,
  },
  {
    id: 9,
    name: 'Planner Semanal 2024',
    description: 'Planner A5 com visão semanal, metas e acompanhamento de hábitos.',
    price: 78.00,
    category: 'cadernos',
    image: planner,
    isNew: true,
  },
  {
    id: 10,
    name: 'Tesoura Decorativa',
    description: 'Tesoura com corte ondulado para artesanato e scrapbook.',
    price: 24.90,
    category: 'craft',
    image: washiTape,
  },
  {
    id: 11,
    name: 'Lápis de Cor Profissional',
    description: 'Estojo com 36 lápis de cor com pigmentação intensa.',
    price: 68.00,
    category: 'arte',
    image: aquarela,
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
    image: imgCaixaPiramide,
    isNew: true,
  },
  {
    id: 16,
    name: 'Caixa Milk',
    description: 'Caixa milk decoradas para festa e eventos',
    price: 4.50,
    category: 'caixas',
    subcategory: 'milk',
    image: imgCaixaMilk,
    isFeatured: true,
  },
  {
    id: 112,
    name: 'Caixa 15x13x4',
    description: 'Caixa personalizada no tamanho 15x13x4cm, ideal para kits e presentes.',
    price: 7.00,
    category: 'caixas',
    subcategory: '15x13x4',
    image: imgCaixaGeneric,
    isNew: true,
  },
  {
    id: 113,
    name: 'Caixa 10x9',
    description: 'Caixa personalizada no tamanho 10x9cm, perfeita para pequenos presentes.',
    price: 6.00,
    category: 'caixas',
    subcategory: '10x9',
    image: imgCaixaGeneric,
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
    image: adesivosFlorais,
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
    image: imgEtiquetaQuadrada,
    isFeatured: true,
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
    image: imgEtiquetaGeneric,
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
    isFeatured: true,
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
    isFeatured: true,
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
    isFeatured: true,
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
    isFeatured: true,
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
    isFeatured: true,
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
];
