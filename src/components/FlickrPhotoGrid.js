import React, {Component} from 'react'
import styled from 'styled-components'
import Masonry from 'react-masonry-component';

const flickrAPIKey = "f26f7c762e903dd54fa52554cf306860";

const gutterGap = 32;
const masonryOptions = {
	gutter: gutterGap
};

export default class flickrPhotoGrid extends Component {

	state = {
		loaded: false,
		photos: [],
	}

	async componentDidMount() {
		try {
            const response = await fetch(`https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${flickrAPIKey}&user_id=60907555%40N05&format=json&nojsoncallback=1`)
            const flickrFeed = await response.json()
            
            // "photo" is the full array of photos from the user's flickr feed
            this.setState({
                photos: flickrFeed.photos.photo
            });

		} catch (e) {
			console.log(e);
		}
	}

	render() {
		return (
			<StyledMasonry options={masonryOptions}>
				{this.state.photos.map(photo => 
					<PhotoImageContainer href={`https://www.flickr.com/photos/${photo.owner}/${photo.id}`} key={photo.id} target="_blank">
							<PhotoImage src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
					</PhotoImageContainer>
				)}
			</StyledMasonry>
		)
  }
}


// const PhotoGrid = styled.div`
// 	display: grid;
// 	grid-template-columns: repeat(2, 1fr);
// 	grid-gap: 32px;
// 	margin-top: 170px;
// `;

const PhotoImage = styled.img`
	padding: 0px;
	margin: 0;
	margin-bottom: ${gutterGap}px;
	width: 100%;
	height: 100%;
`;

const PhotoImageContainer = styled.a`
	object-fit: cover;
	/* Gutter gap is divided by 2 to allow the gap of the columns to fit the full width of the parent container */
	width: calc(50% - ${gutterGap/2}px);
	transition: all 0.3s;
	@media(max-width: 600px) {
		width: 100%;
	}
	&:hover {
		opacity: 0.85 !important;
	}
`;

const StyledMasonry = styled(Masonry)`
	margin-top: 60px;
`;