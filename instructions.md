# React Technical Interview - Pokemon App

You'll be working with a Pokemon app that uses the [PokeAPI](https://pokeapi.co/) to display Pokemon data. The basic structure is set up, but several key features need to be implemented.

## Time Limit
- **45 minutes** to complete as many tasks as you can
- **15 minutes** to dicuss with interviewer afterwards

## Your Tasks

### Task 1: Implement Pokemon Data Fetching (15-20 minutes)
**Skills tested: useEffect, useState, API calls, async/await**

**Requirements:**
- Fetch Pokemon data for ids 1-20 in PokemonList when page loads `https://pokeapi.co/api/v2/pokemon/{id}`
- Use the fetch API or any library that you want.
- For each Pokemon, you'll need the id, name, and image (sprites.front_default)).

**Expected result:** The app should display 20 Pokemon cards with images and names.

### Task 2: Style Pokemon Cards (10-15 minutes)
**Skills tested: CSS layout, component styling, visual design**

The Pokemon items currently have no styling and appear as plain HTML elements.

**Requirements:**
- Keep it simple!
- Add styling to each Pokemon element so each one is inside a card
- Display the cards in a responsive way with multiple cards per row
- Style each Pokemon card as a vertical layout containing:
  - Pokemon image at the top
  - Pokemon name in the middle  
  - "Add to Favorites" button at the bottom
- Add appropriate spacing and visual hierarchy to make cards look organized
- Ensure the layout works well on different screen sizes
- Style the "Add to Favorites" button with a background and hover styling

**Expected result:** Pokemon should be displayed in a clean, organized layout with each card having a vertical arrangement.

### Task 3: Implement Search Functionality (10-15 minutes)
**Skills tested: State management, array filtering, controlled components**

**Requirements:**
- Make the existing search input functional
- Filter Pokemon by name (case-insensitive)
- Show "No Pokemon found" when no results match

**Expected result:** Typing in the search box should filter the displayed Pokemon in real-time (no submit button!)

### Task 4: Implement Favorites Functionality (15-20 minutes)
**Skills tested: State lifting, prop passing, array manipulation, component communication**

**Requirements:**
- Add functionality to the Favorite button on each pokemon card
- Clicking the button should add the specified pokemon to the favorites list
- Prevent adding duplicate Pokemon to favorites
- Use the same card styling you made in PokemonList
- **Bonus:** Add a functional "Remove from Favorites" button in the Favorites section

**Expected result:** Clicking "Add to Favorites" should add that Pokemon to the Favorites section below. The Favorites section should display the favorited Pokemon with the same styling as the main list.

## Bonus Challenges (If time permits)

5. **Local Storage**: Persist favorites in browser storage
1. **Loading States**: Add better loading indicators during API calls
2. **Error Handling**: Show user-friendly error messages if API calls fail

## API Reference

### PokeAPI Endpoints
- **Individual Pokemon**: `GET https://pokeapi.co/api/v2/pokemon/{id-or-name}`

### Sample API Response Structure
```javascript
// Individual Pokemon object
{
  id: 1,
  name: "bulbasaur",
  sprites: {
    front_default: "https://raw.githubusercontent.com/..."
  },
  types: [
    {
      type: {
        name: "grass"
      }
    }
  ]
}
```
