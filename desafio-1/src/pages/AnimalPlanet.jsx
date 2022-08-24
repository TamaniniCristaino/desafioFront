import React, { useEffect, useState } from 'react';
import AnimalCard2 from 'src/components/Cards/AnimalCard2';
import TableAnimals from 'src/components/Lists/TableAnimals';
import AnimalServices from 'src/utils/AnimalServices';
import FieldText from 'src/components/Fields/FieldText';
import { Grid, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

export default function AnimalPlanet() {
	// const colors = ['red', 'blue', 'green', 'yellow', 'aqua', 'tomato'];
	const [stateInitialListAnimals, setStateInitialListAnimals] = useState([]);
	const [stateListAnimals, setStateListAnimals] = useState(stateInitialListAnimals);
	const [stateFavorites, setStateFavorites] = useState([]);
	const [stateSearch, setStateSearch] = useState(null);

	async function load() {
		const resp = await AnimalServices();
		setStateInitialListAnimals(resp);
		setStateListAnimals(resp);
	}

	useEffect(() => {
		load();
	}, []);

	useEffect(() => {
		if(stateSearch !== null) {
			const newData = stateInitialListAnimals.filter(animal => animal.name.toLowerCase().includes(stateSearch.toLowerCase()));
			setStateListAnimals(newData);
		} else {
			setStateListAnimals(stateInitialListAnimals);
		}

	}, [stateSearch]);

	function handleChange(obj, type) {
		if(type === 'remove') {
			const newObj = stateFavorites.filter(el => el.id !== obj.id);
			setStateFavorites(newObj);
		} else {
			setStateFavorites(prevState => ([
				...prevState,
				obj,
			]));
		}
	}

	return (
		<React.Fragment>
			<Grid container spacing={3} p={2}>
				<Grid item lg={4}>
					<FieldText 
						fullWidth 
						value={stateSearch} 
						style={{ marginBottom: 8 }}
						onChange={e => {
							if(e.target.value === '') {
								setStateSearch(null);
							} else {
								setStateSearch(e.target.value);
							}
						}}
						label={'Search'}
						size={'small'}
						InputProps={{ endAdornment: (
							<InputAdornment position={'end'}>
								<Search />
							</InputAdornment>
						)
						}}
					/>
					<TableAnimals 
						list={stateListAnimals} 
						onClick={(obj, type) => handleChange(obj, type)} 
						favorites={stateFavorites} />
				</Grid>
				<Grid item lg={8}>
					<Grid container spacing={2}>
						{
							stateFavorites.map(el => {
								return (
									<Grid item lg={4} key={el.id}>
										<AnimalCard2 
											animal_type={el.animal_type}
											diet={el.diet}
											geo_range={el.geo_range}
											habitat={el.habitat}
											image_link={el.image_link}
											latin_name={el.latin_name}
											length_max={el.length_max}
											length_min={el.length_min}
											lifespan={el.lifespan}
											name={el.name}
											weight_max={el.weight_max}
											weight_min={el.weight_min}
											active_time={el.active_time}
										/>
									</Grid>
								);
							})
						}
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}