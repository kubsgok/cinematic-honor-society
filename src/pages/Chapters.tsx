
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Film, MapPin, Search, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Chapters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showApplication, setShowApplication] = useState(false);
  const { toast } = useToast();

  // Mock chapter data
  const chapters = [
    { id: 1, school: "University of Southern California", state: "California", members: 45, status: "Active" },
    { id: 2, school: "New York University", state: "New York", members: 38, status: "Active" },
    { id: 3, school: "UCLA", state: "California", members: 42, status: "Active" },
    { id: 4, school: "Georgia Southern University", state: "Georgia", members: 28, status: "Active" },
    { id: 5, school: "University of Texas at Austin", state: "Texas", members: 35, status: "Active" },
  ];

  const filteredChapters = chapters.filter(chapter =>
    chapter.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chapter.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your chapter application and get back to you within 5-7 business days.",
    });
    setShowApplication(false);
  };

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
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</Link>
              <Link to="/chapters" className="text-blue-600 font-medium">Become a Chapter</Link>
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

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find or Start a Chapter</h1>
          <p className="text-xl text-gray-600">
            Connect with HSCA chapters across the country or start one at your school
          </p>
        </div>

        {/* Search and Actions */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search by school or state..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button 
            onClick={() => setShowApplication(!showApplication)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Start New Chapter
          </Button>
        </div>

        {/* Chapter Application Form */}
        {showApplication && (
          <Card className="mb-8 border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Start a New Chapter</CardTitle>
              <CardDescription>
                Fill out this form to begin the process of establishing an HSCA chapter at your school.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleApplicationSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="school">School Name</Label>
                    <Input id="school" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="california">California</SelectItem>
                        <SelectItem value="texas">Texas</SelectItem>
                        <SelectItem value="newyork">New York</SelectItem>
                        {/* Add more states as needed */}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Contact Name</Label>
                    <Input id="contact-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Contact Email</Label>
                    <Input id="contact-email" type="email" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="program-details">Film Program Details</Label>
                  <Textarea 
                    id="program-details" 
                    placeholder="Tell us about your school's film/cinema program..."
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="why-hsca">Why HSCA?</Label>
                  <Textarea 
                    id="why-hsca" 
                    placeholder="Why do you want to start an HSCA chapter at your school?"
                    required 
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    Submit Application
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowApplication(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Chapter Directory */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Active Chapters</h2>
          
          <div className="grid gap-6">
            {filteredChapters.map((chapter) => (
              <Card key={chapter.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{chapter.school}</CardTitle>
                      <CardDescription className="flex items-center mt-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {chapter.state}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        {chapter.members} members
                      </div>
                      <div className="mt-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {chapter.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">
                      Celebrating excellence in cinematic arts education
                    </p>
                    <Button variant="outline" size="sm">
                      Contact Chapter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredChapters.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No chapters found matching your search.</p>
              <Button onClick={() => setShowApplication(true)}>
                Start a Chapter at Your School
              </Button>
            </div>
          )}
        </div>

        {/* Requirements */}
        <Card className="mt-12 border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Chapter Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">To Start a Chapter:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Accredited film/cinema program</li>
                  <li>• Faculty advisor commitment</li>
                  <li>• Minimum 15 founding members</li>
                  <li>• Student organization approval</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Member Benefits:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Academic recognition</li>
                  <li>• Networking opportunities</li>
                  <li>• Educational resources</li>
                  <li>• Industry connections</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chapters;
