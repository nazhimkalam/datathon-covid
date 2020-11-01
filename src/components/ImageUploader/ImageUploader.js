import React, { useEffect, useRef, useState } from 'react';
import './ImageUploader.css';
import axios from 'axios';
import { Button } from '@material-ui/core';

function ImageUploader() {
	const [selectedFile, setSelectedFile] = useState(null);
	const [output, setOutput] = useState(null);
	const hiddenFileInput = useRef(null);
	const [loading, setLoading] = useState(false);
	const [displaySampleInput, setDisplaySampleInput] = useState(false);
	const [detectedBool, setdetectedBool] = useState(true);

	useEffect(() => {}, [output]);

	const fileSelectedHandler = (e) => {
		setSelectedFile(e.target.files[0]);
	};

	const fileUploadHandler = () => {
		console.log(selectedFile);
		// const formData = new FormData();
		// formData.append('image', selectedFile, selectedFile.name);
		// axios
		// 	.post('endpointLink', formData })
		// 	.then((res) => {
		//         console.log('Output from the back end');
		//         setOutput(res)
		// 	});
	};

	const handleClick = (event) => {
		hiddenFileInput.current.click();
	};

	return (
		<div className="imageUploader">
			<div>
				{displaySampleInput && (
					<div className="imageUploaderSampleImage">
						<h3>Sample Image Input </h3>
						<img
							src="https://prod-images-static.radiopaedia.org/images/157210/332aa0c67cb2e035e372c7cb3ceca2_jumbo.jpg"
							alt=""
						/>
					</div>
				)}

				{loading && (
					<div>
						<img
							src="https://i.pinimg.com/originals/59/22/20/5922208e18658f5e83b6ad801b895f71.gif"
							className="loadingProgress"
							alt=""
						/>
					</div>
				)}
			</div>

			{detectedBool && (
				<div className="detectedOutputResult">
					{/* <h1>{output}</h1> */}
					<h1>Normal</h1>
				</div>
			)}

			<div className="imageUploader__buttons">
				<h3>Upload Image </h3>
				<input style={{ display: 'none' }} type="file" ref={hiddenFileInput} onChange={fileSelectedHandler} />
				<div>
					<Button onClick={handleClick}>Pick File</Button>
					<Button onClick={fileUploadHandler}>DETECT</Button>
				</div>
			</div>
		</div>
	);
}

export default ImageUploader;
