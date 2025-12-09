'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import axios from 'axios'
import toast from 'react-hot-toast'
import Navbar from '@/components/Navbar'
import Editor from '@/components/Editor'
import { Clock, Share2, Copy } from 'lucide-react'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export default function SavedComparison() {
  const params = useParams()
  const router = useRouter()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchComparison = async () => {
      try {
        const response = await axios.get(`${API_URL}/view/${params.id}`)
        setData(response.data.data)
      } catch (error) {
        console.error('Fetch error:', error)
        toast.error('Comparison not found or expired!')
        setTimeout(() => router.push('/'), 2000)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchComparison()
    }
  }, [params.id, router])

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    toast.success('Link copied to clipboard! 🔗')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Loading comparison...</p>
        </div>
      </div>
    )
  }

  if (!data) {
    return null
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-8"
      >
        {/* Header */}
        <div className="glass rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold mb-2 gradient-text">
            {data.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {new Date(data.createdAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-opacity-80 text-white rounded-lg transition-all"
            >
              <Share2 className="w-4 h-4" />
              Share Link
            </button>
          </div>
        </div>

        {/* Comparison View */}
        <div className="grid md:grid-cols-2 gap-6">
          <Editor
            value={data.leftText}
            onChange={() => {}}
            title="Original Text"
            readOnly={true}
          />
          <Editor
            value={data.rightText}
            onChange={() => {}}
            title="Modified Text"
            readOnly={true}
          />
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => router.push('/')}
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-bold shadow-lg hover:shadow-xl"
          >
            🔥 Create New Comparison
          </button>
        </div>
      </motion.div>
    </div>
  )
}
