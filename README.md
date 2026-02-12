# Valentine's Day App

## Setup Instructions
1. Clone the repository:  
   ```bash
   git clone https://github.com/merpmerp1/willyoubemyvalentine-.git
   ```  
2. Navigate into the project directory:  
   ```bash
   cd willyoubemyvalentine-
   ```
3. Install the required dependencies:  
   ```bash
   npm install  
   ```

## Features
- Interactive Valentine's Day themed UI
- Create and send virtual valentine cards
- Customizable messages and designs
- Option to schedule card sending
- View sent cards history

## File Structure
```
willyoubemyvalentine-
├── src/                # Source files
│   ├── components/     # React components
│   ├── pages/          # Individual app pages
│   ├── assets/         # Images and styles
│   └── App.js          # Main application file
├── public/             # Public assets
├── package.json        # Project metadata and dependencies
└── README.md           # Documentation
```

## Deployment Guide
1. Build the app:  
   ```bash
   npm run build
   ```
2. Deploy the contents of the `build` directory to your web server.

## Customization Tips
- To change the theme, modify the styles in the `src/assets/styles/` folder.
- Update the card templates located in `src/components/CardTemplate.js`.
- For scheduling features, check the `src/services/scheduler.js`. 

Happy Valentine's Day! 🎉