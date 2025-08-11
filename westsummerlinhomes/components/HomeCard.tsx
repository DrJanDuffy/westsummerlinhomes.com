import Image from 'next/image';
import Link from 'next/link';
import { Home } from '../lib/homes';

interface HomeCardProps extends Home {}

export default function HomeCard({
  mlsNumber,
  address,
  city,
  state,
  zip,
  price,
  beds,
  baths,
  sqft,
  yearBuilt,
  propertyType,
  status,
  imageUrl,
  description,
  features,
  lastUpdated
}: HomeCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-64 bg-gray-200">
        <Image
          src={imageUrl}
          alt={`${address} - ${city}, ${state}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
            status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          }`}>
            {status}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
            MLS: {mlsNumber}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Price */}
        <div className="mb-3">
          <span className="text-2xl font-bold text-gray-900">
            {formatPrice(price)}
          </span>
        </div>

        {/* Address */}
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {address}
          </h3>
          <p className="text-gray-600">
            {city}, {state} {zip}
          </p>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {beds} beds
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              {baths} baths
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              {sqft.toLocaleString()} sqft
            </span>
          </div>
          <span className="text-gray-500">
            Built {yearBuilt}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
              >
                {feature}
              </span>
            ))}
            {features.length > 3 && (
              <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                +{features.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Property Type */}
        <div className="mb-4">
          <span className="text-sm text-gray-600">
            {propertyType}
          </span>
        </div>

        {/* Last Updated */}
        <div className="text-xs text-gray-500 mb-4">
          Updated: {formatDate(lastUpdated)}
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <Link
            href={`/homes/${mlsNumber}`}
            className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            View Details
          </Link>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
}
