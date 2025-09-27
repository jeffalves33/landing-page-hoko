'use client';

import { motion } from 'framer-motion';
import { ChartBar as BarChart3, TrendingUp, Target, Users, Eye, Zap } from 'lucide-react';

export default function DashboardMockup() {
  return (
    <div className="relative">
      {/* Main Dashboard Container */}
      <motion.div
        className="relative dark-block p-6 shadow-2xl gradient-border"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Brand Health Dashboard</h3>
            <p className="text-sm text-muted-foreground">Visão 360° da sua marca</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-subtle"></div>
            <span className="text-xs text-muted-foreground">Ao vivo</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div
            className="bg-hoko-primary/10 rounded-xl p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-2">
              <Eye className="h-4 w-4 text-hoko-primary" />
              <span className="text-xs font-medium">Awareness</span>
            </div>
            <div className="text-2xl font-bold text-hoko-primary">87%</div>
            <div className="text-xs text-green-600 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% vs último mês
            </div>
          </motion.div>

          <motion.div
            className="bg-hoko-secondary/10 rounded-xl p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center space-x-2 mb-2">
              <Target className="h-4 w-4 text-hoko-secondary" />
              <span className="text-xs font-medium">Conversão</span>
            </div>
            <div className="text-2xl font-bold text-hoko-secondary">3.4%</div>
            <div className="text-xs text-green-600 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +0.8% vs último mês
            </div>
          </motion.div>
        </div>

        {/* Chart Area */}
        <motion.div
          className="bg-muted/20 rounded-xl p-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-foreground">Previsão de Performance</span>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </div>
          
          {/* Simulated Chart */}
          <div className="flex items-end space-x-1 h-20">
            {[40, 65, 45, 80, 70, 95, 85, 90, 100].map((height, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-t from-hoko-primary to-hoko-secondary rounded-t"
                style={{ height: `${height}%`, width: '12px' }}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 1 + index * 0.1 }}
              />
            ))}
          </div>
          
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>Jan</span>
            <span>Mar</span>
            <span>Mai</span>
            <span>Jul</span>
            <span>Set</span>
          </div>
        </motion.div>

        {/* Insights */}
        <motion.div
          className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex items-center space-x-2">
            <Zap className="h-4 w-4 text-amber-400" />
            <span className="text-xs font-medium text-amber-300">Insight Preditivo</span>
          </div>
          <p className="text-xs text-amber-200 mt-1">
            Baseado nos dados atuais, projeta-se um aumento de 23% no reconhecimento da marca nos próximos 3 meses.
          </p>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -top-4 -right-4 dark-block-subtle rounded-full p-3 shadow-lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Users className="h-5 w-5 text-hoko-primary" />
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -left-4 dark-block-subtle rounded-full p-3 shadow-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <TrendingUp className="h-5 w-5 text-hoko-secondary" />
      </motion.div>
    </div>
  );
}