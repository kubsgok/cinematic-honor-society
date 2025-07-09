import React from "react";
import { SignIn } from "@clerk/clerk-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Film } from "lucide-react";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Film className="h-12 w-12 text-blue-600" />
          </div>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Sign in to your HSCA account</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Clerk's built-in sign-in form */}
          <SignIn routing="path" path="/login" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
