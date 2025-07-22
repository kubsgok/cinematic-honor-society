import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [form, setForm] = useState({
    firstName: "kabir",
    lastName: "goklani",
    email: "kabir.goklani@gmail.com",
    dob: "",
    grade: "",
    graduation: ""
  });
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  // Demo invoice data
  const invoices = [
    { id: 1, year: 2024, amount: "$50.00", status: "Paid", date: "2024-01-15" },
    { id: 2, year: 2023, amount: "$50.00", status: "Paid", date: "2023-01-10" },
    { id: 3, year: 2022, amount: "$50.00", status: "Unpaid", date: "-" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Profile & Billing</h1>
        <Button variant="outline" onClick={() => navigate("/dashboard")}>Back to Dashboard</Button>
      </div>
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
        {/* Profile/Billing Card */}
        <Card className="w-full">
          <CardContent className="p-8">
            <div className="mb-6 border-b flex">
              <button
                className={`flex-1 py-2 text-center font-medium border-b-2 ${activeTab === "profile" ? "border-gray-300 bg-white" : "border-transparent text-gray-400 bg-white"}`}
                onClick={() => setActiveTab("profile")}
              >
                Profile Information
              </button>
              <button
                className={`flex-1 py-2 text-center font-medium border-b-2 ${activeTab === "billing" ? "border-gray-300 bg-white" : "border-transparent text-gray-400 bg-white"}`}
                onClick={() => setActiveTab("billing")}
              >
                Billing & Invoices
              </button>
            </div>
            {activeTab === "profile" && (
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
            )}
            {activeTab === "billing" && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Yearly Dues & Invoices</h2>
                <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">2024 Yearly Dues</span>
                    <span className="font-bold text-green-700">$50.00</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Status: <span className="font-semibold text-green-700">Paid</span></div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paid Date</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {invoices.map((inv) => (
                        <tr key={inv.id}>
                          <td className="px-4 py-2 whitespace-nowrap">{inv.year}</td>
                          <td className="px-4 py-2 whitespace-nowrap">{inv.amount}</td>
                          <td className="px-4 py-2 whitespace-nowrap">
                            <span className={inv.status === "Paid" ? "text-green-700 font-semibold" : "text-red-600 font-semibold"}>{inv.status}</span>
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap">{inv.date}</td>
                          <td className="px-4 py-2 whitespace-nowrap">
                            <Button size="sm" variant="outline" disabled={inv.status !== "Paid"}>Download</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile; 