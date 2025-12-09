import { diffLines, diffWords, diffChars } from 'diff';
import { nanoid } from 'nanoid';
import Comparison from '../models/comparisonModel.js';

// Compare text without saving
export const compareDiff = async (req, res) => {
  try {
    const { leftText, rightText, mode = 'lines' } = req.body;

    if (!leftText || !rightText) {
      return res.status(400).json({ 
        success: false, 
        message: 'Both left and right text are required' 
      });
    }

    let diffResult;
    
    switch (mode) {
      case 'words':
        diffResult = diffWords(leftText, rightText);
        break;
      case 'chars':
        diffResult = diffChars(leftText, rightText);
        break;
      case 'lines':
      default:
        diffResult = diffLines(leftText, rightText);
        break;
    }

    // Calculate statistics
    let added = 0, removed = 0, unchanged = 0;
    diffResult.forEach(part => {
      if (part.added) added++;
      else if (part.removed) removed++;
      else unchanged++;
    });

    res.json({
      success: true,
      data: {
        diff: diffResult,
        stats: { added, removed, unchanged }
      }
    });

  } catch (error) {
    console.error('Diff comparison error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error comparing texts' 
    });
  }
};

// Save comparison and generate shareable link
export const saveComparison = async (req, res) => {
  try {
    const { leftText, rightText, title, language } = req.body;

    if (!leftText || !rightText) {
      return res.status(400).json({ 
        success: false, 
        message: 'Both left and right text are required' 
      });
    }

    const shareId = nanoid(10); // Generate unique ID

    const comparison = await Comparison.create({
      shareId,
      leftText,
      rightText,
      title: title || 'Untitled Comparison',
      language: language || 'text'
    });

    res.status(201).json({
      success: true,
      data: {
        shareId: comparison.shareId,
        shareUrl: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/saved/${comparison.shareId}`,
        message: 'Comparison saved successfully!'
      }
    });

  } catch (error) {
    console.error('Save comparison error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error saving comparison' 
    });
  }
};

// Get saved comparison by ID
export const getComparison = async (req, res) => {
  try {
    const { id } = req.params;

    const comparison = await Comparison.findOne({ shareId: id });

    if (!comparison) {
      return res.status(404).json({ 
        success: false, 
        message: 'Comparison not found or expired' 
      });
    }

    res.json({
      success: true,
      data: {
        leftText: comparison.leftText,
        rightText: comparison.rightText,
        title: comparison.title,
        language: comparison.language,
        createdAt: comparison.createdAt
      }
    });

  } catch (error) {
    console.error('Get comparison error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error retrieving comparison' 
    });
  }
};

// Get recent comparisons count (optional analytics)
export const getStats = async (req, res) => {
  try {
    const totalComparisons = await Comparison.countDocuments();
    const todayComparisons = await Comparison.countDocuments({
      createdAt: { 
        $gte: new Date(new Date().setHours(0, 0, 0, 0)) 
      }
    });

    res.json({
      success: true,
      data: {
        total: totalComparisons,
        today: todayComparisons
      }
    });

  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error retrieving stats' 
    });
  }
};
