'use client'

import { useState } from 'react'
import { TrendingUp, TrendingDown, DollarSign, Home, BarChart3, Calendar } from 'lucide-react'

interface MarketData {
  metric: string
  value: string
  change: string
  trend: 'up' | 'down' | 'stable'
  description: string
}

const marketData: MarketData[] = [
  {
    metric: 'Median Home Price',
    value: '$875,000',
    change: '+12.5%',
    trend: 'up',
    description: 'Year-over-year increase in West Summerlin'
  },
  {
    metric: 'Days on Market',
    value: '18',
    change: '-25%',
    trend: 'down',
    description: 'Properties selling faster than last year'
  },
  {
    metric: 'Inventory Level',
    value: '45',
    change: '-8%',
    trend: 'down',
    description: 'Available properties in the area'
  },
  {
    metric: 'Price per Sq Ft',
    value: '$285',
    change: '+9.2%',
    trend: 'up',
    description: 'Average cost per square foot'
  }
]

export default function MarketInsights() {
  const [selectedPeriod, setSelectedPeriod] = useState('1y')

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-5 h-5 text-green-500" />
      case 'down':
        return <TrendingDown className="w-5 h-5 text-red-500" />
      default:
        return <BarChart3 className="w-5 h-5 text-blue-500" />
    }
  }

  const getTrendColor = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return 'text-green-600'
      case 'down':
        return 'text-red-600'
      default:
        return 'text-blue-600'
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Market Insights
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Stay informed with the latest real estate trends and market data for West Summerlin. 
            Our expert analysis helps you make informed decisions.
          </p>
        </div>

        {/* Time Period Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-neutral-100 rounded-2xl p-2">
            {['3m', '6m', '1y', '2y'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedPeriod === period
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200'
                }`}
              >
                {period === '3m' && '3 Months'}
                {period === '6m' && '6 Months'}
                {period === '1y' && '1 Year'}
                {period === '2y' && '2 Years'}
              </button>
            ))}
          </div>
        </div>

        {/* Market Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {marketData.map((item, index) => (
            <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                {getTrendIcon(item.trend)}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {item.metric}
              </h3>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {item.value}
              </div>
              <div className={`text-sm font-medium mb-2 ${getTrendColor(item.trend)}`}>
                {item.change} from last year
              </div>
              <p className="text-sm text-neutral-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Market Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Price Trends */}
          <div className="card">
            <div className="flex items-center mb-6">
              <DollarSign className="w-8 h-8 text-primary-600 mr-3" />
              <h3 className="text-2xl font-bold text-neutral-900">Price Trends</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                <span className="text-neutral-600">Luxury Homes ($1M+)</span>
                <span className="font-semibold text-green-600">+15.2%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                <span className="text-neutral-600">Mid-Range ($500K-$1M)</span>
                <span className="font-semibold text-green-600">+11.8%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                <span className="text-neutral-600">Starter Homes ($300K-$500K)</span>
                <span className="font-semibold text-green-600">+8.9%</span>
              </div>
            </div>
          </div>

          {/* Neighborhood Insights */}
          <div className="card">
            <div className="flex items-center mb-6">
              <Home className="w-8 h-8 text-primary-600 mr-3" />
              <h3 className="text-2xl font-bold text-neutral-900">Neighborhood Insights</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                <span className="text-neutral-600">Red Rock Country Club</span>
                <span className="font-semibold text-green-600">Hot Market</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                <span className="text-neutral-600">The Ridges</span>
                <span className="font-semibold text-blue-600">Stable</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                <span className="text-neutral-600">Summerlin West</span>
                <span className="font-semibold text-green-600">Growing</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Get Your Free Market Report
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Receive detailed market analysis, property valuations, and investment opportunities 
              delivered to your inbox monthly.
            </p>
            <button className="btn-secondary text-lg px-8 py-4">
              Download Report
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
