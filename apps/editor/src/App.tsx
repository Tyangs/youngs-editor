import { Image } from '@youngs-editor/image';
import React from 'react';

const SOURCE =
	'https://lh3.googleusercontent.com/ogw/ADea4I7OBTjAbYECcTELdcn2TI1M1Y2VnYFOnh8fO-eO=s64-c-mo';

const App = () => {
	return (
		<div>
			App
			<Image src={SOURCE} />
		</div>
	);
};

export default App;
