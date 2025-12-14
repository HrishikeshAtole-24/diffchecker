'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Editor from '@/components/Editor'
import DiffResult from '@/components/DiffResult'
import SaveModal from '@/components/SaveModal'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Code2, Zap } from 'lucide-react'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export default function Home() {
  const [leftText, setLeftText] = useState('')
  const [rightText, setRightText] = useState('')
  const [diffResult, setDiffResult] = useState(null)
  const [isComparing, setIsComparing] = useState(false)
  const [showSaveModal, setShowSaveModal] = useState(false)
  const [mode, setMode] = useState('lines') // lines, words, chars

  const handleCompare = async () => {
    if (!leftText.trim() || !rightText.trim()) {
      toast.error('Please enter text in both editors!')
      return
    }

    setIsComparing(true)
    
    try {
      const response = await axios.post(`${API_URL}/diff`, {
        leftText,
        rightText,
        mode
      })

      setDiffResult(response.data.data)
      toast.success('Comparison complete! 🎉')
    } catch (error) {
      console.error('Comparison error:', error)
      toast.error('Failed to compare texts')
    } finally {
      setIsComparing(false)
    }
  }

  const handleClear = () => {
    setLeftText('')
    setRightText('')
    setDiffResult(null)
    toast.success('Cleared!')
  }

  const handleSave = () => {
    if (!leftText.trim() || !rightText.trim()) {
      toast.error('Nothing to save!')
      return
    }
    setShowSaveModal(true)
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12 px-4"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
            DiffChecker
          </h1>
          <p className="text-xl text-slate-400 mb-2">
            Compare. Analyze. Save. ⚡
          </p>
          <p className="text-sm text-slate-500">
            The most aesthetic diff tool you've ever used
          </p>
        </motion.div>

        {/* Mode Selector */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-3 mt-8"
        >
          {['lines', 'words', 'chars'].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                mode === m
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {m.charAt(0).toUpperCase() + m.slice(1)}
            </button>
          ))}
        </motion.div>
      </motion.div>

      {/* Editors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="container mx-auto px-4 pb-8"
      >
        {/* Diff Result - Show FIRST if Available */}
        {diffResult && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <DiffResult 
              diffData={diffResult} 
              mode={mode}
              leftText={leftText}
              rightText={rightText}
            />
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCompare}
            disabled={isComparing}
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-bold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isComparing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Comparing...
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                Compare Now
              </>
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSave}
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold shadow-lg hover:shadow-xl"
          >
            💾 Save & Share
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClear}
            className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl"
          >
            🗑️ Clear All
          </motion.button>
        </div>

        {/* Editable Editors - Always visible at bottom */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Editor
            value={leftText}
            onChange={setLeftText}
            title="Original Text"
            icon={<Code2 className="w-5 h-5" />}
          />
          <Editor
            value={rightText}
            onChange={setRightText}
            title="Modified Text"
            icon={<Zap className="w-5 h-5" />}
          />
        </div>
      </motion.div>

      {/* Save Modal */}
      {showSaveModal && (
        <SaveModal
          leftText={leftText}
          rightText={rightText}
          onClose={() => setShowSaveModal(false)}
        />
      )}
    </div>
  )
}
