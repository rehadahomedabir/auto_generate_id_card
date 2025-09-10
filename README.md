# ID Card Generator

A web application that automatically generates professional ID cards with random sample data.

## Features

- **Automatic Data Generation**: Generates realistic sample data including names, job titles, contact information, and more
- **Image Upload**: Upload your own photo to use in the ID card (optional)
- **Professional ID Card Design**: Creates visually appealing ID cards with a modern design
- **Download Functionality**: Export generated cards as PNG images
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Preview**: See both the data and card preview simultaneously

## How to Use

1. **Open the Application**: Open `index.html` in your web browser
2. **Generate Data**: Click "Generate Random Data" to create sample information
3. **Upload Photo (Optional)**: Click "Choose Photo" to upload your own image
4. **Create Card**: Click "Generate ID Card" to create the visual ID card
5. **Download**: Click "Download Card" to save the card as a PNG image
6. **Clear**: Click "Clear Card" to reset and start over

## Generated Data Includes

- Full name and employee ID
- Job title and department
- Company information
- Contact details (email, phone)
- Address information
- Hire date and birth date
- Professional photo (uploaded image or initials placeholder)

## Image Upload Features

- **Supported Formats**: All common image formats (JPEG, PNG, GIF, WebP)
- **File Size Limit**: Maximum 5MB
- **Image Preview**: See your uploaded image before generating the card
- **Automatic Resizing**: Images are automatically resized to fit the ID card
- **Remove Option**: Easy removal of uploaded images

## Technical Details

- **Frontend**: Pure HTML, CSS, and JavaScript
- **Styling**: Modern CSS with gradients and responsive design
- **Image Generation**: Uses html2canvas library for PNG export
- **Data Sources**: Predefined arrays of realistic sample data

## File Structure

```
atogenetateidcard/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Notes

- The application automatically generates data when first loaded
- Generated cards include a 2-year validity period
- All data is randomly generated and not based on real individuals
- The download feature requires an internet connection to load the html2canvas library
