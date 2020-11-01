import React, { useRef, useState } from 'react';
import './ImageUploader.css';
import axios from 'axios';

function ImageUploader() {
	const [selectedFile, setSelectedFile] = useState(null);
	// Create a reference to the hidden file input element
	const hiddenFileInput = useRef(null);

	const fileSelectedHandler = (e) => {
		setSelectedFile(e.target.files[0]);
	};

	const fileUploadHandler = () => {
		console.log(selectedFile);
		// const formData = new FormData();
		// formData.append('image', selectedFile, selectedFile.name);
		// axios
		// 	.post('endpointLink', formData, {
		// 		onUploadProgress: (progressEvent) => {
		// 			console.log('Upload Progress: ' + Math.round((progressEvent.loaded / progressEvent.total) * 100) + '%');
		// 		},
		// 	})
		// 	.then((res) => {
		// 		console.log('Output from the back end');
		// 	});
	};

	const handleClick = (event) => {
		hiddenFileInput.current.click();
	};

	return (
		<div className="imageUploader">

            <div className="imageUploaderSampleImage">
                <h2>Sample Image of the input </h2>
            </div>

			<div className="imageUploader__buttons">
				<input style={{ display: 'none' }} type="file" ref={hiddenFileInput} onChange={fileSelectedHandler} />
				<button onClick={handleClick}>Pick File</button>
				<button onClick={fileUploadHandler}>DETECT</button>
			</div>
		</div>
	);
}

export default ImageUploader;
