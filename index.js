var express = require('express');
var app = express();
var faker = require('faker');
faker.locale = 'es';
var _ = require('lodash');

var generarIndependiente = function () {
    var randomName = faker.name.findName();
    var randomEmail = faker.internet.email();
    var randomPhone = faker.phone.phoneNumber();
    var randomCity = faker.address.city();

    return {
        nombre: randomName,
        email: randomEmail,
        telefono: randomPhone,
        ciudad: randomCity
    }
}

var generarEmpresa = function () {
    var randomCompanyName = faker.company.companyName();
    var randomAccount = faker.finance.account();
    var randomAccountName = faker.finance.accountName();
    var randomCommerce = faker.commerce.department();

    return {
        empresa: randomCompanyName,
        numeroDeCuenta: randomAccount,
        tipoDeCuenta: randomAccountName,
        departamento: randomCommerce
    }
}


app.get('/', function (req, res) {
    res.send('<p>Reto Backend 1</p><p><a href="/freeters">Freeters</a></p><p><a href="/companies">Companies</a></p>');
});

app.get('/freeters', function (req, res) {
    var cantidad = _.random(10,15);
    var usuarios = _.times(cantidad, generarIndependiente);
    res.json(usuarios);
})

app.get('/companies', function (req, res) {
    var cantidad = _.random(5, 10);
    var companies = _.times(cantidad, generarEmpresa);
    res.json(companies);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})