import { Heart, Sparkles, Users, Package } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';

const values = [
  {
    icon: Heart,
    title: 'Amor pelo que fazemos',
    description: 'Cada produto é escolhido com carinho e cuidado especial.',
  },
  {
    icon: Sparkles,
    title: 'Qualidade premium',
    description: 'Trabalhamos apenas com materiais de alta qualidade.',
  },
  {
    icon: Users,
    title: 'Comunidade criativa',
    description: 'Conectamos pessoas que amam papelaria e organização.',
  },
  {
    icon: Package,
    title: 'Entrega com cuidado',
    description: 'Cada pedido é embalado como um presente especial.',
  },
];

const Sobre = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-hero py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Sobre a <span className="text-gradient">Bearts Papelaria</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Conheça nossa história e paixão por papelaria
          </p>
        </div>
      </section>

      {/* Main Content - Notebook Style */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Notebook Paper Container */}
            <div className="bg-paper rounded-2xl shadow-card overflow-hidden">
              {/* Paper Header */}
              <div className="h-8 bg-gradient-button" />
              
              {/* Content with notebook lines */}
              <div className="notebook-paper notebook-margin py-8 pr-8">
                <article className="space-y-6">
                  <p className="text-lg text-foreground leading-relaxed">
                    <span className="text-primary font-semibold text-2xl font-heading">B</span>em-vindos à Bearts Papelaria! Nossa história começou em 2020, quando decidimos transformar nossa paixão por materiais de papelaria em um negócio que pudesse inspirar outras pessoas.
                  </p>

                  <p className="text-foreground leading-relaxed">
                    Acreditamos que a organização e a criatividade caminham juntas. Um caderno bonito, uma caneta especial ou um conjunto de adesivos podem ser o início de uma jornada incrível de produtividade e expressão pessoal.
                  </p>

                  <p className="text-foreground leading-relaxed">
                    Nossa missão é trazer para você os melhores produtos de papelaria, cuidadosamente selecionados para transformar suas tarefas do dia a dia em momentos prazerosos. Seja para estudar, trabalhar, planejar ou criar, temos algo especial esperando por você.
                  </p>

                  <div className="py-4">
                    <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
                      "Cada página em branco é uma nova oportunidade de criar algo incrível."
                    </blockquote>
                  </div>

                  <p className="text-foreground leading-relaxed">
                    Agradecemos por fazer parte da nossa comunidade de apaixonados por papelaria. Juntos, estamos construindo memórias, organizando sonhos e colorindo a vida com muito carinho e criatividade!
                  </p>

                  <p className="text-primary font-heading font-semibold text-right">
                    — Equipe Bearts Papelaria 💕
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Nossos <span className="text-primary">Valores</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 bg-background rounded-2xl shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-accent flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
