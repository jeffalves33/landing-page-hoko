'use client';

import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Heart, TrendingUp, Target, FileText, Info } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Brand Health Track',
    description: 'Monitore reconhecimento, percepção e reputação em tempo real.',
    example: 'Track de 15+ métricas incluindo share of voice, sentiment e recall espontâneo',
    color: 'hoko-primary',
  },
  {
    icon: TrendingUp,
    title: 'Predições de Marketing',
    description: 'Antecipe resultados e direcione investimentos com segurança.',
    example: 'Predição de CPL, CAC e LTV com 95% de precisão para os próximos 90 dias',
    color: 'hoko-secondary',
  },
  {
    icon: Target,
    title: 'Gestão de Objetivos de Marca',
    description: 'Conecte dados a awareness, educação e leads.',
    example: 'Dashboard executivo com KPIs personalizados e alertas automáticos',
    color: 'hoko-tertiary',
  },
  {
    icon: FileText,
    title: 'Relatórios Automatizados',
    description: 'Claros para diretoria e investidores.',
    example: 'Relatórios white-label personalizados, enviados automaticamente',
    color: 'hoko-primary',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-headline mb-6">
            Funcionalidades que transformam{' '}
            <span className="bg-gradient-to-r from-hoko-primary to-hoko-secondary bg-clip-text text-transparent">
              dados em decisões
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa plataforma combina inteligência artificial avançada com expertise em branding para entregar insights únicos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group"
              >
                <div className="relative dark-block p-8 h-full hover:shadow-brand transition-all duration-500 border gradient-border">
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-hoko-primary via-hoko-secondary to-hoko-tertiary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-${feature.color}/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-7 w-7 text-${feature.color}`} />
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-hoko-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="opacity-60 hover:opacity-100 transition-opacity">
                              <Info className="h-4 w-4" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">{feature.example}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Interactive elements */}
                    <div className="mt-6 pt-6 border-t border-muted/20">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Status:</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-subtle"></div>
                          <span className="text-green-600 font-medium">Disponível</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 dark-block p-8"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-hoko-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Fontes de dados integradas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-hoko-secondary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoramento em tempo real</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-hoko-tertiary mb-2">API</div>
              <div className="text-sm text-muted-foreground">Integração completa</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}