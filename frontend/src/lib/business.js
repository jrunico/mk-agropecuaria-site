export const BUSINESS = {
  name: "Mk Agropecuária e Pet Shop",
  shortName: "MK Agropecuária",
  address: "R. Bento Ribeiro, 1177 - sala 2 - Nova Rússia, Ponta Grossa - PR, 84070-350",
  phone: "(42) 99946-2309",
  phoneDigits: "5542999462309",
  email: "contato@mkagropecuaria.com.br",
  hours: {
    weekdays: "Seg a Sex · 08:00 às 19:00",
    saturday: "Sábado · 08:00 às 17:00",
    sunday: "Domingo · Fechado",
  },
  rating: 4.8,
  reviewsCount: 80,
  features: [
    "Empresa que acolhe a comunidade LGBTQ+",
    "Empresa de empreendedoras",
  ],
  mapEmbed: "https://www.google.com/maps?q=R.+Bento+Ribeiro,+1177+-+Nova+R%C3%BAssia,+Ponta+Grossa+-+PR&output=embed",
  googleReviewsUrl: "https://www.google.com/maps/place/Mk+Agropecuaria+e+Pet+Shop",
  instagram: "https://www.instagram.com/mkagropet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
};

export const whatsappLink = (text = "Olá! Vim pelo site da MK Agropecuária e gostaria de mais informações.") =>
  `https://wa.me/${BUSINESS.phoneDigits}?text=${encodeURIComponent(text)}`;

export const SERVICES = [
  {
    slug: "banho-tosa",
    title: "Banho & Tosa",
    description: "Cuidado completo com carinho, paciência e produtos de alta qualidade. Seu pet volta pra casa cheiroso, lindo e feliz.",
    bullets: ["Banho relaxante", "Tosa higiênica e estética", "Corte de unhas", "Atendimento individualizado"],
    image: "https://images.pexels.com/photos/1436139/pexels-photo-1436139.jpeg",
    icon: "Bath",
  },
  {
    slug: "produtos-pet",
    title: "Produtos Pet",
    description: "Rações premium, brinquedos, camas, acessórios e tudo que seu melhor amigo precisa no dia a dia.",
    bullets: ["Rações secas e úmidas", "Petiscos e snacks", "Brinquedos e acessórios", "Higiene e beleza"],
    image: "https://images.pexels.com/photos/796584/pexels-photo-796584.jpeg",
    icon: "PawPrint",
  },
  {
    slug: "agropecuaria",
    title: "Agropecuária",
    description: "Insumos, sementes, equipamentos e produtos para o campo com a qualidade que o produtor rural confia.",
    bullets: ["Sementes e adubos", "Defensivos", "Ferragens e equipamentos", "Suplementos animais"],
    image: "https://images.pexels.com/photos/27791586/pexels-photo-27791586.jpeg",
    icon: "Leaf",
  },
  {
    slug: "entrega",
    title: "Entrega em Domicílio",
    description: "Seu pedido na porta de casa em Ponta Grossa e região, rápido e com todo o cuidado.",
    bullets: ["Entrega rápida", "Atendimento via WhatsApp", "Pagamento na entrega", "Retirada na loja disponível"],
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200",
    icon: "Truck",
  },
];

export const PRODUCTS = [];

export const REVIEWS = [
  {
    name: "Camylla Rodrigues",
    role: "Local Guide · Google",
    stars: 5,
    text: "Ótimo atendimento, profissionais de qualidade com paciência e dão uma atenção maravilhosa. Minha filha se sentiu em casa e sem contar com o capricho deles no banho e tosa.",
  },
  {
    name: "Rubia Nara Knapp",
    role: "Local Guide · Google",
    stars: 5,
    text: "Bom local, cuidam bem dos pets, bons preços. Produtos de extrema qualidade, confio de olhos fechados.",
  },
  {
    name: "Isabela Dzulinski",
    role: "Local Guide · Google",
    stars: 5,
    text: "Agropecuária maravilhosa! Marcela é uma querida e sempre me atende super bem. Produtos de extrema qualidade, confio de olhos fechados.",
  },
  {
    name: "Cliente fiel",
    role: "Cliente Google",
    stars: 5,
    text: "Adoro os preços também, sou cliente fiel! Atendimento humano e ótimas marcas em um único lugar.",
  },
];
