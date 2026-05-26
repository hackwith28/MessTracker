# MessTracker Frontend - Component Architecture

## Overview
This is a modern, modular React application with a beautiful UI design built with Tailwind CSS and Lucide React icons. The app is organized into reusable components following best practices.

## Component Structure

### Core UI Components
These are the fundamental building blocks used across the application.

#### `Button`
Versatile button component with multiple variants and sizes.
```jsx
<Button 
  variant="primary" // primary, secondary, danger, success, outline, ghost
  size="md" // sm, md, lg
  fullWidth
  isLoading
/>
```

#### `Input`
Enhanced input field with icon support and error states.
```jsx
<Input
  label="Email"
  type="email"
  placeholder="user@example.com"
  icon={Mail}
  error={errors.email}
/>
```

#### `Select`
Dropdown select component with label and error handling.
```jsx
<Select
  label="College"
  options={[{ id: 1, name: "College A" }]}
  icon={Building2}
  error={errors.college}
/>
```

#### `Card`
Container component with different variants for organizing content.
```jsx
<Card variant="default"> {/* default, gradient, elevated */}
  Content here
</Card>
```

### Layout Components
These components structure the overall page layout.

#### `AuthLayout`
Wraps authentication pages (Login, Register) with consistent styling.
```jsx
<AuthLayout title="Login" subtitle="Welcome back">
  Form content
</AuthLayout>
```

#### `DashboardLayout`
Wraps dashboard pages with navigation bar.
```jsx
<DashboardLayout user={user}>
  Dashboard content
</DashboardLayout>
```

#### `Navbar`
Navigation bar with user info and logout button.
Automatically included in `DashboardLayout`.

### Feature Components
Specialized components for specific features.

#### `MealCard`
Displays meal information with response buttons (for students) or stats (for admins).
```jsx
<MealCard
  meal={mealData}
  onRespond={handleResponse}
  userResponse="ACCEPTED"
  isAdmin={false}
/>
```

#### `StatsCard`
Shows a statistic with icon, value, and optional trend.
```jsx
<StatsCard
  icon={IconComponent}
  title="Total Meals"
  value={42}
  color="blue" // blue, green, red, purple, orange
  trend={5}
/>
```

#### `SectionHeader`
Styled header for sections with title, subtitle, and icon.
```jsx
<SectionHeader
  title="Today's Meals"
  subtitle="Manage your meal preferences"
  icon={Calendar}
/>
```

### Utility Components
Small, focused components for specific purposes.

#### `LoadingSpinner`
Loading indicator with optional full-screen mode.
```jsx
<LoadingSpinner fullScreen={false} />
```

#### `Alert`
Alert message with success, error, warning, and info variants.
```jsx
<Alert
  type="success"
  title="Success!"
  message="Meal created successfully"
  autoClose={true}
/>
```

#### `Badge`
Small label component for categorization.
```jsx
<Badge variant="success">Accepted</Badge>
```

#### `Tabs`
Tab navigation component.
```jsx
<Tabs
  tabs={[
    { id: 1, label: "Tab 1", content: <div>Content 1</div> },
    { id: 2, label: "Tab 2", content: <div>Content 2</div> }
  ]}
  activeTab={activeTab}
  setActiveTab={setActiveTab}
/>
```

#### `Skeleton`
Skeleton loader for placeholders.
```jsx
<Skeleton width="w-full" height="h-4" />
```

#### `EmptyState`
Empty state placeholder when no data is available.
```jsx
<EmptyState
  icon={Icon}
  title="No meals"
  description="No meals available for today"
/>
```

### Form Components

#### `FormGroup`
Container for grouping form fields with consistent spacing.
```jsx
<FormGroup>
  <Input label="Name" />
  <Input label="Email" />
</FormGroup>
```

#### `RoleToggle`
Toggle between Student and Admin roles.
```jsx
<RoleToggle role={role} setRole={setRole} />
```

## Design System

### Colors
- **Primary**: Blue (#3b82f6)
- **Success**: Green (#22c55e)
- **Danger**: Red (#ef4444)
- **Warning**: Yellow (#eab308)
- **Info**: Cyan (#06b6d4)
- **Background**: Slate-950 (#0f172a)
- **Surface**: Slate-800 (#1e293b)

### Typography
- **Font Family**: System font stack (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, etc.)
- **Body Text**: 16px
- **Large Headings**: 32px
- **Medium Headings**: 24px
- **Small Headings**: 20px

### Spacing
Uses Tailwind's standard spacing scale (4px base unit):
- `gap-4` = 16px
- `p-6` = 24px
- `mb-8` = 32px

### Rounded Corners
- Buttons & Inputs: `rounded-lg` (8px)
- Cards: `rounded-xl` (12px)
- Small elements: `rounded` (4px)

### Shadows
- Standard: `shadow-lg`
- Elevated: `shadow-xl`
- With color: `shadow-blue-500/30`

## Pages

### Login (`Login.jsx`)
- User role selection
- Email and password inputs
- Form validation with error messages
- Redirects to appropriate dashboard

### Register (`Register.jsx`)
- Role selection
- User information form
- College and hostel selection
- Email verification
- Redirects to login

### Student Dashboard (`StudentDashboard.jsx`)
- User profile card
- Statistics overview (meals, accepted, rejected)
- List of today's meals
- Meal response interface
- Real-time updates

### Admin Dashboard (`AdminDashboard.jsx`)
- Admin profile card
- Overview statistics
- Meal creation form
- Meal management
- Response analytics with charts
- Pie charts and bar charts for visualizations

## Best Practices

### Component Reusability
- Each component has a single responsibility
- Props are clearly documented
- Default values are provided
- Variants and sizes support flexibility

### Styling
- Tailwind CSS for utility-first styling
- Consistent color palette throughout
- Responsive design (mobile-first)
- Glass-morphism effects for modern look

### Accessibility
- Semantic HTML elements
- Proper form labeling
- Icon + text for buttons
- Focus states on interactive elements
- Error messaging for form validation

### Performance
- Lazy loading components
- Memoization where needed
- Efficient re-renders
- Optimized images and icons

## Usage Example

```jsx
import { Button, Card, Input, Button } from "../components";

function MyComponent() {
  return (
    <Card>
      <Input label="Name" type="text" />
      <Button variant="primary" fullWidth>
        Submit
      </Button>
    </Card>
  );
}
```

## Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## File Structure

```
src/
├── components/
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Select.jsx
│   ├── Card.jsx
│   ├── Navbar.jsx
│   ├── StatsCard.jsx
│   ├── MealCard.jsx
│   ├── RoleToggle.jsx
│   ├── AuthLayout.jsx
│   ├── DashboardLayout.jsx
│   ├── LoadingSpinner.jsx
│   ├── SectionHeader.jsx
│   ├── FormGroup.jsx
│   ├── Alert.jsx
│   ├── Badge.jsx
│   ├── EmptyState.jsx
│   ├── Tabs.jsx
│   ├── Skeleton.jsx
│   └── index.js
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── StudentDashboard.jsx
│   └── AdminDashboard.jsx
├── api/
│   └── axios.js
├── App.jsx
├── main.jsx
└── index.css
```

## Features

✨ **Modern UI Design**
- Gradient backgrounds and text
- Smooth animations and transitions
- Glass-morphism effects
- Dark theme optimized

🎨 **Consistent Design System**
- Reusable color palette
- Standardized spacing
- Uniform typography
- Cohesive visual language

📱 **Responsive Design**
- Mobile-first approach
- Tablet and desktop optimization
- Flexible grid layouts

🔄 **Component Modularity**
- Easy to maintain
- Simple to extend
- Reusable across pages
- Clear component hierarchy

⚡ **Performance Optimized**
- Efficient rendering
- Optimized bundle size
- Fast page load times

## Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Internationalization (i18n)
- [ ] Advanced filtering and search
- [ ] User preferences and settings
- [ ] Notifications system
- [ ] PDF export functionality
- [ ] Mobile app version
- [ ] Real-time updates with WebSocket

## Contributors

Built with ❤️ for MessTracker
