# UNIT3-frontend
# It's All Gouda

## Project links

 - [Github Frontend link](https://github.com/hannahtrask/UNIT3-frontend)
 - [Github Backend Link](https://github.com/hannahtrask/UNIT3-backend)
 - [Netlify Link](https://its-all-gouda-frontend.netlify.app/)

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
| About            | h | 4  | 1   |
| Meet the Team    | h | 4  | 4   |
| Display          | h | 7  | 10   |
| NavBar(?)        | l | 5  | 5   |
| Create Food Form | h | 8  | 12  |
| Edit Food Form   | h | 8  | 8  |
| CRUD Functions   | h | 6  | 8 |
| Total            | h | 36 | 48  |

| Task | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---:  | :---: |
| React skeleton                     | h | 5  | 3   |
| Mobile-first style                 | h | 6  | 6   |
| Install dependencies               | h | 3  | 1   |
| Install/research libraries         | h | 5  | 4   |
| Fetch/Axios/AJAX call(s)           | l | 6  | 6   |
| Media-queries                      | h | 4  | 4   |
| Deploy to Netlify                  | h | 3  | 1.5 |
| Total                              | h | 32 | 25.5|
    
 ### Post MVP
 
  * User will be able to build a personal plate
  * Additional Library
  * Fun Animations
  * Random pun footer

  ### Time Estimates
  
| Task | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| My Plate Component | m | 5  | n/a  |
| Additional Library | l | 3  | 4  |
| Fun Animations     | l | 4  | 2  |
| Total              | h | 12 | 6  |

## Additional Libraries

  - [Contentful](https://www.contentful.com/get-started/)
  - [React Bootstrap](https://react-bootstrap.github.io/)
  - [Sass](https://sass-lang.com/)
  - [Framer Motion](https://www.framer.com/motion/)

## Code Snippet

This shows how we mapped over the mood to display all associated foods.

```javascript
	const loaded = () => (
		<div className='Display'>
			<h1 className='moodName'>{mood[0].name}</h1>
			<button className='MoodFood'>
				<Link to='/create'>Add Your Mood Food!</Link>
			</button>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-around',
					flexWrap: 'wrap',
					margin: '20px',
				}}>
				{mood[0].foods.map((food) => {
					return (
						<div key={food._id}>
							<Card className='cards'>
								<Card.Body style={{ width: '18rem' }}>
									<Card.Title>{food.name}</Card.Title>
									<Card.Subtitle>Author: {food.author}</Card.Subtitle>
									<Card.Text>{food.description}</Card.Text>
									<Card.Img
										src={food.img}
										alt='foods displayed on page'></Card.Img>
									<Link to={`/edit/${food._id}`}>
										<button
											type='button'
											onClick={() => {
												handleEditFood(food._id);
											}}
											className='EditDelete'>
											Edit
										</button>
									</Link>
									<button
										type='button'
										className='EditDelete'
										onClick={() => {
											deleteFood(food);
										}}>
										Delete
									</button>
								</Card.Body>
							</Card>
						</div>
					);
				})}
			</div>
		</div>
	);
	const loading = <h1>Loading...</h1>;
	return mood.length > 0 ? loaded() : loading;
```
