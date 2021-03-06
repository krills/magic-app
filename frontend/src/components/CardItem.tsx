import {Card} from "../Types";
import questionMark from '../question_mark.png';

export default function CardItem(card: Card) {
	return (
		<li className={['rarity-'+card.rarity.toString().toLowerCase(), !card.imageUrl ? 'placeholder' : ''].join(' ')}>
			<img src={card.imageUrl ? card.imageUrl : questionMark} alt={card.name} />
			{!card.imageUrl && <>
				{card.name}
				{card.power && card.toughness && <> - {card.power}/{card.toughness}</>}
				<span>{card.type}</span>
				<small>{card.text}</small>
			</>}
		</li>
	);
}