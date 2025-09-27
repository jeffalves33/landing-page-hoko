'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, Star, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'R$ 690',
    period: '/mês',
    description: 'Ideal para começar com analytics preditivos',
    features: [
      '1 usuário',
      'Relatórios descritivos básicos',
      'Até 2 objetivos de marca',
      'Suporte via email',
      'Dashboard básico',
    ],
    cta: 'Assinar agora',
    popular: false,
    icon: Zap,
  },
  {
    name: 'Pro',
    price: 'R$ 1.490',
    period: '/mês',
    description: 'O mais popular para empresas em crescimento',
    features: [
      'Até 5 usuários',
      'Análises descritivas + preditivas',
      'Objetivos de marca ilimitados',
      'Relatórios automatizados',
      'Integrações API',
      'Suporte prioritário',
      'Dashboard avançado',
    ],
    cta: 'Começar hoje',
    popular: true,
    icon: Star,
    badge: 'Mais Popular',
    savings: 'Economia de R$ 2.340/ano vs planos individuais',
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    period: '',
    description: 'Solução completa para grandes organizações',
    features: [
      'Usuários ilimitados',
      'Integrações personalizadas',
      'Análises prescritivas avançadas',
      'Suporte dedicado 24/7',
      'White-label disponível',
      'SLA garantido',
      'Treinamento incluso',
    ],
    cta: 'Falar com um especialista',
    popular: false,
    icon: Crown,
  },
];

const faqItems = [
  {
    question: 'Posso mudar de plano a qualquer momento?',
    answer: 'Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As alterações entram em vigor no próximo ciclo de cobrança.',
  },
  {
    question: 'Há período de teste gratuito?',
    answer: 'Oferecemos 14 dias de teste gratuito para todos os planos. Não é necessário cartão de crédito para começar.',
  },
  {
    question: 'Como funciona o suporte técnico?',
    answer: 'Oferecemos suporte via email para o plano Starter, suporte prioritário para o Pro e suporte dedicado 24/7 para Enterprise.',
  },
  {
    question: 'Os dados ficam seguros na plataforma?',
    answer: 'Sim, utilizamos criptografia de ponta a ponta e hospedagem em servidores com certificação SOC 2 Type II no Brasil.',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-headline mb-6">
            Planos que crescem com{' '}
            <span className="bg-gradient-to-r from-hoko-primary to-hoko-secondary bg-clip-text text-transparent">
              sua marca
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para suas necessidades. Sem surpresas, sem taxas ocultas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: plan.popular ? 1.02 : 1.01,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className={`relative group ${
                  plan.popular 
                    ? 'scale-105 z-10' 
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="gradient-brand text-white border-0 px-4 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <div className={`relative dark-block p-8 h-full transition-all duration-300 border ${
                  plan.popular 
                    ? 'border-hoko-primary/30 gradient-border shadow-brand' 
                    : 'hover:border-hoko-primary/20 hover:shadow-brand'
                }`}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      plan.popular ? 'gradient-brand' : 'bg-muted'
                    }`}>
                      <Icon className={`h-5 w-5 ${plan.popular ? 'text-white' : 'text-muted-foreground'}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                    {plan.savings && (
                      <p className="text-sm text-green-600 mt-1">{plan.savings}</p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.popular ? 'bg-hoko-primary/10' : 'bg-muted'
                        }`}>
                          <Check className={`h-3 w-3 ${
                            plan.popular ? 'text-hoko-primary' : 'text-muted-foreground'
                          }`} />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full magnetic ${
                      plan.popular 
                        ? 'gradient-brand text-white border-0' 
                        : 'variant-outline hover:bg-hoko-primary/10'
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Perguntas Frequentes</h3>
          <Accordion type="single" collapsible className="dark-block">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0 px-6">
                <AccordionTrigger className="py-4 text-left hover:text-hoko-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center dark-block-subtle rounded-full px-6 py-3">
            <div className="w-8 h-8 rounded-full gradient-brand flex items-center justify-center mr-3">
              <Check className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-medium text-foreground">Garantia de 30 dias - seu dinheiro de volta se não ficar satisfeito</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}