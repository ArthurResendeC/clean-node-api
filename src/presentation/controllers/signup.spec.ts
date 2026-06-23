import { MissingParamError } from '../errors/mising-param.error';
import type { HttpRequest } from '../protocols/http';
import { SignUpController, type SignUpRequestBody } from './signup';

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    // SUT = System Under Test
    const sut = new SignUpController();
    const httpRequest: HttpRequest<SignUpRequestBody> = {
      body: {
        // @ts-expect-error - name is undefined
        name: undefined,
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('name'));
  });
});

describe('SignUp Controller', () => {
  test('Should return 400 if no email is provided', () => {
    const sut = new SignUpController();
    const httpRequest: HttpRequest<SignUpRequestBody> = {
      body: {
        name: 'any_name',
        // @ts-expect-error - email is undefined
        email: undefined,
        password: 'any_password',
        passwordConfirmation: 'any_password',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('email'));
  });
});

describe('SignUp Controller', () => {
  test('Should return 400 if no password is provided', () => {
    const sut = new SignUpController();
    const httpRequest: HttpRequest<SignUpRequestBody> = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        // @ts-expect-error - password is undefined
        password: undefined,
        passwordConfirmation: 'any_password',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('password'));
  });
});

describe('SignUp Controller', () => {
  test('Should return 400 if no passwordConfirmation is provided', () => {
    const sut = new SignUpController();
    const httpRequest: HttpRequest<SignUpRequestBody> = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        password: 'any_password',
        // @ts-expect-error - password is undefined
        passwordConfirmation: undefined,
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(
      new MissingParamError('passwordConfirmation'),
    );
  });
});
