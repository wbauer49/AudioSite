import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import {Slider, RangeSlider} from 'reactrangeslider';
import "./App.css";

class SampleMultiplier extends Component {

	render() {
		return (

<div class="blockDiv">
	<h4 class="commentH6">This effect repeats audio samples in a given range</h4>
    <Slider
        step={1}
        min={2}
        max={10}
        defaultValue={5}
        onChange={this.onChange}
    />
    <RangeSlider
        step={1}
        min={-128}
        max={127}
        defaultValue={{start: -128, end: 0}}
        onChange={this.onChange}
    />
    <button class="applyButton">Apply Effect</button>
    <br/>
    <ReactAudioPlayer
		src="http://www.nihilus.net/soundtracks/Static%20Memories.mp3"
		controls
	/>

</div>

		);
	}
}

export default SampleMultiplier;
