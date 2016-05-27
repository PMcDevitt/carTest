'use strict'

var expect = require('chai').expect
var Car = require('../Car')

describe('car class', function () {
  it('new car', function () {
    var mondeo = new Car()

    expect(mondeo.fuel).to.equal(0)
  })
  it('add fuel', function () {
    var mondeo = new Car()

    mondeo.addFuel(40)
    expect(mondeo.fuel).to.equal(40)

    mondeo.addFuel(25)
    expect(mondeo.fuel).to.equal(65)

    var fiesta = new Car()

    fiesta.addFuel(25)
    expect(fiesta.fuel).to.equal(25)
  })
  it('drive car', function () {
    var mondeo = new Car()

    expect(mondeo.odometer).to.equal(0)

    mondeo.addFuel(40)
    mondeo.driveCar(80)
    expect(mondeo.fuel).to.equal(20)
    expect(mondeo.odometer).to.equal(80)

    mondeo.driveCar(1000)
    expect(mondeo.fuel).to.equal(0)
    expect(mondeo.odometer).to.equal(160)
  })
  it('new car with fuel', function() {
    var mondeo = new Car(15)

    expect(mondeo.fuel).to.equal(0)
  })
  it('car due service', function() {
    var mondeo = new Car()

    expect(mondeo.isServiceDue()).to.be.false

    mondeo.addFuel(1000)
    mondeo.driveCar(1000)
    expect(mondeo.isServiceDue()).to.be.true

    mondeo.carryoutService()
    expect(mondeo.isServiceDue()).to.be.false

    mondeo.addFuel(1000)
    mondeo.driveCar(1000)
    expect(mondeo.isServiceDue()).to.be.true
  })
})
