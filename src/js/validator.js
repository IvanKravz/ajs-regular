class Validator {
    validateUsername(name) {
        const validate1 = /[a-z]/i.test(name) 
        const validate2 = /^[^\d_-]+[\w-]*[^\d_-]$/.test(name)
        const validate3 = /\d{4}/.test(name)
        if (validate1 && validate2 && !validate3) {
            this.name = name;
            return true
        }
        
        throw new Error('Введите корректное имя')
    } 
}

module.exports = Validator;
