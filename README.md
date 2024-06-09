# Crypto Dashboard

## Table of Contents

- [Initial Setup](#initial-setup)
- [Landing Page](#landing-page)
- [Dashboard Page](#dashboard-page)
- [Coin Page](#coin-page)
- [Compare Page](#compare-page)
- [Light Mode Dark Mode](#light-mode-dark-mode)
- [Watchlist](#watchlist)
- [Other Features](#other-features)
- [Deployment](#deployment)

--- 

# Features

## Initial Setup

0. **Root Variables and Fonts**
    - Defined root variables for consistent theming.
    - Integrated Google Fonts for custom typography.
1. **Custom Scroll Bar**
    - Styled the scrollbar for a better user experience.
2. **Custom Selection**
    - Applied custom styling to text selections.
3. **Disabling Image Dragging**
    - Disabled image dragging to prevent undesired behaviors.

## Landing Page

4. **Header**
    - Implemented a header using MUI Drawer for navigation.
5. **Text Stroke Hover Animation**
    - Added a hover animation with text stroke effect on the landing page.
6. **Entrance Animation**
    - Utilized Framer Motion for animating phone entrance and text.

## Dashboard Page

7. **MUI Tab Component**
    - Custom-themed MUI Tab component for dashboard navigation.
8. **Data Fetching**
    - Fetched cryptocurrency data from the CoinGecko API using Axios.
9. **Number Formatting**
    - Used `toLocaleString()` to format numbers with commas.
    - Used `toFixed(2)` to format numbers to two decimal places.
10. **Number Conversion**
    - Created a custom function to convert numbers to K, M, B formats.
11. **Search Functionality**
    - Implemented search using the `.filter()` method.
12. **Animation Delay**
    - Added delay in animations for Grid and List components.
13. **Pagination**
    - Implemented pagination using MUI, slicing data according to the page number.
14. **Scroll to Top**
    - Wrote a JavaScript function to scroll to the top of the page.

## Coin Page

15. **Router Params**
    - Used router parameters to get the ID of the cryptocurrency.
16. **Data Fetching by ID**
    - Fetched data and prices for a specific number of days using the cryptocurrency ID.
17. **Charts**
    - Utilized `react-chartjs-2` to create charts.
18. **Date Array**
    - Created a function to get an array of dates for a specified number of days.
19. **MUI Select**
    - Implemented MUI Select to choose the number of days and fetch prices accordingly.
20. **MUI Toggle Buttons**
    - Used MUI Toggle Buttons to get prices, market cap, and volume values.
21. **Dangerously Set Inner HTML**
    - Used `dangerouslySetInnerHTML` attribute to render HTML strings.
22. **Loading Component**
    - Created a loading component to ensure data is loaded before rendering.
23. **Custom Styled Object**
    - Styled MUI components using custom styled objects.
    - Added "Read More" or "Read Less" functionality.

## Compare Page

24. **Simultaneous Graphs**
    - Implemented two simultaneous graphs with two Y-axes and two datasets.
25. **Select Component**
    - Used MUI Select component to list the top 100 coins.
26. **Unique Coin Selection**
    - Ensured that the same coin cannot be selected in both selectors.

## Light Mode Dark Mode

27. **Theme Management**
    - Managed themes using local storage and a `data-theme` variable in CSS.
28. **Root Variable Updates**
    - Updated root variables according to the selected theme.

## Watchlist

29. **Adding to Watchlist**
    - Added functionality to add coins to a watchlist using local storage.
30. **Removing from Watchlist**
    - Added functionality to remove coins from the watchlist.
31. **Watchlist Page**
    - Used `useEffect` to manage the watchlist page.

## Other Features

32. **Web Share API**
    - Integrated `RWebShare` npm package for sharing functionality.
33. **Custom Mouse Pointer**
    - Created custom mouse pointers using two divs that follow the mouse with a delay.
34. **MUI Icons**
    - Utilized MUI Icons throughout the project.
35. **SEO Optimization**
    - Improved SEO and ensured code modularity and reusability.
36. **Hosting**
    - Hosted the project using Netlify with a `netlify.toml` configuration file.
37. **Gradient Footer**
    - Added a gradient animation to the footer.
38. **Toasts**
    - Integrated `react-toastify` to show toasts for various actions.

## Deployment

The project is hosted using Netlify.