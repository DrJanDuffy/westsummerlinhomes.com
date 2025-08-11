import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getHomeByMLS } from '../../../lib/homes';

interface HomePageProps {
  params: {
    id: string;
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const home = await getHomeByMLS(params.id);
  
  if (!home) {
    notFound();
  }

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
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          ← Back to All Homes
        </Link>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {home.address}
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          {home.city}, {home.state} {home.zip}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>MLS: {home.mlsNumber}</span>
          <span>•</span>
          <span>Updated: {formatDate(home.lastUpdated)}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Main Image */}
          <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden mb-6">
            <Image
              src={home.imageUrl}
              alt={`${home.address} - ${home.city}, ${home.state}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                home.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {home.status}
              </span>
            </div>
          </div>

          {/* Property Details */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Details</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{home.beds}</div>
                <div className="text-sm text-gray-600">Bedrooms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{home.baths}</div>
                <div className="text-sm text-gray-600">Bathrooms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{home.sqft.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Square Feet</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{home.yearBuilt}</div>
                <div className="text-sm text-gray-600">Year Built</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed">{home.description}</p>
          </div>

          {/* Features */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {home.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Price Card */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-4">
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {formatPrice(home.price)}
              </div>
              <div className="text-sm text-gray-600">
                {home.propertyType}
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message (optional)"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Contact Agent
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Property Type:</span>
                <span className="font-medium">{home.propertyType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="font-medium">{home.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">MLS Number:</span>
                <span className="font-medium">{home.mlsNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Last Updated:</span>
                <span className="font-medium">{formatDate(home.lastUpdated)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
