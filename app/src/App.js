import React,{Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import SampleMultiplier from './SampleMultiplier.js';
import "./App.css";

class App extends Component {

	render() {
		return (
<body>
	<div id="mainDiv">
		<h1 id="titleH1">Welcome to Will's audio effects</h1>

		<div class="rowDiv">
			<div class="blockDiv">
				<SampleMultiplier />
			</div>
			<div class="blockDiv">
				<ReactAudioPlayer
					src="http://www.nihilus.net/soundtracks/Static%20Memories.mp3"
					controls
				/>
			</div>
		</div>
		<div class="rowDiv">
			<div class="blockDiv">
				<ReactAudioPlayer
					src="http://www.nihilus.net/soundtracks/Static%20Memories.mp3"
					controls
				/>
			</div>
			<div class="blockDiv">
				<ReactAudioPlayer
					src="http://www.nihilus.net/soundtracks/Static%20Memories.mp3"
					controls
				/>
			</div>
		</div>
	</div>
</body>
		);
	}
}

export default App;
