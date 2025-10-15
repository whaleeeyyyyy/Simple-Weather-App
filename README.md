**Simple Weather App**

A clean and intuitive web application that allows users to check the current weather conditions for any city worldwide. Built with vanilla JavaScript, HTML, and CSS, it fetches real-time weather data from the OpenWeatherMap API.


Table of Contents

Demo
Features
Technologies Used
Setup and Installation
API Key Configuration
Usage
Deployment
Contributing
License

Demo

You can see a live demo of the application here:
https://whaleeeyyyyy.github.io/Simple-Weather-App/


Features

Search by City: Easily find weather information for any city.
Real-time Data: Displays current temperature, weather description, humidity, and wind speed.
Dynamic Icon: Shows a relevant weather icon based on current conditions.
Responsive Design: Works well on various screen sizes (though not explicitly mentioned, it's good to aim for this).
Dynamic Background: Changes the background theme of the app based on the current weather condition (e.g., clear, clouds, rain).
Error Handling: Provides user-friendly messages for invalid city names or API issues.
Loading Indicator: Shows a loading spinner while fetching data.

Technologies Used

HTML5: For the basic structure of the web page.
CSS3: For styling and dynamic background changes.
JavaScript (ES6+): For fetching data, handling user input, and updating the DOM.
OpenWeatherMap API: To retrieve weather data.

Setup and Installation

To get a local copy up and running, follow these simple steps.


Clone the repository:


Code
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

(Replace YOUR_USERNAME and YOUR_REPO_NAME)


Navigate to the project directory:


Code
cd Simple-Weather-App

Open index.html:
Simply open the index.html file in your preferred web browser. You can usually do this by double-clicking the file.



API Key Configuration

This application relies on the OpenWeatherMap API. You need to obtain your own API key and configure it in the script.js file.


Get an API Key:


Go to OpenWeatherMap.
Sign up for a free account.
Once logged in, navigate to the "API keys" tab to find or generate your key.

Update script.js:


Open the script.js file in your project.
Locate the line:
Code
const API_KEY = "..."; // IMPORTANT: Replace with your actual API key from OpenWeatherMap

Replace ".." with your actual 32-character OpenWeatherMap API key.
Code
const API_KEY = "YOUR_ACTUAL_OPENWEATHERMAP_API_KEY_HERE";

Save the script.js file.


Important Note on API Key Security:
Your OpenWeatherMap API key will be exposed in the client-side JavaScript code. For the free tier of OpenWeatherMap, this is generally acceptable as it's a read-only API with rate limits. However, for more sensitive APIs or paid tiers, it's crucial to use a backend server to proxy requests and keep API keys secure.


Usage

Open the index.html file in your browser (or visit the deployed demo link).
Enter the name of a city in the input field.
Click the "Search" button or press Enter.
The current weather conditions for the entered city will be displayed.

Deployment

This project is designed for easy deployment as a static website. It is currently deployed using GitHub Pages.


To deploy your own version:


Push your code to a GitHub repository.
Go to your repository's Settings tab.
Navigate to the Pages section in the left sidebar.
Under "Build and deployment," select Deploy from a branch.
Choose your main branch (e.g., main or master) and select the / (root) folder.
Click "Save."
Your site will be live at https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/ within a few minutes.

Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.


If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!


Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
