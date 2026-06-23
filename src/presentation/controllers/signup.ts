/* eslint-disable @typescript-eslint/no-explicit-any -- At this point the implementation is not complete */

/* eslint-disable @typescript-eslint/no-unsafe-member-access -- At this point the implementation is not complete */

export class SignUpController {
  handle(httpRequest: any): any {
    if (!httpRequest.body.name) {
      return {
        body: new Error('Missing param: name'),
        statusCode: 400,
      };
    }

    if (!httpRequest.body.email) {
      return {
        body: new Error('Missing param: email'),
        statusCode: 400,
      };
    }
  }
}
