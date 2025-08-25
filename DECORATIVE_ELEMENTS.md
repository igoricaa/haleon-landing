# DecorativeElements Component

A comprehensive floating decorative elements system for the Haleon landing page, built with Motion library and optimized for performance and accessibility.

## Features

- 🎨 **5 Unique Assets** - Tooth character, medical cross, strawberry, teal circle, and star outline
- 🌊 **5 Animation Types** - Floating, rotation, bounce, pulse, and drift animations
- 📱 **Fully Responsive** - Scales from 80px mobile to 120px desktop
- ♿ **Accessible** - Respects `prefers-reduced-motion`
- ⚡ **Performance Optimized** - Uses transform and opacity for smooth animations
- 🎯 **Flexible Configuration** - Predefined sections or custom element placement

## Installation

The component is already installed in your project at `/src/components/DecorativeElements.tsx`.

## Basic Usage

### Predefined Section Configurations

```tsx
import DecorativeElements from '@/components/DecorativeElements';

// Use predefined elements for specific sections
<section className="relative overflow-hidden">
  <DecorativeElements section="promotion" />
  {/* Your content */}
</section>
```

Available predefined sections:
- `promotion` - Tooth character (top-right) + Medical cross (bottom-left)
- `product-grid` - Strawberry (top-left) + Star (right-middle) + Teal circle (bottom-right) 
- `video` - Medical cross (top-left) + Teal circle (bottom-right)

### Custom Configuration

```tsx
<DecorativeElements 
  section="custom"
  elements={[
    { asset: 'Asset 91', position: 'top-right', delay: 0.5, scale: 1.2 },
    { asset: 'Asset 100', position: 'bottom-left', delay: 1.0, scale: 0.9 }
  ]}
/>
```

## API Reference

### DecorativeElementsProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `section` | `'promotion' \| 'product-grid' \| 'video' \| 'custom'` | - | Predefined section configuration |
| `elements?` | `DecorativeElement[]` | - | Custom elements array (required when section='custom') |
| `className?` | `string` | `''` | Additional CSS classes |
| `reducedMotion?` | `boolean` | `undefined` | Override motion preference |

### DecorativeElement

| Property | Type | Description |
|----------|------|-------------|
| `asset` | `AssetKey` | Asset identifier ('Asset 91', 'Asset 94', etc.) |
| `position` | `Position` | Placement position |
| `delay?` | `number` | Animation delay in seconds |
| `scale?` | `number` | Element scale multiplier (default: 1) |

### Available Assets

| Asset | Description | Default Animation | Opacity |
|-------|-------------|-------------------|---------|
| `Asset 91` | Tooth character | Bounce | 0.6 |
| `Asset 94` | Medical cross | Pulse | 0.4 |
| `Asset 100` | Strawberry | Floating | 0.5 |
| `Asset 75` | Teal circle | Drift | 0.3 |
| `Asset 95` | Star outline | Rotation | 0.4 |

### Available Positions

- `top-left` - Top left corner
- `top-right` - Top right corner  
- `bottom-left` - Bottom left corner
- `bottom-right` - Bottom right corner
- `right-middle` - Right side center

## Animation Types

### Floating (3s duration)
```css
y: [0, -10, 0] /* Gentle vertical movement */
```

### Rotation (8s duration)
```css
rotate: [0, 5, -5, 0] /* Subtle rotation */
```

### Bounce (4s duration)
```css
y: [0, -15, 0] /* Spring-based bounce */
```

### Pulse (5s duration)
```css
scale: [0.9, 1.1, 0.9] /* Scale pulsing */
```

### Drift (10s duration)
```css
x: [0, 20, 0, -20, 0] /* Circular drift */
y: [0, -20, 0, 20, 0]
```

## Accessibility

### Reduced Motion Support
The component automatically detects and respects the user's `prefers-reduced-motion` setting:

```tsx
// Force reduced motion
<DecorativeElements section="promotion" reducedMotion={true} />

// Let user preference decide (default)
<DecorativeElements section="promotion" />
```

### ARIA Attributes
All elements include:
- `aria-hidden="true"` - Decorative elements are hidden from screen readers
- `pointer-events: none` - Elements don't interfere with user interactions

## Performance

### Optimizations
- Uses `transform` and `opacity` for GPU acceleration
- Lazy loading images with `loading="lazy"`
- `will-change` property managed dynamically
- Animations use `requestAnimationFrame` via Motion library

### Bundle Impact
- Component adds ~2KB gzipped
- Assets total ~150KB (shared across sections)
- No runtime dependencies beyond Motion library

## Integration Examples

### Existing Section Components
The component is already integrated into:

#### PromotionSection
```tsx
<section className="relative py-16 overflow-hidden">
  <DecorativeElements section="promotion" />
  <div className="relative z-10">
    {/* Content */}
  </div>
</section>
```

#### ProductGrid
```tsx
<section className="relative py-16 overflow-hidden">
  <DecorativeElements section="product-grid" />
  <div className="relative z-10">
    {/* Content */}
  </div>
</section>
```

#### VideoSection
```tsx
<section className="relative py-16 overflow-hidden">
  <DecorativeElements section="video" />
  <div className="relative z-10">
    {/* Content */}
  </div>
</section>
```

### Custom Implementation

```tsx
import DecorativeElements, { type DecorativeElement } from '@/components/DecorativeElements';

const customElements: DecorativeElement[] = [
  { 
    asset: 'Asset 91', 
    position: 'top-left', 
    delay: 0.3, 
    scale: 1.1 
  },
  { 
    asset: 'Asset 95', 
    position: 'bottom-right', 
    delay: 0.8, 
    scale: 0.9 
  }
];

function CustomSection() {
  return (
    <section className="relative min-h-96 overflow-hidden">
      <DecorativeElements 
        section="custom"
        elements={customElements}
        className="opacity-60"
      />
      <div className="relative z-10 p-8">
        <h2>Your Content</h2>
      </div>
    </section>
  );
}
```

## Responsive Behavior

### Desktop (≥640px)
- Elements: 120px × 120px
- Full animation ranges
- Positioned with 32px (2rem) margins

### Mobile (<640px)  
- Elements: 80px × 80px
- Reduced animation intensity
- Positioned with 16px (1rem) margins

### CSS Responsive Classes
```tsx
className="w-20 h-20 sm:w-[120px] sm:h-[120px]"
```

## Browser Support

- Chrome 88+
- Firefox 90+
- Safari 14+
- Edge 88+

Motion library provides fallbacks for older browsers.

## Troubleshooting

### Common Issues

#### Elements not visible
- Ensure parent has `position: relative`
- Check `overflow: hidden` on parent container
- Verify assets exist in `/public/details/` directory

#### Animations not working
- Check Motion library installation
- Verify `prefers-reduced-motion` setting
- Ensure elements aren't covered by higher z-index content

#### Performance issues
- Reduce number of simultaneous elements
- Increase animation delays to stagger timing
- Use `reducedMotion={true}` for performance-critical sections

### Debug Mode
Add temporary debugging styles:
```tsx
<DecorativeElements 
  section="promotion" 
  className="[&>*]:border-2 [&>*]:border-red-500" 
/>
```

## File Structure

```
src/components/
├── DecorativeElements.tsx       # Main component
├── DecorativeElementsDemo.tsx   # Demo examples (optional)
├── PromotionSection.tsx         # Integrated
├── ProductGrid.tsx              # Integrated  
└── VideoSection.tsx             # Integrated

public/details/
├── Asset 75.png                 # Teal circle
├── Asset 91.png                 # Tooth character
├── Asset 94.png                 # Medical cross
├── Asset 95.png                 # Star outline
└── Asset 100.png                # Strawberry
```

## Contributing

When adding new assets:
1. Place PNG files in `/public/details/`
2. Add configuration to `assetConfigs` object
3. Choose appropriate animation type
4. Set opacity level (0.2-0.8 recommended)
5. Update TypeScript types

## License

Part of the Haleon landing page project. All assets are proprietary to Haleon brands.