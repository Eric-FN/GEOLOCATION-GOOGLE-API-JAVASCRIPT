📁 Project: Geolocation Map Viewer

🧠 Description:
This project uses the **Geolocation API** and **Google Maps JavaScript API** to display a map centered on the user's current location. When the page loads, it requests permission to access the user's geolocation. If granted, it shows a map with a marker indicating the user's position.

🚀 Features:
- Uses the browser's native Geolocation API to get current coordinates
- Loads a Google Map centered at the user's latitude and longitude
- Displays a marker at the exact location with a custom title
- Handles errors for denied permissions or unsupported browsers

🛠️ Technologies Used:
- HTML5
- JavaScript (Vanilla)
- Google Maps JavaScript API
- Geolocation API (browser-native)

📦 How to Use:
1. Clone or download this repository.
2. Make sure to include the **Google Maps JavaScript API** script in your HTML file with a valid API key:
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
   ```
3. Open the HTML file in a browser.
4. Grant location access when prompted.
5. The map will display centered on your current location with a marker labeled **"You are here."**

🔧 Notes:
- You must replace `YOUR_API_KEY` with your own Google Maps API key.
- The map will not work without a valid key or location permission.
- Works only over `https://` or `localhost` due to browser security policies for geolocation.

🧪 Future Improvements:
- Custom marker icons
- Show additional location info (city, country) via reverse geocoding
- Allow users to search and pin other locations
- Add dark mode support for the map
- Responsive map container
