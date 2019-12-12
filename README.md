# Flux Validator Js

A package to validate strings and input data with vanilla js.

## Getting Started

### Install
Install via npm:
```console
npm install @doc88/flux-validator-js
```

Install via yarn:
```console
yarn add @doc88/flux-validator-js
```

### How to use
#### Import
```javascript
import Validator from '@doc88/flux-validator-js'
```

#### Use
```javascript
function(inputName, value) {
  const inputValidation = Validator.email(inputName, value) // returns { name: 'inputName', valid: bool }
  if (inputValidation.valid) {
    // do something if your email is correct
  } else {
    // do something if your email is invalid
  }
}
```

#### Validator Options
##### Mercosul car plate
Ex: AAA-0000 or AAA-0A00

```javascript
Validator.carPlate(inputName, value)
```

##### Brazilian CEP
Ex: 00000-000
Ex: 00000000

```javascript
Validator.cep(inputName, value)
```

##### Brazilian CNH
Ex: 00000000000

```javascript
Validator.cnh(inputName, value)
```

##### Brazilian CNPJ
Ex: 00.000.000/0000-00

```javascript
Validator.cnpj(inputName, value)
```

##### Brazilian CPF
Ex: 000.000.000-00

```javascript
Validator.cpf(inputName, value)
```

##### Brazilian CPF & CNPJ
Ex: 000.000.000-00|0000-00

```javascript
Validator.cpfCnpj(inputName, value)
```

##### dd/mm/yyyy Date
Ex: 00/00/0000

```javascript
Validator.date(inputName, value)
```

##### Email
Ex: aaaaa@aaa.aaa.aa

```javascript
Validator.email(inputName, value)
```

##### File Size
Ex: 1024

```javascript
Validator.fileSize(files, size)
```

##### File Type
Ex: jpg|svg|jpeg|png|bmp|gi

```javascript
Validator.fileType(files)
```

##### File Type Csv
Ex: csv

```javascript
Validator.fileTypeCsv(files)
```

##### Numbers
Ex: 0123456

```javascript
Validator.numbers(inputName, value)
```

##### Letters
Ex: abcdefgABCDEFG

```javascript
Validator.letters(inputName, value)
```

##### Brazilian Phone
Ex: +55 (11) 0 0000-0000

```javascript
Validator.phone(inputName, value)
```

##### Brazilian Renavam
Ex: 00000000000

```javascript
Validator.renavam(inputName, value)
```

##### RegEx
Ex: `/^[0-9]+$/`

```javascript
Validator.regex(inputName, value, regex)
```