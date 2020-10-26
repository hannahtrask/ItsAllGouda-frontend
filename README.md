# UNIT3-frontend
# It's All Gouda

## Project links

 - [Github Frontend link](https://github.com/hannahtrask/UNIT3-frontend)
 - [Github Backend Link](https://github.com/hannahtrask/UNIT3-backend)
 - [Live Project on Netlify](live project link on netlify)

## Project Description

The idea for this project is to bring a couple of smiles to some faces. We've all been living our day to day lives in the midst of a global pandemic, hearing bad news nearly every day and regularly choking down tough pills to swallow. For our app — It's All Gouda — we're hoping to get everyone laughing a little bit. With food puns on every page, fun colors, and searchable snacks, we hope to brighten everyone's day a little bit.

## Project Styling

The general theme of our project is fun, but refined and relaxed. The idea is to make people laugh in a difficult time without being childish.

We decided on this color palette for a couple reasons— it's fun and light-hearted, but also more geared towards adults than children.
- [Color Palette](https://coolors.co/264653-2a9d8f-e9c46a-f4a261-e76f51)

We chose two typefaces to style this app with. Headers and titles will be styled mostly with Carter. The designer created Carter with casual typeforms in mind, which keeps with our theme of mature, but silly. For paragraphs, descriptions, and other information, our app will use Roboto, which is a commonly used typeface on the internet. This will ensure readability and a natural reading rhythm for the user.
- [Google Fonts](https://fonts.google.com/specimen/Carter+One?query=carter#pairings)

## Backend

The models built on the backend will provide the user with the data necessary to search foods by moods which will add them to the mood foods board.

```javascript
const foodSchema = new Schema ({
  name: { type: String, required: true },
  author: String,
  course: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true }
})

const moodSchema = new Schema ({
  name: { type: String, required: true }, 
  foods: [
    {
      ref: 'Food',
      type: mongoose.Schema.Types.ObjectId
    }
  ]
})
```

## Wireframes and App Structure

### App Structure

- [React Architecture](https://res.cloudinary.com/digwu4vdh/image/upload/v1603739268/reactarchitecture_pqnfbq.png)

### Wireframes

Below is a link to our wireframe, we'll adjust this to be responsive as we develop the app.

 - [Mobile Wireframe](https://res.cloudinary.com/digwu4vdh/image/upload/v1603483325/Mwireframe_dknfsa.png)

 - [Tablet Wireframe](https://res.cloudinary.com/digwu4vdh/image/upload/v1603473283/Tablet-Unit3_hj4ttm.png)

 - [Desktop Wireframe](https://res.cloudinary.com/digwu4vdh/image/upload/v1603483579/Dwireframe_fbwrbm.png)
 
 ## MVP/Post MVP
 ##### Unless otherwise noted, time is listed in hours.

 ### MVP
 
   * Install dependencies and libraries
   * Mobile First Styles
   * Media Queries
   * Fetch/Axios/AJAX call
   * Deploy to Netlify
   * User will be able to read about the app and how to use it
   * User can read about each of the team members and see an image of each person
   * User will see a display of all foods associated with a particular mood
   * User will be able to navigate from page to page on a fixed nav bar
   * User will be able to select a mood from a drop down menu
   * User will be able to enter a food/mood/description to the database
 
### Time Estimates

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---:  | :---: |
| About            | h | 4  | x   |
| Meet the Team    | h | 4  | x   |
| Display          | h | 7  | x   |
| NavBar(?)        | l | 5  | x   |
| Create Food Form | h | 8  | x   |
| Mood Form        | h | 8  | x   |
| Total            | h | 36 | x   |

| Task | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---:  | :---: |
| React skeleton                     | h | 5  | x   |
| Mobile-first style                 | h | 6  | x   |
| Install dependencies               | h | 3  | x   |
| Install/research libraries         | h | 5  | x   |
| Fetch/Axios/AJAX call(s)           | l | 6  | x   |
| Media-queries                      | h | 4  | x   |
| Deploy to Netlify                  | h | 3  | x   |
| Total                              | h | 32 | x   |
    
 ### Post MVP
 
  * User will be able to build a personal plate
  * Additional Library
  * Fun Animations
  * Random pun footer

  ### Time Estimates
  
| Task | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| My Plate Component | m | 5  | x  |
| Additional Library | l | 3  | x  |
| Fun Animations     | l | 4  | x  |
| Total              | h | 12 | x  |

## Additional Libraries

  - [additional library](additional library link)
  - [additional library](additional library link)

## Code Snippet

here's a code snippet or two we're all really proud of

```
code snippet
```
