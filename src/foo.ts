/** @public */
export class Foo {
    greet() {
        console.log('Hello from foo!');
    }

    createBar(): Bar {
        return new Bar();
    }
}

/** @public */
export class Bar {
    greet() {
        console.log('Hello from bar!');
    }
}
