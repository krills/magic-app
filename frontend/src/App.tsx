import logo from './MX_Nav_EN.png';
import {useEffect, useState} from "react";
import {SearchFilter, SearchResult} from "./Types";
import Api from "./Api";
import CardItem from "./components/CardItem";

export default function App(props: any) {

    const api = new Api();
    const [searching, setSearching] = useState<boolean>(true);
    const [currentFilter, setFilter] = useState<SearchFilter>({});
    const [searchResult, setSearchResult] = useState<SearchResult | undefined>(undefined);

	const doSearch = () => {
		setSearching(true);
		api.get('/', currentFilter)
			.then(response => response.json())
			.then((response: SearchResult) => {
				setSearching(false);
				setSearchResult(response);
			});
	}

    useEffect(() => {
        doSearch();
	// eslint-disable-next-line
    }, [props]);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} id="logo" alt="logo"/>
				<h1>Card explorer</h1>
			</header>
			<main>
                <form onSubmit={e => {
                    e.preventDefault();
                    doSearch();
                }}>
                    <label>
                        Card name:
                        <input type="text" value={currentFilter.query} placeholder="Enter card name.."
                           autoFocus={true}
                           onChange={e => setFilter({query: e.target.value})} />
                    </label>
                    <input type="submit" value="Search!"/>
                </form>

                <h2>{searching
                    ? 'Searching...'
                    : (searchResult && searchResult.totalHits
                        ? searchResult.totalHits + ' hit' + (searchResult.totalHits !== 1 ? 's' : '')
                        : 'No results!')
                }</h2>
                <ul className={'searchResult'}>
                    {searchResult && searchResult.cards.map(card => <CardItem key={card.id} {...card}/>)}
                </ul>
			</main>
		</div>
	);
}
