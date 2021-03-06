import logo from './MX_Nav_EN.png';
import {useEffect, useState} from "react";
import {Card, SearchFilter, SearchResult} from "./Types";
import Api from "./Api";

function CardItem(card: Card) {
    return (
        <li>
            {card.name}
        </li>
    );
}

export default function App(props: any) {

    const api = new Api();
    const [filter, setFilter] = useState<SearchFilter>({});
    const [searchResult, setSearchResult] = useState<SearchResult | undefined>(undefined);

    useEffect(() => {
        doSearch();
    }, [props]);

    const doSearch = () => {
        api.get('/')
            .then(response => response.json())
            .then((response: SearchResult) => setSearchResult(response))
    }

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} id="logo" alt="logo"/>
				<h1>Card explorer</h1>
			</header>
			<main>
                <ul>
                    {searchResult && searchResult.cards.map(card => <CardItem {...card}/>)}
                </ul>
			</main>
		</div>
	);
}
