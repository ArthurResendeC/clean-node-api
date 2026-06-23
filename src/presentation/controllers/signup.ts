export class SignUpController {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- At this point the implementation is not complete
  handle(httpRequest: any): any {
    return {
      body: new Error('Missing param: name'),
      statusCode: 400,
    }
  }
}