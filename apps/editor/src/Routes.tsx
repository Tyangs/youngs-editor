import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Editor from '@/pages/Editor';
import Home from '@/pages/Home';

export default function() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/editor" element={<Editor />} />
			</Routes>
		</BrowserRouter>
	);
}
