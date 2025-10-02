# FOLUKESR GOLDEN FARM & FOLEST FARM - README

## 📋 Project Overview

Folukest golden farm & folest services is a modern, responsive website for a business that combines two services:
1. **Fresh Poultry Products** - Selling farm-fresh chicken (white and red varieties), turkey, and eggs in different sizes
2. **Snack Catering Services** - Offering catering for events, small chops, and family meals with a focus on snack items

## 🎯 Features

### Core Features
- **Dual Service Showcase**: Split homepage with clear navigation between poultry products and catering services
- **Farm to Table Tracker**: Interactive visual timeline showing the poultry journey from farm to kitchen
- **Product Catalog**: JSON-driven product display for both poultry and catering items
- **Working Navigation**: Single-page application style navigation between all sections
- **Contact Form**: Functional contact form with validation for inquiries and bookings
- **Responsive Design**: Mobile-first design that works on all device sizes

### Poultry Section
- White and red chicken varieties
- Different egg sizes (small, medium, large, jumbo)
- Product cards with images, descriptions, and pricing
- Add to cart functionality

### Catering Section
- Snack-focused menu items
- Category filtering (All Snacks, Savory Snacks, Sweet Treats, Beverages)
- Items include egg rolls, meat pies, donuts, samosas, and more
- Professional catering booking system

## Technical Implementation

### File Structure
```
farm-feast-website/
├── index.html          # Main HTML file with embedded CSS and JavaScript
├── README.md           # Project documentation
└── (No external dependencies - all code in single file)
```

### Technologies Used
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript**: ES6+ for interactivity and JSON data handling
- **Font Awesome**: Icons for UI elements
- **Google Fonts**: Typography (Segoe UI)

### Key JavaScript Features
- **JSON Data Management**: Products and catering items stored in JSON format
- **Single Page Navigation**: Smooth transitions between sections
- **Dynamic Content Loading**: Products loaded from JSON data
- **Category Filtering**: Filter catering items by category
- **Cart Functionality**: Add items to cart with visual feedback
- **Form Validation**: Contact form with required field validation

## Design System

### Color Palette
- **Cream**: `#f8f4e9` - Background
- **Brown**: `#8b4513` - Primary brand color
- **Green**: `#556b2f` - Farming/natural elements
- **Red**: `#a52a2a` - Accent color for CTAs
- **White**: `#ffffff` - Cards and sections

### Typography
- **Primary Font**: Segoe UI (system font stack)
- **Font Weights**: 400 (normal), 600 (semibold), 700 (bold)
- **Hierarchy**: Clear heading structure with proper contrast

### Icons
- Farm-themed emojis (🐓, 🍳, 🚚, etc.)
- Font Awesome for UI icons
- Consistent icon usage throughout

## 📱 Pages Structure

1. **Home** - Landing page with service overview
2. **Fresh Poultry Shop** - Product catalog
3. **Snack Catering** - Catering menu with filtering
5. **About Us** - Farm story and values
6. **Contact & Bookings** - Contact form and information

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build process or dependencies required

### Installation
1. Download the `index.html` file
2. Open in any web browser
3. No server required - works locally

### Usage
- Click navigation links to switch between sections
- Use category buttons to filter catering items
- Add products to cart (visual feedback only)
- Fill out contact form for inquiries
- All navigation is handled within the single page

## 🔧 Customization

### Adding New Products
Update the `poultryProducts` array in the JavaScript section:

```javascript
const poultryProducts = [
    {
        id: 9,
        name: "New Product",
        description: "Product description",
        price: "$XX.XX",
        image: "image-url.jpg",
        type: "category"
    }
];
```

### Adding Catering Items
Update the `cateringItems` array:

```javascript
const cateringItems = [
    {
        id: 9,
        name: "New Snack",
        description: "Snack description",
        price: "$XX.XX per unit",
        image: "image-url.jpg",
        category: "savory" // or "sweet", "drinks"
    }
];
```

### Styling Changes
Modify CSS custom properties in the `:root` selector:

```css
:root {
    --cream: #f8f4e9;
    --brown: #8b4513;
    --green: #556b2f;
    --red: #a52a2a;
    /* Update colors as needed */
}
```

## 🌟 Unique Features

1. **FOLUKEST GOLDEN FARM & FOLEST SERVICES Focus**: Design emphasizes farming heritage while maintaining catering as secondary service
2. **JSON-Driven Content**: Easy content management through JavaScript objects
3. **Interactive Elements**: Hover effects, animations, and smooth transitions
4. **Professional Catering**: Snack-focused menu with proper categorization
5. **Trust Building**: Farm-to-table tracker builds customer confidence
6. **Mobile Optimized**: Responsive design for all screen sizes

## 📞 Contact Integration

The contact form includes:
- Name, email, phone fields
- Subject dropdown with relevant options
- Message textarea
- Form validation
- Success feedback
- Contact information display

##  Future Enhancements

Potential improvements for production:
- Backend integration for form submissions
- Payment processing for orders
- User authentication system
- Admin panel for content management
- Database integration for products
- Email newsletter functionality
- Social media integration
- SEO optimization
- Analytics tracking

## 📄 License

This project is for demonstration purposes. Please ensure you have proper licenses for any images used in production.

## 👥 Support

For questions or issues with the implementation, please refer to the code comments or contact the development team.

---

**Farm & Feast** - Bringing farm-fresh quality and exceptional catering to your table since 2010.
