# Figma Add-ons Panel Prototype

A clickable HTML/CSS prototype based on the Figma design, featuring an endless rotating carousel and interactive elements.

## Features

✨ **Endless Rotating Carousel**: The app icons in the center rotate continuously with smooth animations
🎯 **Interactive Elements**: All buttons, tags, and icons are clickable with hover effects
🏷️ **Tag Bubbles**: Tags at the bottom show black border on hover as specified
🔍 **Search Functionality**: Clickable search bar with focus states
❌ **Close Button**: Functional close button with hover effects
🎨 **Faithful Design**: Matches the original Figma design closely

## How to Use

1. **Open the prototype**: Open `index.html` in your web browser
2. **Watch the carousel**: App icons automatically rotate in the center
3. **Hover interactions**: 
   - Hover over app icons to see them scale up and pause the carousel
   - Hover over tag bubbles to see the black border effect
   - Hover over buttons for visual feedback
4. **Click interactions**:
   - Click any app icon to select it
   - Click tags to toggle selection (they turn blue when selected)
   - Click the search bar to focus and type
   - Click the close button to trigger close action
   - Click "Browse all add-ons" link

## Technical Details

- **HTML**: Semantic structure with proper accessibility attributes
- **CSS**: 
  - Custom animations for the carousel rotation
  - Hover effects with smooth transitions
  - Responsive design for mobile devices
  - Faithful color scheme from Figma design variables
- **JavaScript**: 
  - Interactive functionality for all clickable elements
  - Keyboard navigation support
  - Focus management for accessibility
  - Carousel pause on hover functionality

## File Structure

```
figma-prototype/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styling and animations
├── script.js           # Interactive JavaScript functionality
└── README.md          # This file
```

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Keyboard navigation support
- Touch-friendly on mobile devices

## Animation Details

- **Carousel**: 15-second continuous rotation cycle
- **Hover Effects**: 0.2-0.3 second smooth transitions
- **Click Feedback**: Immediate visual response with scale effects
- **Tag Borders**: Black border appears on hover as specified

Enjoy exploring the interactive prototype! 🚀
