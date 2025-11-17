import { ThemeToggle } from '@/components/ThemeToggle'
import { ExampleForm } from '@/components/ExampleForm'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Vite + React + Tailwind v4 + Shadcn</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Welcome to Your Boilerplate</CardTitle>
              <CardDescription>
                This is a modern SPA boilerplate with all the tools you need
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Tech Stack:</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>React 18 with TypeScript</li>
                    <li>Vite for fast development</li>
                    <li>Tailwind CSS v4 (alpha)</li>
                    <li>Shadcn UI components</li>
                    <li>Dark mode support</li>
                  </ul>
                </div>
                <div className="flex gap-2">
                  <Button>Primary Button</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <ExampleForm />
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Project Structure:</h3>
              <pre className="bg-muted p-4 rounded-lg text-sm">
{`src/
├── components/
│   ├── ui/           # Shadcn UI components
│   ├── ThemeToggle.tsx
│   └── ExampleForm.tsx
├── lib/
│   └── utils.ts      # Utility functions
├── App.tsx
└── main.tsx`}
              </pre>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Available Scripts:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><code className="bg-muted px-2 py-1 rounded">npm run dev</code> - Start development server</li>
                <li><code className="bg-muted px-2 py-1 rounded">npm run build</code> - Build for production</li>
                <li><code className="bg-muted px-2 py-1 rounded">npm run preview</code> - Preview production build</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Add Shadcn Components:</h3>
              <p className="text-muted-foreground">
                Use <code className="bg-muted px-2 py-1 rounded">npx shadcn@latest add [component]</code> to add more UI components
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default App