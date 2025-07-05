
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Film, Shield, Mail, Phone } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <Film className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">HSCA</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-blue-600 font-medium">About Us</Link>
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

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About HSCA</h1>
          <p className="text-xl text-gray-600">
            Celebrating excellence in cinematic arts education since 2009
          </p>
        </div>

        {/* Mission */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Honor Society of Cinematic Arts (HSCA) recognizes and celebrates academic excellence 
              in film, television, and digital media education. We foster a community of passionate 
              creators, scholars, and industry professionals dedicated to advancing the art and craft 
              of visual storytelling.
            </p>
          </CardContent>
        </Card>

        {/* Values */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Our Values</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Excellence</h3>
              <p className="text-gray-700">
                We recognize outstanding academic achievement and creative accomplishment in cinematic arts.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Community</h3>
              <p className="text-gray-700">
                We build lasting connections between students, educators, and industry professionals.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Integrity</h3>
              <p className="text-gray-700">
                We uphold the highest standards of academic and professional ethics in all our activities.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Innovation</h3>
              <p className="text-gray-700">
                We embrace new technologies and creative approaches to advance the field of cinematic arts.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Anti-Hazing Policy */}
        <Card className="mb-8 border-0 shadow-lg border-l-4 border-l-red-500">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-red-600" />
              <CardTitle className="text-2xl text-red-700">Anti-Hazing Policy</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Honor Society of Cinematic Arts has a strict zero-tolerance policy regarding hazing. 
              We are committed to providing a safe, respectful, and inclusive environment for all members.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Hazing is defined as:</strong> Any action or situation that recklessly or intentionally 
              endangers the mental or physical health or safety of a person or that willfully destroys or 
              removes public or private property for the purpose of initiation or admission into or affiliation 
              with, or as a condition for continued membership in, any organization.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Any incidents of hazing should be reported immediately to HSCA leadership. All reports will be 
              investigated thoroughly and appropriate action will be taken, up to and including revocation of 
              chapter status or individual membership.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Contact Us</CardTitle>
            <CardDescription>
              Have questions? We're here to help.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">info@hsca.org</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">1-800-HSCA-FLM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join?</h2>
          <p className="text-gray-600 mb-6">
            Become part of a community dedicated to excellence in cinematic arts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/register">Join HSCA</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/chapters">Find a Chapter</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
