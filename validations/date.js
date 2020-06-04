import Locales from '@this-empathy/locales-patterns'

export default (name, value, locale = 'pt-BR') => {
	let field = {
		name: name,
		valid: false,
		message: '',
	}

	locale = locale.replace('-', '_')
	const pattern = Locales[locale]
	const literal = /\W|_/g.exec(pattern.dateFormat)[0]
	const splitedDate = value.split(literal)

	const getMessage = (value) => {
		value = parseInt(value)
		return {
			day: value < 0 || value > 31 ? 'Day is not valid' : field.message,
			month: value < 0 || value > 12 ? 'Month is not valid' : field.message,
			year: value < 0 ? 'Year is not valid' : field.message,
			default: '',
		}
	}

	const day = splitedDate[pattern.dateSplitedPositions.day]
	const month = splitedDate[pattern.dateSplitedPositions.month]
	const year = splitedDate[pattern.dateSplitedPositions.year]

	field.message = getMessage(day).day
	field.message = getMessage(month).month
	field.message = getMessage(year).year

	const completDate =
		splitedDate.length >= 3 ? new Date(`${month} ${day} ${year}`) : ''
	const objectType = Object.prototype.toString.call(completDate)

	if (objectType === '[object Date]') {
		field.valid = !isNaN(completDate.getTime())
	} else {
		field.message = 'date is not valid'
	}

	return field
}
