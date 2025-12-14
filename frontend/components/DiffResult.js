'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Minus, CheckCircle } from 'lucide-react'

export default function DiffResult({ diffData, mode, leftText, rightText }) {
  if (!diffData || !diffData.diff) return null

  const { diff, stats } = diffData

  // Process diff for side-by-side view
  const processedDiff = {
    left: [],
    right: []
  }

  diff.forEach((part) => {
    if (part.removed) {
      // Show in left panel (removed from original)
      processedDiff.left.push({ value: part.value, type: 'removed' })
    } else if (part.added) {
      // Show in right panel (added to modified)
      processedDiff.right.push({ value: part.value, type: 'added' })
    } else {
      // Show in both panels (unchanged)
      processedDiff.left.push({ value: part.value, type: 'unchanged' })
      processedDiff.right.push({ value: part.value, type: 'unchanged' })
    }
  })

  return (
    <div className="glass rounded-lg p-6">
      {/* Header & Stats */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-400" />
          <h2 className="text-2xl font-bold gradient-text">Comparison Result</h2>
          <span className="text-sm text-slate-400">({mode} mode)</span>
        </div>
      </div>

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

      {/* Side-by-Side Comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Panel - Original */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass rounded-lg overflow-hidden"
        >
          <div className="bg-slate-900/50 px-4 py-3 border-b border-red-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <h3 className="font-semibold text-slate-200">Original Text</h3>
            </div>
          </div>
          <div className="bg-slate-900/30 p-4 font-mono text-sm overflow-auto max-h-96">
            <pre className="whitespace-pre-wrap break-words">
              {processedDiff.left.map((part, index) => (
                <span
                  key={index}
                  className={
                    part.type === 'removed'
                      ? 'bg-red-500/20 text-red-200 px-1 rounded'
                      : part.type === 'unchanged'
                      ? 'text-slate-300'
                      : ''
                  }
                >
                  {part.value}
                </span>
              ))}
            </pre>
          </div>
        </motion.div>

        {/* Right Panel - Modified */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass rounded-lg overflow-hidden"
        >
          <div className="bg-slate-900/50 px-4 py-3 border-b border-green-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <h3 className="font-semibold text-slate-200">Modified Text</h3>
            </div>
          </div>
          <div className="bg-slate-900/30 p-4 font-mono text-sm overflow-auto max-h-96">
            <pre className="whitespace-pre-wrap break-words">
              {processedDiff.right.map((part, index) => (
                <span
                  key={index}
                  className={
                    part.type === 'added'
                      ? 'bg-green-500/20 text-green-200 px-1 rounded'
                      : part.type === 'unchanged'
                      ? 'text-slate-300'
                      : ''
                  }
                >
                  {part.value}
                </span>
              ))}
            </pre>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
