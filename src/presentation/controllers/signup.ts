import { MissingParamError } from '../errors/mising-param.error';
import { badRequest } from '../helpers/http-helper';
import type { Controller } from '../protocols/controller';
import type { HttpRequest, HttpResponse } from '../protocols/http';

export type SignUpRequestBody = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export class SignUpController implements Controller<SignUpRequestBody> {
  handle(httpRequest: HttpRequest<SignUpRequestBody>): HttpResponse {
    const requiredFields: Array<keyof SignUpRequestBody> = [
      'name',
      'email',
      'password',
      'passwordConfirmation',
    ];
    for (const field of requiredFields) {
      if (!httpRequest.body?.[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
    return {
      body: {
        message: 'Error',
      },
      statusCode: 200,
    };
  }
}
