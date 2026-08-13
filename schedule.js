/* ============================================================
   Mind Summit 2026 — Programação por local
   16 e 17 de setembro · São Paulo Expo
   Keyed by the map's data-zone. Each: { loc, d1[], d2[] }.
   Session: { t:horário, k:tipo, s:sessão, q:quem, i:ingressos }
   Sujeita a alteração sem aviso prévio.
   ============================================================ */
window.SCHEDULE = {
  'arena-mind': {
    loc: 'Arena Mind',
    d1: [
      { t: '09:00–09:30', k: 'Experiência', s: 'Abertura', q: 'Convidado Especial', i: 'Mind, VIP, Prime' },
      { t: '09:15–09:55', k: 'Palestra', s: 'Do benefício à transformação: o futuro do bem-estar nas empresas', q: 'Adriana Drulla', i: 'Mind, VIP, Prime' },
      { t: '09:40–10:20', k: 'Palestra', s: 'Como bem-estar afeta o bottom-line? · Como bem-estar se converte em produtividade, retenção e valor — e o que os dados revelam no Brasil', q: 'Jan-Emmanuel De Neve', i: 'Mind, VIP, Prime' },
      { t: '10:30–11:20', k: 'Painel', s: 'Quando o bem-estar entra na tese · Como investidores, mercado e empresas estão transformando bem-estar em decisão de negócio', q: 'Paula Benevides', i: 'Mind, VIP, Prime' },
      { t: '11:30–12:10', k: 'Palestra', s: 'Entre o riso e o resultado. Como o humor afeta a performance', q: 'Maryanna com Y', i: 'Mind, VIP, Prime' },
      { t: '12:30–13:20', k: 'Painel', s: 'A virada da diversidade. Estratégias de inclusão para alavancar performance, engajamento e vantagem competitiva', q: 'João Yosef Torres e Ana Mocny', i: 'Mind, VIP, Prime' },
      { t: '15:00–15:40', k: 'Palestra', s: 'Quando mudar deixa de ser uma escolha. Como preservar agência, confiança e capacidade de adaptação', q: 'Michelle Schneider', i: 'Mind, VIP, Prime' },
      { t: '16:00–16:40', k: 'Palestra', s: 'A conversa que a liderança evita. O custo cultural e humano de não enfrentar problemas', q: 'Em breve', i: 'Mind, VIP, Prime' },
      { t: '17:20–18:10', k: 'Painel', s: 'Alta performance começa por dentro. Autorregulação, pausa e autocompaixão na liderança', q: 'Ana Bógus; Adriana Drulla', i: 'Mind, VIP, Prime' },
      { t: '18:10–18:50', k: 'Palestra', s: 'O mito do colaborador resiliente: por que burnout é um problema de desenho de trabalho, não de fraqueza individual', q: 'Christina Maslach', i: 'Mind, VIP, Prime' }
    ],
    d2: [
      { t: '09:00–09:40', k: 'Abertura', s: 'Quem enxerga antes, lidera antes · Uma experiência que transforma percepção em estratégia', q: 'Convidado Especial', i: 'Mind, VIP, Prime' },
      { t: '09:30–10:10', k: 'Palestra', s: 'Por que os programas de bem-estar falham e o que a ciência diz sobre os que duram', q: 'Sonja Lyubomirsky', i: 'Mind, VIP, Prime' },
      { t: '10:20–11:10', k: 'Painel', s: 'Da obrigação à gestão real: como construir governança de risco psicossocial', q: 'Gustavo Locatelli; Mauro Muller; Cirlene Zimmermann', i: 'Mind, VIP, Prime' },
      { t: '11:30–12:10', k: 'Palestra', s: 'Onde foi parar o seu foco: o que a neurociência mostra sobre o trabalho moderno', q: 'Carla Tieppo', i: 'Mind, VIP, Prime' },
      { t: '12:30–13:20', k: 'Painel', s: 'Mulheres que abrem caminho. Como transformar competição em apoio real', q: 'Edna Goldoni e convidadas', i: 'Mind, VIP, Prime' },
      { t: '15:00–15:50', k: 'Painel', s: 'Sobreviver sem destruir o time. Como liderar quando o negócio está sob pressão', q: 'Caito Maia', i: 'Mind, VIP, Prime' },
      { t: '16:00–16:50', k: 'Painel', s: 'Bem-estar é gestão. Como as decisões de liderança constroem o clima das equipes', q: 'Em breve', i: 'Mind, VIP, Prime' },
      { t: '17:20–18:10', k: 'Painel', s: 'Felicidade como parte da estratégia. Casos e aprendizados', q: 'Em breve', i: 'Mind, VIP, Prime' },
      { t: '18:10–18:50', k: 'Palestra', s: 'As melhores equipes erram diferente', q: 'Amy Edmondson', i: 'Mind, VIP, Prime' }
    ]
  },
  'arena-topvoice': {
    loc: 'Arena Top Voice',
    d1: [
      { t: '11:30–12:20', k: 'Painel', s: 'Produtividade sustentável. Como manter performance sem esgotar pessoas', q: 'Izabella Camargo; Lailson Lima; Irene Reis', i: 'Mind, VIP, Prime' },
      { t: '12:30–13:10', k: 'Em curadoria', s: 'Em curadoria', q: 'Arena Top Voice', i: 'Mind, VIP, Prime' },
      { t: '15:00–15:40', k: 'Palestra', s: 'Autonomia sem desorganização. Como criar formas de trabalho mais flexíveis e eficientes', q: 'Renata Rivetti', i: 'Mind, VIP, Prime' },
      { t: '16:00–16:40', k: 'Em curadoria', s: 'Em curadoria', q: 'Em curadoria', i: 'Mind, VIP, Prime' }
    ],
    d2: [
      { t: '11:30–12:10', k: 'Palestra', s: 'Em curadoria', q: 'Em curadoria', i: 'Mind, VIP, Prime' },
      { t: '12:30–13:10', k: 'Em curadoria', s: 'Em curadoria', q: '', i: 'Mind, VIP, Prime' },
      { t: '15:00–15:40', k: 'Em curadoria', s: 'Em curadoria', q: 'Em curadoria', i: 'Mind, VIP, Prime' },
      { t: '16:00–16:40', k: 'Palestra', s: 'Em curadoria', q: 'Em curadoria', i: 'Mind, VIP, Prime' }
    ]
  },
  'arena-sextante': {
    loc: 'Arena Sextante',
    d1: [
      { t: '11:30–12:10', k: 'Palestra', s: 'O trabalho ainda engaja? · O que a maior pesquisa global sobre o mercado de trabalho revela sobre propósito, pertencimento e desempenho', q: 'Yuri Trafane', i: 'Mind, VIP, Prime' },
      { t: '12:30–13:20', k: 'Painel', s: 'A nova era da alta performance · Como preparar corpo e mente para uma vida e carreira mais longevas', q: 'Fernanda Catena; Márcio Atalla', i: 'Mind, VIP, Prime' },
      { t: '15:00–15:40', k: 'Palestra', s: 'A economia da distração · Os mecanismos invisíveis que sabotam seu foco todos os dias', q: 'Oscar de Bos', i: 'Mind, VIP, Prime' },
      { t: '16:00–16:40', k: 'Palestra', s: 'Como a consciência da finitude transforma a forma de viver e as escolhas que fazemos', q: 'Ana Claudia Quintana Arantes', i: 'Mind, VIP, Prime' }
    ],
    d2: [
      { t: '11:30–12:20', k: 'Painel', s: 'Você aguenta ser líder? · Como manter o equilíbrio entre saúde mental e performance em um mundo cada vez mais acelerado', q: 'Daniel de Barros e Arthur Guerra', i: 'Mind, VIP, Prime' },
      { t: '12:30–13:10', k: 'Palestra', s: 'Liderança emocionalmente madura · Autorregulação, limites saudáveis e equilíbrio sob pressão', q: 'Alana Anijar', i: 'Mind, VIP, Prime' },
      { t: '15:00–15:40', k: 'Palestra', s: 'Seu cérebro não foi feito para isso · O desencontro entre o cérebro humano e as exigências da vida moderna (online ao vivo)', q: 'Paul Goldsmith · Mediação: Sibelle Pedral', i: 'Mind, VIP, Prime' },
      { t: '16:00–17:10', k: 'Palestra · Painel', s: 'Sessão especial · Sessão dupla — (online ao vivo)', q: '', i: 'Mind, VIP, Prime' },
      { t: '16:00–16:40', k: '↳ Palestra', s: 'Quem está no controle? · O desafio de construir uma relação saudável com a tecnologia', q: 'Michael E. Long', i: 'Mind, VIP, Prime' },
      { t: '16:40–17:10', k: '↳ Painel', s: 'Florescendo em tempos de incerteza · Por que o otimismo continua sendo uma vantagem competitiva', q: 'Deepika Chopra · Mediação: Virgínia Leite', i: 'Mind, VIP, Prime' }
    ]
  },
  livraria: {
    loc: 'Livraria da Vila',
    d1: [
      { t: '13:30–14:00', k: 'Lançamento de livro', s: 'A Virada da Diversidade. João Yosef Torres', q: 'João Yosef Torres', i: 'Mind, VIP, Prime' }
    ],
    d2: [
      { t: '13:30–14:00', k: 'Lançamento de livro', s: 'Lançamento livro Carla Tieppo', q: 'Carla Tieppo', i: 'Mind, VIP, Prime' },
      { t: '14:00–14:30', k: 'Lançamento de livro', s: 'O poder da sororidade. Um pacto de respeito e apoio que une e transforma a vida das mulheres', q: 'Edna Goldoni', i: 'Mind, VIP, Prime' }
    ]
  },
  'lounge-prime': {
    loc: 'Prime Lounge',
    d1: [
      { t: '14:00–14:40', k: 'Autógrafos Prime', s: 'Autógrafos com Jan-Emmanuel De Neve', q: 'Jan-Emmanuel De Neve', i: 'Prime' },
      { t: '19:00–19:40', k: 'Autógrafos Prime', s: 'Coquetel e Autógrafos com Christina Maslach', q: 'Christina Maslach', i: 'Prime' }
    ],
    d2: [
      { t: '14:00–14:40', k: 'Autógrafos Prime', s: 'Autógrafos com Sonja Lyubomirsky', q: 'Sonja Lyubomirsky', i: 'Prime' },
      { t: '19:00–19:40', k: 'Autógrafos', s: 'Coquetel e Autógrafos com Amy Edmondson', q: 'Amy Edmondson', i: 'Prime' }
    ]
  },
  'sala-master': {
    loc: 'Sala Masterclass',
    d1: [
      { t: '11:30–13:00', k: 'Masterclass Prime', s: 'Mensurar, intervir, provar: a metodologia Oxford para wellbeing como ativo de performance', q: 'Jan-Emmanuel De Neve', i: 'Prime' },
      { t: '15:00–16:30', k: 'Masterclass Prime', s: 'Os três movimentos do líder que destravam aprendizagem coletiva', q: 'Amy Edmondson', i: 'Prime' }
    ],
    d2: [
      { t: '11:30–13:00', k: 'Masterclass Prime', s: 'Bem-estar baseado em evidência: aprenda a desenhar intervenções que de fato funcionam.', q: 'Sonja Lyubomirsky', i: 'Prime' },
      { t: '15:00–16:30', k: 'Masterclass Prime', s: 'Masterclass: Os 6 desalinhamentos do burnout: como ler e redesenhar o trabalho do seu time', q: 'Christina Maslach', i: 'Prime' }
    ]
  },
  'sala-vip1': {
    loc: 'Sala Workshop 1',
    d1: [
      { t: '11:30–13:30', k: 'Workshop VIP', s: 'Decidir sob pressão. Como manter clareza em contextos de alta exigência', q: 'Tamara Myles', i: 'VIP, Prime' },
      { t: '15:00–17:00', k: 'Workshop VIP', s: 'Bem-estar começa na agenda. Como transformar intenção em prioridade organizacional', q: 'Em breve', i: 'VIP, Prime' }
    ],
    d2: [
      { t: '11:30–13:30', k: 'Workshop VIP', s: 'Falhar melhor. Como transformar erros em aprendizagem sem reduzir a exigência', q: 'Veruska Galvão', i: 'VIP, Prime' },
      { t: '15:00–17:00', k: 'Workshop VIP', s: 'Infraestrutura de Performance: Desenho pessoal para Executivos sob Pressão Crônica', q: 'Carla Tieppo', i: 'VIP, Prime' }
    ]
  },
  'sala-vip2': {
    loc: 'Sala Workshop 2',
    d1: [
      { t: '11:30–13:30', k: 'Workshop VIP', s: 'Da mensuração ao PGR. Como avaliar riscos psicossociais e definir prioridades de ação', q: 'Igor Menezes e Esabela Cruz', i: 'VIP, Prime' },
      { t: '15:00–17:00', k: 'Workshop VIP', s: 'Redesenhar o trabalho para performar melhor. Ferramentas de job crafting para líderes', q: 'Em breve', i: 'VIP, Prime' }
    ],
    d2: [
      { t: '11:30–13:30', k: 'Workshop VIP', s: 'Riscos psicossociais sem improviso. Como prevenir, estruturar responsabilidades e atender às exigências legais', q: 'Cirlene Zimmermann', i: 'VIP, Prime' },
      { t: '15:00–17:00', k: 'Workshop VIP', s: 'Trabalho híbrido sem caos. Ferramentas para organizar, colaborar e liderar equipes', q: 'Em breve', i: 'VIP, Prime' }
    ]
  },
  'sala-vip3': {
    loc: 'Sala Workshop 3',
    d1: [
      { t: '11:30–13:30', k: 'Workshop VIP', s: 'O que sustenta equipes de alta performance. Ferramentas de inteligência relacional para líderes', q: 'Veruska Galvão', i: 'VIP, Prime' },
      { t: '15:00–17:00', k: 'Workshop VIP', s: 'O que precisa ser dito. Ferramentas para conversas difíceis na liderança', q: 'Em breve', i: 'VIP, Prime' }
    ],
    d2: [
      { t: '11:30–13:30', k: 'Workshop VIP', s: 'O feedback que falta. Como tornar visíveis as forças que sustentam o resultado', q: 'Tamara Myles', i: 'VIP, Prime' },
      { t: '15:00–17:00', k: 'Workshop VIP', s: 'O líder como arquiteto do trabalho. Rotinas para dar clareza, remover obstáculos e sustentar a performance', q: 'Em breve', i: 'VIP, Prime' }
    ]
  }
};
