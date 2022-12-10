import React from 'react'

import imageSrc from '../../../static/images/linkedin-loading.svg'

const Spinner = () => {
	return (
		<>
			<div id="loading-page">
				<div>
					<img src={imageSrc} class="logo" alt="Loading" />
					<div class="loading-bar">
						<div class="blue-bar"></div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Spinner
