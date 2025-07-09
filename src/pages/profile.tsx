import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const [form, setForm] = useState({
    firstName: "kabir",
    lastName: "goklani",
    email: "kabir.goklani@gmail.com",
    dob: "",
    grade: "",
    graduation: ""
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Profile & Billing</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Avatar Card */}
        <Card className="w-full max-w-xs flex-shrink-0">
          <CardContent className="flex flex-col items-center py-8">
            <div className="rounded-full bg-gray-200 w-24 h-24 flex items-center justify-center text-3xl font-semibold text-gray-500 mb-4">
              KG
            </div>
            <div className="text-lg font-semibold mb-1">kabir goklani</div>
            <div className="text-gray-500 text-sm">kabir.goklani@gmail.com</div>
          </CardContent>
        </Card>
        {/* Profile Form Card */}
        <Card className="w-full">
          <CardContent className="p-8">
            <div className="mb-6 border-b flex">
              <button className="flex-1 py-2 text-center font-medium border-b-2 border-gray-300 bg-white">Profile Information</button>
              <button className="flex-1 py-2 text-center font-medium text-gray-400 border-b-2 border-transparent bg-white" disabled>Billing & Invoices</button>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" value={form.firstName} onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))} />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" value={form.lastName} onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))} />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                </div>
                <div>
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" value={form.dob} onChange={e => setForm(f => ({ ...f, dob: e.target.value }))} />
                </div>
                <div>
                  <Label htmlFor="grade">Grade Level</Label>
                  <Input id="grade" placeholder="Select grade level" value={form.grade} onChange={e => setForm(f => ({ ...f, grade: e.target.value }))} />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="graduation">Graduation Month & Year</Label>
                  <Input id="graduation" placeholder="Select graduation month" value={form.graduation} onChange={e => setForm(f => ({ ...f, graduation: e.target.value }))} />
                </div>
                <div className="md:col-span-2 flex justify-end mt-4">
                  <Button type="submit" className="bg-[#530597] hover:bg-[#3a026b]">Update Profile</Button>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile; 