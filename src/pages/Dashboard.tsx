
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Film, Users, Award, Calendar, User, LogOut } from "lucide-react";

const Dashboard = () => {
  const [user] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@usc.edu",
    school: "University of Southern California",
    chapter: "USC Chapter",
    role: "Member",
    points: 12,
    filmMinutes: 15,
    inductionStatus: "Inducted",
    graduationYear: "2025"
  });

  const [chapterMembers] = useState([
    { id: 1, name: "Alex Chen", role: "President", points: 18, filmMinutes: 25, status: "Inducted" },
    { id: 2, name: "Maria Rodriguez", role: "Vice President", points: 16, filmMinutes: 22, status: "Inducted" },
    { id: 3, name: "David Kim", role: "Member", points: 8, filmMinutes: 12, status: "Nominee" },
    { id: 4, name: "Emma Thompson", role: "Member", points: 14, filmMinutes: 18, status: "Inducted" },
  ]);

  const [recentNews] = useState([
    { id: 1, title: "2024 Film Festival Winners Announced", date: "Dec 15, 2024", category: "Awards" },
    { id: 2, title: "New Industry Mentorship Program Launch", date: "Dec 10, 2024", category: "Programs" },
    { id: 3, title: "Chapter Leadership Summit Registration Open", date: "Dec 5, 2024", category: "Events" },
  ]);

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
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome back, {user.name}</span>
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">{user.school} • {user.chapter}</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="chapter">Chapter</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Status Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <Award className="h-5 w-5 mr-2 text-blue-600" />
                    Points
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{user.points}</div>
                  <Progress value={(user.points / 20) * 100} className="mb-2" />
                  <p className="text-sm text-gray-600">8 more needed for next level</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <Film className="h-5 w-5 mr-2 text-blue-600" />
                    Film Minutes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{user.filmMinutes}</div>
                  <Progress value={(user.filmMinutes / 20) * 100} className="mb-2" />
                  <p className="text-sm text-gray-600">5 more for advanced standing</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <User className="h-5 w-5 mr-2 text-blue-600" />
                    Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-3">
                    {user.inductionStatus}
                  </Badge>
                  <p className="text-sm text-gray-600">Member since Spring 2024</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-auto p-4 flex flex-col">
                    <Film className="h-6 w-6 mb-2" />
                    Submit Film
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col">
                    <Award className="h-6 w-6 mb-2" />
                    Log Points
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col">
                    <Users className="h-6 w-6 mb-2" />
                    View Chapter
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col">
                    <Calendar className="h-6 w-6 mb-2" />
                    Events
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your personal information and account settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <p className="text-gray-900">{user.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <p className="text-gray-900">{user.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">School</label>
                    <p className="text-gray-900">{user.school}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Graduation Year</label>
                    <p className="text-gray-900">{user.graduationYear}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Chapter</label>
                    <p className="text-gray-900">{user.chapter}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Role</label>
                    <Badge>{user.role}</Badge>
                  </div>
                </div>
                <Button className="mt-4">Edit Profile</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chapter" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Chapter Members</CardTitle>
                <CardDescription>{user.chapter} • {chapterMembers.length} members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {chapterMembers.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium">{member.name}</h3>
                        <p className="text-sm text-gray-600">{member.role}</p>
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="text-center">
                          <div className="font-medium">{member.points}</div>
                          <div className="text-gray-500">Points</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium">{member.filmMinutes}</div>
                          <div className="text-gray-500">Minutes</div>
                        </div>
                        <Badge 
                          className={member.status === "Inducted" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
                        >
                          {member.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="news" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Latest News</CardTitle>
                <CardDescription>Stay updated with HSCA announcements and events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentNews.map((item) => (
                    <div key={item.id} className="border-l-4 border-blue-600 pl-4 py-2">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium">{item.title}</h3>
                        <Badge variant="outline">{item.category}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">{item.date}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="mt-4">
                  View All News
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
