"use client"

import type React from "react"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Search,
  MapPin,
  ChevronDown,
  Heart,
  Car,
  Bike,
  Home,
  Package,
  Truck,
  Bus,
  Tractor,
  Menu,
  Briefcase,
} from "lucide-react"
import { initializeVehicles, isFavorite, addToFavorites, removeFromFavorites } from "@/lib/storage"
import { InstallPrompt } from "@/components/install-prompt"

export default function LandingPage() {
  useEffect(() => {
    const defaultVehicles = [
      {
        id: 1,
        price: "Rs 1.85 Lac",
        title: "Honda CD 70 2023 Model",
        details: "2023 • 2,500 km • Petrol",
        location: "Gulberg 3, Lahore",
        time: "1 week ago",
        image: "https://placehold.co/300x300?text=Red+Honda+CD+70+motorcycle",
        category: "motorcycles",
      },
      {
        id: 2,
        price: "Rs 3.25 Lac",
        title: "Yamaha YBR 125 G 2022",
        details: "2022 • 8,000 km • Petrol",
        location: "Model Town, Karachi",
        time: "2 weeks ago",
        image: "https://placehold.co/300x300?text=Black+Yamaha+YBR+125",
        category: "motorcycles",
      },
      {
        id: 3,
        price: "Rs 2.10 Lac",
        title: "Suzuki GS 150 SE 2021 Excellent Condition",
        details: "2021 • 12,000 km • Petrol",
        location: "Johar Town, Lahore",
        time: "3 days ago",
        image: "https://placehold.co/300x300?text=Blue+Suzuki+GS+150",
        category: "motorcycles",
      },
      {
        id: 4,
        price: "Rs 5.50 Lac",
        title: "Honda CB 150F 2023 Brand New",
        details: "2023 • NEW • Petrol",
        location: "Clifton, Karachi",
        time: "5 days ago",
        image: "https://placehold.co/300x300?text=White+Honda+CB+150F",
        category: "motorcycles",
      },
      {
        id: 5,
        price: "Rs 6.20 Lac",
        title: "Suzuki Mehran VXR 2005",
        details: "2005 • 79,999 km • Petrol",
        location: "Federal B Area, Karachi",
        time: "5 days ago",
        image: "https://placehold.co/400x300?text=Silver+Suzuki+Mehran+compact+car",
        category: "cars",
      },
      {
        id: 6,
        price: "Rs 41 Lacs",
        title: "Daihatsu Mira 2022",
        details: "2022 • NEW • Petrol",
        location: "PECHS, Karachi",
        time: "3 weeks ago",
        image: "https://placehold.co/400x300?text=Red+Daihatsu+Mira+hatchback",
        category: "cars",
      },
      {
        id: 7,
        price: "Rs 48 Lacs",
        title: "Toyota Yaris Ativ X 1.5",
        details: "2021 • 75,000 km • Petrol",
        location: "Malir Cantonment, Karachi",
        time: "3 weeks ago",
        image: "https://placehold.co/400x300?text=White+Toyota+Yaris+sedan",
        category: "cars",
      },
      {
        id: 8,
        price: "Rs 12.50 Lacs",
        title: "Suzuki Mehran VXR 2017 Model Excellent Condition",
        details: "2017 • 95,999 km • Petrol",
        location: "Nasheman-e-Iqbal, Lahore",
        time: "5 days ago",
        image: "https://placehold.co/400x300?text=Grey+Suzuki+Mehran+compact",
        category: "cars",
      },
    ]
    initializeVehicles(defaultVehicles)
  }, [])

  const categories = [
    { icon: Car, name: "Cars", link: "/browse?category=cars" },
    { icon: Bike, name: "Motorcycles", link: "/browse?category=motorcycles" },
    { icon: Truck, name: "Trucks", link: "/browse?category=trucks" },
    { icon: Bus, name: "Vans & Buses", link: "/browse?category=vans" },
    { icon: Truck, name: "Pickup Trucks", link: "/browse?category=pickups" },
    { icon: Car, name: "SUVs", link: "/browse?category=suvs" },
    { icon: Car, name: "Sedans", link: "/browse?category=sedans" },
    { icon: Car, name: "Hatchbacks", link: "/browse?category=hatchbacks" },
    { icon: Tractor, name: "Heavy Equipment", link: "/browse?category=heavy" },
    { icon: Bike, name: "Scooters", link: "/browse?category=scooters" },
    { icon: Truck, name: "Mini Trucks", link: "/browse?category=mini-trucks" },
    { icon: Car, name: "Electric Vehicles", link: "/browse?category=electric" },
  ]

  const motorcycles = [
    {
      id: 1,
      price: "Rs 1.85 Lac",
      title: "Honda CD 70 2023 Model",
      details: "2023 • 2,500 km • Petrol",
      location: "Gulberg 3, Lahore",
      time: "1 week ago",
      image: "https://placehold.co/300x300?text=Red+Honda+CD+70+motorcycle",
    },
    {
      id: 2,
      price: "Rs 3.25 Lac",
      title: "Yamaha YBR 125 G 2022",
      details: "2022 • 8,000 km • Petrol",
      location: "Model Town, Karachi",
      time: "2 weeks ago",
      image: "https://placehold.co/300x300?text=Black+Yamaha+YBR+125",
    },
    {
      id: 3,
      price: "Rs 2.10 Lac",
      title: "Suzuki GS 150 SE 2021 Excellent Condition",
      details: "2021 • 12,000 km • Petrol",
      location: "Johar Town, Lahore",
      time: "3 days ago",
      image: "https://placehold.co/300x300?text=Blue+Suzuki+GS+150",
    },
    {
      id: 4,
      price: "Rs 5.50 Lac",
      title: "Honda CB 150F 2023 Brand New",
      details: "2023 • NEW • Petrol",
      location: "Clifton, Karachi",
      time: "5 days ago",
      image: "https://placehold.co/300x300?text=White+Honda+CB+150F",
    },
  ]

  const cars = [
    {
      id: 5,
      price: "Rs 6.20 Lac",
      title: "Suzuki Mehran VXR 2005",
      details: "2005 • 79,999 km • Petrol",
      location: "Federal B Area, Karachi",
      time: "5 days ago",
      image: "https://placehold.co/400x300?text=Silver+Suzuki+Mehran+compact+car",
    },
    {
      id: 6,
      price: "Rs 41 Lacs",
      title: "Daihatsu Mira 2022",
      details: "2022 • NEW • Petrol",
      location: "PECHS, Karachi",
      time: "3 weeks ago",
      image: "https://placehold.co/400x300?text=Red+Daihatsu+Mira+hatchback",
    },
    {
      id: 7,
      price: "Rs 48 Lacs",
      title: "Toyota Yaris Ativ X 1.5",
      details: "2021 • 75,000 km • Petrol",
      location: "Malir Cantonment, Karachi",
      time: "3 weeks ago",
      image: "https://placehold.co/400x300?text=White+Toyota+Yaris+sedan",
    },
    {
      id: 8,
      price: "Rs 12.50 Lacs",
      title: "Suzuki Mehran VXR 2017 Model Excellent Condition",
      details: "2017 • 95,999 km • Petrol",
      location: "Nasheman-e-Iqbal, Lahore",
      time: "5 days ago",
      image: "https://placehold.co/400x300?text=Grey+Suzuki+Mehran+compact",
    },
  ]

  const handleToggleFavorite = (e: React.MouseEvent, vehicleId: number) => {
    e.preventDefault()
    e.stopPropagation()

    if (isFavorite(vehicleId)) {
      removeFromFavorites(vehicleId)
    } else {
      addToFavorites(vehicleId)
    }

    // Force re-render
    window.dispatchEvent(new Event("storage"))
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Mobile Header - OLX Style with Dark Theme */}
      <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
        <div className="px-4 py-3">
          {/* Top row with logo and sell button */}
          <div className="flex items-center justify-between mb-3">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/images/api-attachments-syjsa3iicva6xfzw8z90i.png"
                alt="ZamWheels logo with steering wheel and brand colors"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <Link href="/sell">
              <Button className="bg-[#EF7D00] hover:bg-[#d66e00] text-white font-semibold px-6 rounded-full">
                + SELL
              </Button>
            </Link>
          </div>

          {/* Location and Search */}
          <div className="flex gap-2 mb-3">
            <Button
              variant="outline"
              className="flex items-center gap-2 text-sm border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-white px-3"
            >
              <MapPin className="h-4 w-4" />
              <span className="font-normal">Zambia</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <Input
                placeholder="Find Cars, Bikes, Trucks and more..."
                className="pl-10 border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-500 h-10 text-sm"
              />
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide -mx-4 px-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-sm font-medium whitespace-nowrap h-8 px-3 hover:bg-zinc-800 text-white"
            >
              All Vehicles
              <ChevronDown className="h-3 w-3 ml-1" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm whitespace-nowrap h-8 px-3 hover:bg-zinc-800 text-zinc-300"
            >
              Cars
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm whitespace-nowrap h-8 px-3 hover:bg-zinc-800 text-zinc-300"
            >
              Motorcycles
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm whitespace-nowrap h-8 px-3 hover:bg-zinc-800 text-zinc-300"
            >
              Trucks
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-sm whitespace-nowrap h-8 px-3 hover:bg-zinc-800 text-zinc-300"
            >
              Vans
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20">
        {/* Banner - simplified for mobile */}
        <div className="bg-gradient-to-r from-[#198A00] to-[#157000] px-4 py-6 text-white">
          <h2 className="text-lg font-bold mb-1">Find Your Perfect Vehicle</h2>
          <p className="text-sm opacity-90">Browse thousands of listings</p>
        </div>

        {/* Categories Grid */}
        <section className="bg-zinc-900 px-4 py-6 mb-2">
          <h3 className="text-lg font-bold mb-4 text-white">Vehicle Categories</h3>
          <div className="grid grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.link}
                className="flex flex-col items-center text-center gap-2 group"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                  <category.icon className="h-6 w-6 text-zinc-200" />
                </div>
                <span className="text-xs text-zinc-300 leading-tight line-clamp-2">{category.name}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-zinc-900 px-4 py-6 mb-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Motorcycles</h3>
            <Link href="/browse?category=motorcycles" className="text-[#198A00] text-sm font-medium">
              View More
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {motorcycles.map((bike) => (
              <Link key={bike.id} href={`/listing/${bike.id}`}>
                <Card className="overflow-hidden hover:shadow-md transition-shadow border border-zinc-800 bg-zinc-800">
                  <div className="relative aspect-square bg-zinc-700">
                    <img
                      src={bike.image || "/placeholder.svg"}
                      alt={bike.title}
                      className="w-full h-full object-cover"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-2 right-2 h-7 w-7 rounded-full bg-black/60 hover:bg-black/80"
                      onClick={(e) => handleToggleFavorite(e, bike.id)}
                    >
                      <Heart
                        className={`h-4 w-4 ${isFavorite(bike.id) ? "text-[#DE2010] fill-[#DE2010]" : "text-white"}`}
                      />
                    </Button>
                  </div>
                  <CardContent className="p-3">
                    <div className="text-base font-bold mb-1 text-white">{bike.price}</div>
                    <div className="text-xs text-zinc-200 line-clamp-2 mb-1 leading-tight">{bike.title}</div>
                    <div className="text-xs text-zinc-400 mb-2">{bike.details}</div>
                    <div className="text-xs text-zinc-500">{bike.location}</div>
                    <div className="text-xs text-zinc-600">{bike.time}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Cars Section */}
        <section className="bg-zinc-900 px-4 py-6 mb-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Cars</h3>
            <Link href="/browse?category=cars" className="text-[#198A00] text-sm font-medium">
              View More
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {cars.map((car) => (
              <Link key={car.id} href={`/listing/${car.id}`}>
                <Card className="overflow-hidden hover:shadow-md transition-shadow border border-zinc-800 bg-zinc-800">
                  <div className="relative aspect-[4/3] bg-zinc-700">
                    <img src={car.image || "/placeholder.svg"} alt={car.title} className="w-full h-full object-cover" />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-2 right-2 h-7 w-7 rounded-full bg-black/60 hover:bg-black/80"
                      onClick={(e) => handleToggleFavorite(e, car.id)}
                    >
                      <Heart
                        className={`h-4 w-4 ${isFavorite(car.id) ? "text-[#DE2010] fill-[#DE2010]" : "text-white"}`}
                      />
                    </Button>
                  </div>
                  <CardContent className="p-3">
                    <div className="text-base font-bold mb-1 text-white">{car.price}</div>
                    <div className="text-xs text-zinc-200 line-clamp-2 mb-1 leading-tight">{car.title}</div>
                    <div className="text-xs text-zinc-400 mb-2">{car.details}</div>
                    <div className="text-xs text-zinc-500">{car.location}</div>
                    <div className="text-xs text-zinc-600">{car.time}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Trust badges section */}
        <section className="bg-zinc-900 px-4 py-6 mb-2">
          <h3 className="text-lg font-bold mb-4 text-white">Why Choose ZamWheels?</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#198A00]/20 flex items-center justify-center flex-shrink-0">
                <Car className="h-5 w-5 text-[#198A00]" />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1 text-white">Verified Sellers</h4>
                <p className="text-xs text-zinc-400">All sellers verified with ID checks</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EF7D00]/20 flex items-center justify-center flex-shrink-0">
                <Package className="h-5 w-5 text-[#EF7D00]" />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1 text-white">Inspection Reports</h4>
                <p className="text-xs text-zinc-400">Professional vehicle inspections available</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#198A00]/20 flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-5 w-5 text-[#198A00]" />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1 text-white">Trusted Dealers</h4>
                <p className="text-xs text-zinc-400">500+ verified dealerships nationwide</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 z-50">
        <div className="flex items-center justify-around py-2">
          <Link href="/" className="flex flex-col items-center gap-1 py-2 px-4">
            <Home className="h-5 w-5 text-[#198A00]" />
            <span className="text-xs font-medium text-[#198A00]">Home</span>
          </Link>
          <Link href="/browse" className="flex flex-col items-center gap-1 py-2 px-4">
            <Search className="h-5 w-5 text-zinc-400" />
            <span className="text-xs text-zinc-400">Browse</span>
          </Link>
          <Link href="/sell" className="flex flex-col items-center gap-1 -mt-4 bg-[#EF7D00] rounded-full p-3 shadow-lg">
            <Package className="h-6 w-6 text-white" />
          </Link>
          <Link href="/favorites" className="flex flex-col items-center gap-1 py-2 px-4">
            <Heart className="h-5 w-5 text-zinc-400" />
            <span className="text-xs text-zinc-400">Favorites</span>
          </Link>
          <Link href="/account" className="flex flex-col items-center gap-1 py-2 px-4">
            <Menu className="h-5 w-5 text-zinc-400" />
            <span className="text-xs text-zinc-400">Account</span>
          </Link>
        </div>
      </nav>

      <InstallPrompt />
    </div>
  )
}
