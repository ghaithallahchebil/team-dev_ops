import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Tailwind + shadcn/ui Test</h1>
          <p className="text-muted-foreground mt-1">
            A simple demonstration of UI components
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Component Showcase</CardTitle>
            <CardDescription>
              Examples of shadcn/ui components styled with Tailwind CSS
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="example-input">Input Component</Label>
              <Input id="example-input" placeholder="Type something here..." />
            </div>
            
            <Separator />
            
            <div className="grid gap-4 grid-cols-2">
              <div>
                <Label htmlFor="example-switch" className="block mb-2">Switch Component</Label>
                <div className="flex items-center gap-2">
                  <Switch id="example-switch" />
                  <span className="text-sm">Toggle me</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center text-sm text-muted-foreground">
          Using shadcn/ui with Tailwind CSS
        </div>
      </div>
    </div>
  );
}

export default App; 