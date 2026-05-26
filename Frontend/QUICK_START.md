#!/bin/bash

# MessTracker Frontend - Quick Start Guide

## 📦 Installation

```bash
cd Frontend
npm install
```

## 🚀 Development

```bash
npm run dev
```

Server will start at: http://localhost:5173

## 🔨 Build

```bash
npm run build
```

Output: `dist/` folder

## 👀 Preview Build

```bash
npm run preview
```

## 📁 Project Folders

```
src/
├── components/     ← Reusable UI components
├── pages/         ← Page components
├── api/           ← API integration
├── layouts/       ← Layout wrappers
├── context/       ← React context (if needed)
├── utils/         ← Utility functions
└── assets/        ← Images, fonts, etc.
```

## 🎯 Component Quick Reference

### Import All Components
```javascript
import {
  Button,
  Input,
  Select,
  Card,
  Navbar,
  StatsCard,
  MealCard,
  RoleToggle,
  AuthLayout,
  DashboardLayout,
  LoadingSpinner,
  SectionHeader,
  FormGroup,
  Alert,
  Badge,
  EmptyState,
  Tabs,
  Skeleton
} from "../components";
```

### Button Examples
```jsx
// Primary Button
<Button variant="primary" fullWidth>
  Login
</Button>

// Danger Button
<Button variant="danger" size="lg">
  Delete
</Button>

// Loading State
<Button isLoading>
  Processing...
</Button>
```

### Input Examples
```jsx
// Simple Input
<Input type="text" placeholder="Enter name" />

// With Label and Icon
<Input
  label="Email"
  type="email"
  icon={Mail}
  error="Invalid email"
/>

// Password Input
<Input
  label="Password"
  type="password"
  icon={Lock}
/>
```

### Select Examples
```jsx
// College Selection
<Select
  label="Select College"
  options={colleges}
  icon={Building2}
/>

// Meal Type Selection
<Select
  label="Meal Type"
  options={[
    { id: "BREAKFAST", name: "Breakfast" },
    { id: "LUNCH", name: "Lunch" },
    { id: "DINNER", name: "Dinner" }
  ]}
/>
```

### Card Examples
```jsx
// Default Card
<Card>
  Content here
</Card>

// Gradient Card
<Card variant="gradient">
  Gradient background
</Card>

// Elevated Card
<Card variant="elevated" hover>
  Elevated with hover effect
</Card>
```

### Stats Cards
```jsx
<div className="grid grid-cols-3 gap-6">
  <StatsCard
    icon={MealIcon}
    title="Total Meals"
    value={42}
    color="blue"
  />
  
  <StatsCard
    icon={CheckIcon}
    title="Accepted"
    value={35}
    color="green"
    trend={10}
  />
  
  <StatsCard
    icon={CloseIcon}
    title="Rejected"
    value={7}
    color="red"
  />
</div>
```

### Form Example
```jsx
<FormGroup>
  <Input
    label="Name"
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
  
  <Select
    label="College"
    options={colleges}
    value={college}
    onChange={(e) => setCollege(e.target.value)}
  />
  
  <Button fullWidth variant="primary">
    Submit
  </Button>
</FormGroup>
```

### Page Layout Example
```jsx
function MyDashboard() {
  const [user, setUser] = useState(null);
  
  return (
    <DashboardLayout user={user}>
      <SectionHeader
        title="Dashboard"
        subtitle="Welcome back"
        icon={Dashboard}
      />
      
      <Card>
        {/* Content here */}
      </Card>
    </DashboardLayout>
  );
}
```

## 🎨 Tailwind Classes Reference

### Spacing
```jsx
p-4      // padding: 16px
p-6      // padding: 24px
m-4      // margin: 16px
gap-4    // gap: 16px
mb-8     // margin-bottom: 32px
```

### Colors
```jsx
bg-blue-600      // Blue background
text-green-400   // Green text
border-red-500   // Red border
shadow-lg        // Large shadow
```

### Responsive
```jsx
md:grid-cols-2   // 2 columns on medium screens and up
lg:text-xl       // Larger text on large screens
sm:p-2          // Small padding on small screens
```

## 📊 Responsive Breakpoints

```
sm: 640px   (small phones)
md: 768px   (tablets)
lg: 1024px  (desktops)
xl: 1280px  (large desktops)
2xl: 1536px (very large screens)
```

## 🔌 API Integration

Base URL: `http://localhost:8080/api`

### Endpoints Used
```
POST   /auth/login         ← Login
POST   /auth/register      ← Register
GET    /user/me           ← Get current user
GET    /meals/today       ← Get today's meals
POST   /meals             ← Create meal (admin)
DELETE /meals/:id         ← Delete meal (admin)
POST   /meals/respond     ← Submit response
GET    /meals/stats       ← Get statistics
GET    /colleges          ← Get colleges
GET    /hostels           ← Get hostels
```

## 🛠️ Common Tasks

### Add a new page
1. Create file: `src/pages/NewPage.jsx`
2. Wrap with: `<DashboardLayout>`
3. Use components from `src/components`
4. Add route in `App.jsx`

### Add a new component
1. Create file: `src/components/NewComponent.jsx`
2. Export from: `src/components/index.js`
3. Import and use anywhere

### Style with Tailwind
```jsx
<div className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700">
  Content here
</div>
```

### Handle Loading States
```jsx
import { LoadingSpinner } from "../components";

if (isLoading) {
  return <LoadingSpinner fullScreen />;
}
```

### Show Alerts
```jsx
import { Alert } from "../components";

<Alert
  type="success"
  title="Success!"
  message="Operation completed"
  autoClose={true}
/>
```

## 🎨 Color Palette

```
Blue:    #3b82f6  → Primary
Green:   #22c55e  → Success
Red:     #ef4444  → Danger
Yellow:  #eab308  → Warning
Cyan:    #06b6d4  → Info
Slate:   #0f172a  → Background
```

## 📱 Mobile Optimization

All components are mobile-first:
- Touch-friendly buttons (44px minimum height)
- Responsive text sizes
- Flexible grid layouts
- Mobile navigation drawer in Navbar

## 🚀 Performance Tips

1. Use `React.memo()` for expensive components
2. Lazy load pages with `React.lazy()`
3. Optimize images before using
4. Keep component re-renders minimal
5. Use `useCallback` for event handlers

## 🐛 Debugging

### Check Component Props
```jsx
console.log(props);  // In component
```

### Use React DevTools
- Install React DevTools extension
- Inspect component hierarchy
- Check state and props

### Check Network Requests
- Open browser DevTools
- Go to Network tab
- Monitor API calls

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Docs](https://react.dev)
- [Lucide Icons](https://lucide.dev)
- [Recharts Docs](https://recharts.org)
- [Vite Docs](https://vitejs.dev)

## ✅ Pre-deployment Checklist

- [ ] All pages working
- [ ] API integration tested
- [ ] Mobile responsive verified
- [ ] Build completes without errors
- [ ] Console errors cleared
- [ ] Performance optimized
- [ ] Accessibility checked
- [ ] Documentation updated

## 🎉 Done!

Your MessTracker frontend is ready to use! Start with:

```bash
npm run dev
```

Then visit: http://localhost:5173

Enjoy! 🚀
