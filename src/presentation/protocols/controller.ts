import type { HttpRequest, HttpResponse } from './http';

export interface Controller<T = unknown> {
  handle: (httpRequest: HttpRequest<T>) => HttpResponse;
}
