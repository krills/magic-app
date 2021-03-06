export type SearchFilter = {
	page?: number;
	query?: string;
}

export enum CardColor {
	White,
	Black,
	Red,
	Blue,
	Green
}

export enum ColorIdentity {W, B, G, R, U}

export enum Rarity {Common, Uncommon, Rare, "Mythic Rare", Special, "Basic Land"}

export type Card = {
	name: string;
	manaCost: string;
	cmc: number;
	colors: CardColor[];
	colorIdentity: ColorIdentity[];
	type: string;
	types: string[];
	subtypes: string[];
	rarity: Rarity;
	text: string;
	flavor: string;
	power: string;
	toughness: string;
	id: string;
	imageUrl?: string;
}

export type SearchResult = {
	pageSize: number;
	totalHits: number;
	cards: Card[];
}