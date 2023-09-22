function Registro(nome, char, ip) {
    this.nome = nome
    this.char = char

    let _ip = ip 

    this.getIp = function() {
        return _ip
    }

    this.setIp = function (numeroIp) {
        if (typeof numeroIp === 'number') {
            return _ip = `IP: ${numeroIp}`
        }
    }
}

function Membro(nome, char, ip) {
    Registro.call(this, nome, char, ip)
}

function Movedor(nome, char, ip) {
    Registro.call(this, nome, char, ip)
}

function Admin(nome, char, ip) {
    Registro.call(this, nome, char, ip)
}

const registro1 = new Membro('Marcus', 'Caps', 12345678)
console.log(registro1)
console.log(registro1.getIp())

const registro2 = new Movedor('William', 'Ware', 12344321)
console.log(registro2)
console.log(registro2.getIp())

const registro3 = new Admin('Matheus', 'Bara', 43211234)
console.log(registro3)
console.log(registro3.getIp())
