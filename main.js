function Registro(nome, char, caveira, ip) {
    this.nome = nome
    this.char = char
    this.caveira = caveira

    let _ip = ip 

    this.getIp = function() {
        return _ip
    }

    this.setIp = function (numeroIp) {
        if (typeof numeroIp === 'number') {
            return _ip = numeroIp
        }
    }
}

const registro1 = new Registro('Marcus', 'Caps', 'Server Admin', 12345678)
console.log(registro1)
console.log(registro1.getIp())
