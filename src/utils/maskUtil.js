class SimpleMask {
	constructor(_maskFormat) {
		this._maskFormat = _maskFormat
	}

	mask(value) {
		if (!value)
			return

		let x = ''
		let index = 0
		for (let i = 0; i < this._maskFormat.length; i++)
			if (value[index] && Number.isInteger(Number.parseInt(value[index])))
				if (Number.isInteger(Number.parseInt(this._maskFormat[i])))
					x += value[index++]
				else
					x += this._maskFormat[i]
			else
				break

		return x
	}

	unmask(masked) {
		if (!masked)
			return

		let value = ''
		let counter = 0
		const maxLength = this._maskFormat.match(/9/g).length
		for (let i = 0; i < masked.length; i++) {
			const x = Number.parseInt(masked[i])
			if (Number.isInteger(x) && counter < maxLength) {
				value += x
				counter++
			}
		}
		return value
	}
}

export const ZipCodeMask = new SimpleMask('99999-9999')
export const PhoneMask = new SimpleMask('(999)999-9999')
export const DateMask = new SimpleMask('99/99/9999')
export const CardExpirationMask = new SimpleMask('99/9999')

export default SimpleMask