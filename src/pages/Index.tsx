
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Film, Users, Award, BookOpen, MapPin, Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Film className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">HSCA</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</Link>
              <Link to="/chapters" className="text-gray-700 hover:text-blue-600 transition-colors">Become a Chapter</Link>
              <Link to="/newsletter" className="text-gray-700 hover:text-blue-600 transition-colors">Newsletter</Link>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Join</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Honor Society of Cinematic Arts
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Celebrating Excellence in
            <span className="text-blue-600 block">Cinematic Arts</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join a prestigious community of film students, creators, and industry professionals 
            dedicated to advancing the art and craft of cinema.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/chapters">Start a Chapter</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join HSCA?</h2>
            <p className="text-lg text-gray-600">Unlock opportunities and resources for your cinematic journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Recognition</CardTitle>
                <CardDescription>
                  Earn recognition for your academic achievements and creative contributions to cinema
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Community</CardTitle>
                <CardDescription>
                  Connect with fellow film students and industry professionals across the country
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Resources</CardTitle>
                <CardDescription>
                  Access exclusive educational materials, workshops, and industry insights
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-100">Active Chapters</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-blue-100">Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">States</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-blue-100">Years Strong</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're looking to join an existing chapter or start a new one at your school, 
            we're here to support your journey in cinematic arts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/register">Join Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/chapters">Find Chapters</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Film className="h-8 w-8" />
                <span className="text-xl font-bold">HSCA</span>
              </div>
              <p className="text-gray-400">
                Honor Society of Cinematic Arts - Celebrating excellence in film education.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</Link>
                <Link to="/chapters" className="block text-gray-400 hover:text-white transition-colors">Chapters</Link>
                <Link to="/newsletter" className="block text-gray-400 hover:text-white transition-colors">Newsletter</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Members</h3>
              <div className="space-y-2">
                <Link to="/login" className="block text-gray-400 hover:text-white transition-colors">Login</Link>
                <Link to="/profile" className="block text-gray-400 hover:text-white transition-colors">Profile</Link>
                <Link to="/dashboard" className="block text-gray-400 hover:text-white transition-colors">Dashboard</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">info@hsca.org</p>
              <p className="text-gray-400">1-800-HSCA-FLM</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Honor Society of Cinematic Arts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
