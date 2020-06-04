declare module '@this-empathy/javascript-validator' {
	export interface res {
		name: string
		valid: boolean
		company?: string | null
		message?: string | null
	}

	export interface age {
		value: string
		condition: string
		age: string
	}

	export interface card {
		number: string
		owner: string
		cvv: string
		date: string
	}

	export function carPlate(name: string, value: string): res
	export function cep(name: string, value: string): res
	export function cnh(name: string, value: string): res
	export function cnpj(name: string, value: string): res
	export function cpf(name: string, value: string): res
	export function cpfCnpj(name: string, value: string): res
	export function date(name: string, value: string, locale?: string): res
	export function email(name: string, value: string): res
	export function fileSize(files: object, size: number): boolean
	export function fileType(files: object): boolean
	export function fileTypeCsv(files: object): boolean
	export function letter(name: string, value: string): res
	export function number(name: string, value: string): res
	export function phone(name: string, value: string): res
	export function regex(name: string, value: string): res
	export function renavam(name: string, value: string): res
	export function required(name: string, value: string): res
	export function age(name: string, value: age): res
	export function creditCard(name: string, value: card): res
	export function creditCardDate(name: string, value: string): res
	export function creditCardNumber(name: string, value: string): res
	export function rg(name: string, value: string): res
	export function specialCharacters(name: string, value: string): res
}
