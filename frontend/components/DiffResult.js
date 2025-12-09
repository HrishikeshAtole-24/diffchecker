'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus, CheckCircle } from 'lucide-react'

export default function DiffResult({ diffData, mode }) {
  if (!diffData || !diffData.diff) return null

  const { diff, stats } = diffData

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-lg p-6"
    >
      {/* Stats */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
          <TrendingUp className="w-5 h-5 text-green-400" />
          <span className="text-green-300 font-semibold">{stats.added} Added</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-lg">
          <TrendingDown className="w-5 h-5 text-red-400" />
          <span className="text-red-300 font-semibold">{stats.removed} Removed</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-500/20 border border-slate-500/30 rounded-lg">
          <Minus className="w-5 h-5 text-slate-400" />
          <span className="text-slate-300 font-semibold">{stats.unchanged} Unchanged</span>
        </div>
      </div>

      {/* Diff Display */}
      <div className="bg-slate-900/50 rounded-lg p-6 font-mono text-sm overflow-x-auto">
        <div className="flex items-center gap-2 mb-4 text-slate-400">
          <CheckCircle className="w-5 h-5 text-green-400" />
          <span>Comparison Result ({mode} mode)</span>
        </div>
        
        <div className="space-y-1">
          {diff.map((part, index) => {
            let className = 'px-3 py-2 rounded '
            let prefix = ''
            
            if (part.added) {
              className += 'diff-added text-green-200'
              prefix = '+ '
            } else if (part.removed) {
              className += 'diff-removed text-red-200'
              prefix = '- '
            } else {
              className += 'diff-unchanged text-slate-300'
              prefix = '  '
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: part.added ? 20 : part.removed ? -20 : 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.02 }}
                className={className}
              >
                <span className="select-none text-slate-500">{prefix}</span>
                {part.value}
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
