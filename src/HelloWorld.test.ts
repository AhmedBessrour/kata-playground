import { HelloWorld } from './HelloWorld'

describe('Say Hello', () => {
  it('answers Hello World', () => {
    // Arrange
    const helloWorld = new HelloWorld()

    // Act
    const answer = helloWorld.sayHello()

    // Assert
    expect(answer).toBe('Hello World')
  })
})
