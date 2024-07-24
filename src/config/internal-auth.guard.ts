import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class InternalAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const requestHeaders = request.headers;

    if (
      !requestHeaders.authorization ||
      requestHeaders.authorization !== 'Basic ZG9jdG9yLmRvY3Rvcg=='
    ) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
