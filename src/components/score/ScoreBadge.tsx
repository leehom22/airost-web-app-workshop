"use client"
import React from 'react'

interface ScoreBadgeProps {
    score: number
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({score}) => {
    let badgeColor:string = '';
    let badgeText: string = ''

    if(score > 70) {
        badgeColor = 'bg-badge-green text-green-600'
        badgeText = 'Strong'
    } else if (score > 49){
        badgeColor = 'bg-badge-yellow text-green-600'
        badgeText = 'Good Start'
    } else {
        badgeColor = 'bg-badge-red text-green-600'
        badgeText = 'Needs Work'
    }

  return (
    <div className={`px-3 py-1 md:rounded-full rounded-lg w-20 md:w-auto ${badgeColor}`}>
        <p className='md:text-sm text-xs text-center font-medium'>{badgeText}</p>
    </div>
  )
}

export default ScoreBadge


