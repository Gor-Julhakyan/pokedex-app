const rewire = require("rewire")
const App = rewire("./App")
const pokemon = App.__get__("pokemon")
// @ponicode
describe("pokemon", () => {
    test("0", () => {
        let object = [["string", "number", "object", "array"], ["string", "number", "object", "array"], ["string", "number", "object", "array"]]
        let callFunction = () => {
            pokemon({ sprites: "da7588892", id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", name: "Jean-Philippe", stats: "Marketing", types: object })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [["string", "number", "object", "array"], ["string", "number", "object", "array"], ["string", "number", "object", "array"]]
        let callFunction = () => {
            pokemon({ sprites: 12345, id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", name: "Edmond", stats: "Chief Product Officer", types: object })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [["string", "number", "object", "array"], ["string", "number", "object", "array"], ["string", "number", "object", "array"]]
        let callFunction = () => {
            pokemon({ sprites: "da7588892", id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", name: "Pierre Edouard", stats: "Data Scientist", types: object })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["string", "number", "object", "array"], "string", ["string", "number", "object", "array"]]
        let callFunction = () => {
            pokemon({ sprites: "bc23a9d531064583ace8f67dad60f6bb", id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", name: "Michael", stats: "Chief Product Officer", types: object })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = ["string", "object", ["string", "number", "object", "array"]]
        let callFunction = () => {
            pokemon({ sprites: "bc23a9d531064583ace8f67dad60f6bb", id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", name: "Pierre Edouard", stats: "Data Scientist", types: object })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            pokemon(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getPokemons", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Jean-Philippe", "George"], ["Michael", "Pierre Edouard", "Pierre Edouard"], ["Anas", "Jean-Philippe", "Jean-Philippe"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.getPokemons()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("filterByCategory", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "George", "Anas"], ["Edmond", "George", "Pierre Edouard"], ["George", "Edmond", "Anas"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.filterByCategory()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Edmond", "Michael", "Edmond"], ["Pierre Edouard", "Pierre Edouard", "Anas"], ["Jean-Philippe", "George", "Jean-Philippe"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onHandleChange", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Anas", "Michael"], ["Michael", "Michael", "George"], ["George", "Pierre Edouard", "Edmond"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.onHandleChange(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onHandleChange(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.onHandleChange(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.onHandleChange(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.onHandleChange(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.onHandleChange(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("inputChanges", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Michael", "Anas"], ["Pierre Edouard", "Edmond", "George"], ["Jean-Philippe", "Anas", "Pierre Edouard"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.inputChanges({ name: "Anas", value: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.inputChanges({ name: "Pierre Edouard", value: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.inputChanges({ name: "category", value: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.inputChanges({ name: "Anas", value: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.inputChanges({ name: "Jean-Philippe", value: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.inputChanges(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
