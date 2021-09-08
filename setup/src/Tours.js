import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
	return (
		<section>
			<div className="title">
				<h2>Our Tours</h2>
				<div className="underline"></div>
			</div>

			<div>
				{tours.map((tour) => {
					return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
					//What is doing under the hood is const props = {...tour}. So, in Tour component, function parameter instant destructoring is able.
					// Since passing arguments in a function is the same as function foobar(x){} , foobar('string') === const x = 'string'
					// in the same sense, function Tour(props){...}, props = {...tour}
					// So in Tour component parameter, an implicit instant destructoring is available. These are just what I think, require further study.
				})}
			</div>
		</section>
	);
};

export default Tours;
