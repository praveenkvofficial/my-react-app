Netlify App URL : https://praveen-react-app.netlify.app

Decisions made during the enhancement process:
1. Custom Hook (useFetch.js): I decided to create a custom useFetch hook to encapsulate the data fetching logic. This approach keeps the component clean and reusable. The hook manages the loading and error states and returns an object with data, loading, and error properties, which simplifies handling different states in the UI.

2. State Management: I used React's useState hook to manage the data, loading, and error states, and useEffect to trigger the fetch operation when the component mounts or when the URL changes.


3. Error and Loading Handling: To provide a better user experience, I added conditional rendering in the App component. It displays a "Loading..." message while fetching data and an "Error" message if the API call fails.


4. Data Filtering: I noticed that some of the image URLs returned by the API were broken placeholders. To address this, I implemented a filter to remove any products with invalid image URLs or URLs from common placeholder domains like placeimg.com, resulting in a cleaner user interface.
