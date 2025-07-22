import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const newsletters = [
    { id: 1, title: "Spring 2024 Highlights", date: "April 2024", summary: "See the best moments and achievements from this semester." },
    { id: 2, title: "Industry Insights: March Edition", date: "March 2024", summary: "Latest news and tips for aspiring filmmakers." },
    { id: 3, title: "Welcome to a New Year!", date: "January 2024", summary: "Kick off the year with updates and opportunities." },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center py-12 px-4">
      <Card className="w-full max-w-xl mb-8">
        <CardHeader>
          <CardTitle>HSCA Newsletter</CardTitle>
          <CardDescription>Stay up to date with the latest news, events, and opportunities from the Honor Society of Cinematic Arts.</CardDescription>
        </CardHeader>
        <CardContent>
          {subscribed ? (
            <div className="text-green-700 font-semibold text-center py-4">Thank you for subscribing!</div>
          ) : (
            <form className="flex flex-col md:flex-row gap-4 items-center" onSubmit={handleSubscribe}>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" className="bg-[#530597] hover:bg-[#3a026b]">Subscribe</Button>
            </form>
          )}
        </CardContent>
      </Card>
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Recent Newsletters</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="divide-y divide-gray-200">
            {newsletters.map(nl => (
              <li key={nl.id} className="py-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-lg">{nl.title}</span>
                  <span className="text-gray-500 text-sm">{nl.date}</span>
                </div>
                <div className="text-gray-600 text-sm">{nl.summary}</div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Newsletter; 