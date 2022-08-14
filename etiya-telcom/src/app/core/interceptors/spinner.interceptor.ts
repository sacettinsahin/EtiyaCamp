import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(
    public spinner: SpinnerService
  ) {}

  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   this.spinner.handleRequest('plus');
  //   return next
  //     .handle(request)
  //     .pipe(
  //       finalize((this.finalize.bind(this)))
  //     );
  // }

  // finalize = (): void => this.spinner.handleRequest();

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.method != 'GET') this.spinner.setIsLoading(true);

    return next.handle(request).pipe(
      finalize(() => {
        setTimeout(() => {
          this.spinner.setIsLoading(false);
        }, 3000);
      })
    );
  }
}
