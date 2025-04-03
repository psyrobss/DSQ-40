document.addEventListener('DOMContentLoaded', () => {
    // Array de objetos representando as 40 perguntas
    const questions = [
      {
        id: "q1",
        text: "1. Eu fico satisfeito em ajudar os outros e, se eu não puder fazer isto, eu fico deprimido.",
        defense: "Pseudo-Altruísmo",
        factor: "neurótico"
      },
      {
        id: "q2",
        text: "2. Eu consigo não me preocupar com um problema até que eu tenha tempo para lidar com ele.",
        defense: "Supressão",
        factor: "maduro"
      },
      {
        id: "q3",
        text: "3. Eu alivio a minha ansiedade fazendo coisas construtivas e criativas, como pintura e marcenaria.",
        defense: "Sublimação",
        factor: "maduro"
      },
      {
        id: "q4",
        text: "4. Eu sou capaz de achar bons motivos para tudo que eu faço.",
        defense: "Racionalização",
        factor: "imaturo"
      },
      {
        id: "q5",
        text: "5. Eu sou capaz de rir de mim mesmo com bastante facilidade.",
        defense: "Humor",
        factor: "maduro"
      },
      {
        id: "q6",
        text: "6. As pessoas tendem a me tratar mal.",
        defense: "Projeção",
        factor: "imaturo"
      },
      {
        id: "q7",
        text: "7. Se alguém me assalta e rouba o meu dinheiro, eu prefiro que esta pessoa seja ajudada em vez de punida.",
        defense: "Formação Reativa",
        factor: "neurótico"
      },
      {
        id: "q8",
        text: "8. As pessoas dizem que eu costumo ignorar os fatos desagradáveis como se eles não existissem.",
        defense: "Negação",
        factor: "imaturo"
      },
      {
        id: "q9",
        text: "9. Eu costumo ignorar o perigo como se eu fosse o Super-homem.",
        defense: "Dissociação",
        factor: "imaturo"
      },
      {
        id: "q10",
        text: "10. Eu me orgulho da minha capacidade de reduzir as pessoas aos seus devidos lugares.",
        defense: "Desvalorização",
        factor: "imaturo"
      },
      {
        id: "q11",
        text: "11. Eu frequentemente ajo impulsivamente quando alguma coisa está me incomodando.",
        defense: "Atuação",
        factor: "imaturo"
      },
      {
        id: "q12",
        text: "12. Eu fico fisicamente doente quando as coisas não estão indo bem para mim.",
        defense: "Somatização",
        factor: "imaturo"
      },
      {
        id: "q13",
        text: "13. Eu sou uma pessoa muito inibida.",
        defense: "Desvalorização",
        factor: "imaturo"
      },
      {
        id: "q14",
        text: "14. Eu fico mais satisfeito com minhas fantasias do que com a vida real.",
        defense: "Fantasia",
        factor: "imaturo"
      },
      {
        id: "q15",
        text: "15. Eu tenho qualidades especiais que me permitem levar a vida sem problemas.",
        defense: "Dissociação",
        factor: "imaturo"
      },
      {
        id: "q16",
        text: "16. Há sempre boas razões quando as coisas não dão certo pra mim.",
        defense: "Racionalização",
        factor: "imaturo"
      },
      {
        id: "q17",
        text: "17. Eu resolvo mais as coisas sonhando acordado do que com a vida real.",
        defense: "Fantasia",
        factor: "imaturo"
      },
      {
        id: "q18",
        text: "18. Eu não tenho medo de nada.",
        defense: "Negação",
        factor: "imaturo"
      },
      {
        id: "q19",
        text: "19. Às vezes, eu acho que sou um anjo e, outras vezes, acho que sou o demônio.",
        defense: "Cisão",
        factor: "imaturo"
      },
      {
        id: "q20",
        text: "20. Eu fico francamente agressivo quando sou magoado.",
        defense: "Atuação",
        factor: "imaturo"
      },
      {
        id: "q21",
        text: "21. Eu sempre acho que alguém que eu conheço é como um anjo da guarda.",
        defense: "Idealização",
        factor: "neurótico"
      },
      {
        id: "q22",
        text: "22. Tanto quanto eu sei, ou as pessoas são boas ou más.",
        defense: "Cisão",
        factor: "imaturo"
      },
      {
        id: "q23",
        text: "23. Se o meu chefe me repreendesse, eu poderia cometer um erro ou trabalhar mais devagar só para me vingar dele.",
        defense: "Agressão Passiva",
        factor: "imaturo"
      },
      {
        id: "q24",
        text: "24. Eu conheço alguém que é capaz de ser justo e imparcial em qualquer coisa que faça.",
        defense: "Idealização",
        factor: "neurótico"
      },
      {
        id: "q25",
        text: "25. Eu posso controlar os meus sentimentos se eles interferirem no que eu estiver fazendo.",
        defense: "Supressão",
        factor: "maduro"
      },
      {
        id: "q26",
        text: "26. Eu frequentemente sou capaz de ver o lado engraçado de uma situação apesar de ela ser desagradável.",
        defense: "Humor",
        factor: "maduro"
      },
      {
        id: "q27",
        text: "27. Eu sinto dor de cabeça quando tenho que fazer algo que não gosto.",
        defense: "Somatização",
        factor: "imaturo"
      },
      {
        id: "q28",
        text: "28. Eu frequentemente me vejo sendo muito simpático com pessoas com quem, pelo certo, eu deveria estar muito irritado.",
        defense: "Formação Reativa",
        factor: "neurótico"
      },
      {
        id: "q29",
        text: "29. Eu tenho certeza de que a vida é injusta comigo.",
        defense: "Projeção",
        factor: "imaturo"
      },
      {
        id: "q30",
        text: "30. Quando eu sei que vou ter que enfrentar uma situação difícil, eu tento imaginar como isso será e planejo um jeito de lidar com a situação.",
        defense: "Antecipação",
        factor: "maduro"
      },
      {
        id: "q31",
        text: "31. Os médicos nunca realmente entendem o que há de errado comigo.",
        defense: "Deslocamento",
        factor: "imaturo"
      },
      {
        id: "q32",
        text: "32. Depois de lutar pelos meus direitos, eu tenho a tendência de me desculpar por ter sido tão firme.",
        defense: "Anulação",
        factor: "neurótico"
      },
      {
        id: "q33",
        text: "33. Quando eu estou deprimido ou ansioso, comer faz com que eu me sinta melhor.",
        defense: "Deslocamento",
        factor: "imaturo"
      },
      {
        id: "q34",
        text: "34. Frequentemente me dizem que eu não mostro os meus sentimentos.",
        defense: "Isolamento",
        factor: "imaturo"
      },
      {
        id: "q35",
        text: "35. Se eu puder saber com antecedência que vou ficar triste mais adiante, eu poderei lidar melhor com a situação.",
        defense: "Antecipação",
        factor: "maduro"
      },
      {
        id: "q36",
        text: "36. Não importa o quanto eu reclame, eu nunca consigo uma resposta satisfatória.",
        defense: "Agressão Passiva",
        factor: "imaturo"
      },
      {
        id: "q37",
        text: "37. Frequentemente eu me dou conta de que eu não sinto nada em situações que deveriam me despertar fortes emoções.",
        defense: "Isolamento",
        factor: "imaturo"
      },
      {
        id: "q38",
        text: "38. Manter-me muito ocupado evita que eu me sinta deprimido ou ansioso.",
        defense: "Sublimação",
        factor: "maduro"
      },
      {
        id: "q39",
        text: "39. Se eu estivesse passando por uma crise, eu me aproximaria de pessoas que tivessem o mesmo problema.",
        defense: "Pseudo-Altruísmo",
        factor: "neurótico"
      },
      {
        id: "q40",
        text: "40. Se eu tenho um pensamento agressivo, eu sinto a necessidade de fazer algo para compensá-lo.",
        defense: "Anulação",
        factor: "neurótico"
      }
    ];
  
    // Cria um mapeamento para associar cada defesa ao seu fator (baseado na primeira ocorrência)
    const defenseFactor = {};
    questions.forEach(q => {
      if (!defenseFactor[q.defense]) {
        defenseFactor[q.defense] = q.factor;
      }
    });
  
    // Banco de dados com descrições detalhadas das defesas
    const defenseDescriptions = {
      'Sublimação': {
        title: 'Sublimação',
        description: 'Redireciona impulsos inaceitáveis para atividades produtivas e socialmente valorizadas.',
        extra: 'Exemplo: Canalizar impulsos agressivos atividades dissipativas como arte, esporte ou projetos culturais. Permite transformar energia emocional em criatividade, contribuindo para o equilíbrio psicológico e realizações construtivas.'
      },
      'Humor': {
        title: 'Humor',
        description: 'Utiliza o riso para reduzir a tensão e encarar situações estressantes de forma leve.',
        extra: 'Exemplo: Fazer piadas ou ver o lado engraçado de situações difíceis para aliviar o estresse. Ajuda o indivíduo a distanciar-se emocionalmente dos problemas sem negá-los.'
      },
      'Antecipação': {
        title: 'Antecipação',
        description: 'Planeja estratégias para enfrentar desafios futuros, preparando o indivíduo para possíveis adversidades.',
        extra: 'Exemplo: Visualizar cenários difíceis e definir planos de ação antes que eles ocorram. O planejamento reduz a ansiedade e aumenta a confiança ao lidar com situações desafiadoras.'
      },
      'Supressão': {
        title: 'Supressão',
        description: 'Consiste em adiar ou ignorar pensamentos e emoções conflitantes para manter o foco em tarefas imediatas. ',
        extra: 'Exemplo: Postergar a preocupação para depois de um compromisso importante. Embora útil a curto prazo, pode levar ao acúmulo de sentimentos reprimidos. É importante encontrar um equilíbrio entre lidar com as emoções e manter a produtividade.'
      },
      'Anulação': {
        title: 'Anulação',
        description: 'Procura cancelar, por meio de comportamentos compensatórios ou rituais, impulsos e pensamentos considerados inaceitáveis, neutralizando sua influência emocional.',
        extra: 'Exemplo: Realizar uma ação "decompensatória" para anular um pensamento agressivo. Essa defesa pode ser útil para lidar com sentimentos de culpa, mas também pode levar a comportamentos obsessivos se não for controlada.'
      },
      'Pseudo-Altruísmo': {
        title: 'Pseudo-Altruísmo',
        description: 'O indivíduo age de forma altruísta não apenas para ajudar os outros, mas também para suprir necessidades emocionais próprias, muitas vezes mascarando inseguranças internas.',
        extra: 'Exemplo: Oferecer ajuda excessiva para ganhar aprovação e reconhecimento. Essa defesa pode criar um ciclo de dependência emocional, onde o indivíduo busca validação externa em vez de desenvolver uma autoestima saudável.'
      },
      'Idealização': {
        title: 'Idealização',
        description: 'Atribui qualidades perfeitas a pessoas ou situações, ignorando falhas e criando uma visão utópica que protege contra sentimentos de decepção ou insegurança.',
        extra: 'Exemplo: Ver um mentor ou parceiro como infalível, sem reconhecer suas imperfeições. Essa defesa pode levar a desilusões quando a realidade não corresponde às expectativas idealizadas.'
      },
      'Formação Reativa': {
        title: 'Formação Reativa',
        description: 'Expressa sentimentos opostos aos que realmente se experienciam, como forma de ocultar emoções indesejadas e manter uma fachada social aceitável.',
        extra: 'Exemplo: Tratar com extrema gentileza alguém que provoca sentimentos negativos internos. Essa defesa pode criar um conflito interno, pois os sentimentos verdadeiros permanecem reprimidos.'
      },
      'Projeção': {
        title: 'Projeção',
        description: 'Atribui aos outros pensamentos ou sentimentos que, na verdade, pertencem a si mesmo. ',
        extra: 'Exemplo: Criticar os outros por características que o próprio indivíduo possui.  Essa estratégia evita o confronto com aspectos indesejados da própria personalidade. Pode criar um ciclo de desconfiança e conflitos interpessoais, dificultando a construção de relacionamentos saudáveis.'
      },
      'Agressão Passiva': {
        title: 'Agressão Passiva',
        description: 'Expressa raiva e frustração de forma indireta, por meio de comportamentos de sabotagem ou resistência velada, evitando o confronto direto.',
        extra: 'Exemplo: Procrastinar ou agir de forma deliberadamente ineficiente para "se vingar". As consequencias podem incluir ressentimentos acumulados e dificuldades na comunicação, prejudicando relacionamentos pessoais e profissionais.'
      },
      'Atuação': {
        title: 'Atuação',
        description: 'Reflete respostas impulsivas a estímulos emocionais, com pouca consideração pelas consequências. ',
        extra: 'Exemplo: Agir sem pensar em resposta a um comentário ou situação estressante. É uma forma de lidar com conflitos mentais que não conseguimos expressar verbalmente. Pode resultar em comportamentos precipitadamente reagentes. Isso pode levar a arrependimentos posteriores e dificuldades em resolver conflitos de maneira construtiva.'
      },
      'Isolamento': {
        title: 'Isolamento',
        description: 'Isola experiências intensamente emocionais da consciência, permitindo que o indivíduo se proteja da dor, mas comprometendo a conexão com suas emoções.',
        extra: 'Exemplo: Relatar um evento traumático sem a carga emocional que o acompanha. É uma forma de resistência frequente no tratamento analítico. O isolamento impede que o eu permita que as cognições ameaçadoras se tornem recorrentes e possivelmente danosas ao autoconceito. Embiora seja útil  '
      },
      'Desvalorização': {
        title: 'Desvalorização',
        description: 'Minimiza a importância de pessoas, situações ou sentimentos, reduzindo a ansiedade associada a eles, mas também podendo diminuir o valor próprio ou dos outros. ',
        extra: 'Exemplo: Desmerecer o esforço de alguém para evitar a comparação. Essa defesa pode levar a uma visão distorcida da realidade, dificultando a construção de relacionamentos saudáveis e a valorização das conquistas pessoais.'
      },
      'Fantasia': {
        title: 'Fantasia',
        description: 'Recorre a mundos imaginários para escapar da realidade e lidar com emoções desconfortáveis.  ',
        extra: 'Exemplo: Preferir viver em um mundo idealizado do que enfrentar situações cotidianas difíceis. Proporciona alívio momentâneo mas dificultando o enfrentamento dos desafios reais. Contudo, pode levar a uma desconexão da realidade e à dificuldade em lidar com problemas práticos.'
      },
      'Negação': {
        title: 'Negação',
        description: 'Recusa a reconhecer fatos, sentimentos ou situações desagradáveis, tratando-os como inexistentes para evitar a dor.',
        extra: 'Exemplo: Ignorar um problema de saúde mesmo diante de sintomas claros. Além disso pode pode levar a conflitos não resolvidos a longo prazo. A negação pode criar um ciclo vicioso de evasão, dificultando a busca por soluções e o enfrentamento de desafios.'
      },
      'Deslocamento': {
        title: 'Deslocamento',
        description: 'Redireciona emoções ou impulsos de um alvo original para outro considerado menos ameaçador, permitindo a expressão de sentimentos de forma "segura".',
        extra: 'Exemplo: Desabafar com um amigo próximo quando o verdadeiro objeto de raiva é o chefe. É uma defesa que pode ser importante para evitar conflitos diretos, mas também pode levar a mal-entendidos e ressentimentos acumulados.'
      },
      'Dissociação': {
        title: 'Dissociação',
        description: 'Separa experiências traumáticas ou emoções intensas da consciência principal, permitindo que o indivíduo continue funcionando apesar de eventos dolorosos.  ',
        extra: 'Exemplo: Ter lapsos de memória ou sentir-se "desligado" em situações estressantes. Pode levar a uma sensação de desconexão.'
      },
      'Cisão': {
        title: 'Cisão',
        description: 'Vê pessoas e situações de forma dicotômica, como totalmente boas ou totalmente más, sem reconhecer nuances, o que pode gerar conflitos interpessoais e dificuldades na integração de experiências.',
        extra: 'Exemplo: Idealizar um parceiro em um momento e desvalorizá-lo completamente no outro. Essa defesa pode levar a relacionamentos instáveis e à dificuldade em lidar com a ambivalência emocional. A cisão pode criar um ciclo de expectativas irreais e desilusões constantes, dificultando a construção características saudáveis.'
      },
      'Racionalização': {
        title: 'Racionalização',
        description: 'Cria justificativas lógicas para comportamentos ou sentimentos que, de outra forma, seriam inaceitáveis, permitindo distanciar-se emocionalmente das ações impulsivas.',
        extra: 'Exemplo: Explicar uma decisão controversa com argumentos "racionais" que mascaram a verdadeira motivação emocional.'
      },
      'Somatização': {
        title: 'Somatização',
        description: 'Converte tensões emocionais e conflitos internos em sintomas físicos, permitindo que o indivíduo manifeste sua angústia sem precisar expressá-la verbalmente.',
        extra: 'Exemplo: Desenvolver dores de cabeça ou problemas gastrointestinais em resposta a estresse emocional. Essa defesa pode ser uma forma de lidar com emoções reprimidas, mas também pode levar a problemas de saúde física e mental. A somatização pode criar um ciclo vicioso, onde o estresse emocional se manifesta fisicamente, dificultando a identificação e o tratamento das causas subjacentes.'
      }
    };
    
    function renderDefenseDescription(defenseName, score) {
        if (defenseDescriptions.hasOwnProperty(defenseName)) {
          const def = defenseDescriptions[defenseName];
          return `
            <div class="defense-item" onclick="toggleExtra(this)">
              <div class="defense-header">
                <span>${def.title}</span>
                <span>${score}%</span>
              </div>
              <div class="defense-detail">
                <p>${def.description}</p>
                ${def.extra ? `<p class="defense-extra hidden-extra">${def.extra}</p>` : ''}
              </div>
            </div>
          `;
        }
     else {
        return `
            <div class="defense-item">
            <div class="defense-header">
                <span>${defenseName}</span>
                <span>${score}%</span>
            </div>
            <div class="defense-detail">
                <p>Sem descrição detalhada disponível.</p>
            </div>
            </div>
        `;
        }
      
    }
        
    // Gera dinamicamente as perguntas e as insere no elemento #questions
    const questionsContainer = document.getElementById('questions');
    questions.forEach(q => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('question-slider');
      questionDiv.dataset.defense = q.defense;
      questionDiv.dataset.factor = q.factor;
      questionDiv.innerHTML = `
        <label for="${q.id}">${q.text}</label>
        <input id="${q.id}" type="range" name="${q.id}" min="1" max="9" step="1" value="5">
        <output id="out-${q.id}">5</output>
      `;
      questionsContainer.appendChild(questionDiv);
    });
  
    // Atualiza dinamicamente o output conforme o usuário move o slider
    document.querySelectorAll('input[type="range"]').forEach(slider => {
      slider.addEventListener('input', () => {
        slider.nextElementSibling.textContent = slider.value;
      });
    });
  
    // Configura o gráfico radar com Chart.js
    const factorsContainer = document.getElementById('factors');
    const radarCtx = document.getElementById('radarChart').getContext('2d');
    const radarChart = new Chart(radarCtx, {
      type: 'radar',
      data: {
        labels: ['Defesa Madura', 'Defesa Neurótica', 'Defesa Imatura'],
        datasets: [{
          label: 'Perfis de Defesa',
          data: [0, 0, 0],
          backgroundColor: 'rgba(0,123,255,0.2)',
          borderColor: 'rgba(0,123,255,1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { color: '#eee' },
            grid: { color: '#ddd' },
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      }
    });
  
    // Manipulação do formulário para processar as respostas
    const form = document.getElementById('dsqForm');
    const resultsSection = document.getElementById('results');
    const defensesContainer = document.getElementById('defenses');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Coleta dos dados e cálculo das pontuações
      let total = 0;
      const factorScores = { maduro: 0, neurótico: 0, imaturo: 0 };
      const defenseScores = {};
  
      document.querySelectorAll('.question-slider').forEach(el => {
        const input = el.querySelector('input');
        const value = parseInt(input.value);
        const factor = el.dataset.factor;
        const defense = el.dataset.defense;
  
        factorScores[factor] += value;
        defenseScores[defense] = (defenseScores[defense] || 0) + value;
        total += value;
      });
  
      // Cálculo das porcentagens dos fatores
      const factorsPercentage = {
        maduro: ((factorScores.maduro / total) * 100).toFixed(1),
        neurótico: ((factorScores.neurótico / total) * 100).toFixed(1),
        imaturo: ((factorScores.imaturo / total) * 100).toFixed(1)
      };
  
      // Atualiza os dados do gráfico e renderiza novamente
      radarChart.data.datasets[0].data = [
        factorsPercentage.maduro,
        factorsPercentage.neurótico,
        factorsPercentage.imaturo
      ];
      radarChart.update();
  
      // Exibe os perfis principais na seção de resultados
      factorsContainer.innerHTML = `
        <h3>Perfis de Defesa Principais</h3>
        ${Object.entries(factorsPercentage).map(([factor, value]) => `
          <div class="factor-item">
            <div class="factor-header">
              <span>${factor.charAt(0).toUpperCase() + factor.slice(1)}</span>
              <span>${value}%</span>
            </div>
            <div class="factor-bar" style="width: ${value}%"></div>
          </div>
        `).join('')}
      `;
  
      // Agrupa as defesas por fator utilizando o mapeamento defenseFactor
      const defenseGroups = {
        maduro: [],
        neurótico: [],
        imaturo: []
      };
  
      // Processa e exibe as defesas individuais, ordenadas por pontuação
      const sortedDefenses = Object.entries(defenseScores)
        .sort((a, b) => b[1] - a[1])
        .map(([defense, score]) => {
          const percent = ((score / total) * 100).toFixed(1);
          const group = defenseFactor[defense];
          
          // Adiciona a defesa ao seu grupo correspondente
          defenseGroups[group].push({
            name: defense,
            score: percent
          });
          
          return {
            name: defense,
            score: percent
          };
        });
  
      // Monta o HTML para as defesas agrupadas por categoria
      let defensesHtml = `<h3>Mecanismos de Defesa por Categoria</h3>`;
      
      // Para cada grupo de fator (maduro, neurótico, imaturo)
      Object.entries(defenseGroups).forEach(([factor, defenses]) => {
        if (defenses.length) {
          // Ordena as defesas por pontuação
          defenses.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
          
          defensesHtml += `
            <div class="defense-group">
              <h4>${factor.charAt(0).toUpperCase() + factor.slice(1)}</h4>
              <div class="defense-list">
                ${defenses.map(def => renderDefenseDescription(def.name, def.score)).join('')}
              </div>
            </div>
          `;
        }
      });
      
      // Define o HTML do container de defesas
      defensesContainer.innerHTML = defensesHtml;
      

  

      // Anima as barras dos fatores utilizando Anime.js
      anime({
        targets: '.factor-bar',
        width: [0, function(el) { return el.style.width; }],
        easing: 'easeOutQuad',
        duration: 1500,
        delay: anime.stagger(200)
      });
  
      // Revela a seção de resultados com scroll suave
      resultsSection.style.display = 'block';
      window.scrollTo({ top: resultsSection.offsetTop, behavior: 'smooth' });
    });
  
    // Animação de entrada para a página
    anime({
      targets: '.container',
      opacity: [0, 1],
      translateY: [-20, 0],
      easing: 'easeOutQuad',
      duration: 1100
    });
  });

  // Função para alternar visibilidade do texto extra
function toggleExtra(element) {
    const extra = element.querySelector('.defense-extra');
    if (extra) {
      extra.classList.toggle('hidden-extra');
    }
  }