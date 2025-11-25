import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const RawHeaders = createParamDecorator(
  (data, ctx: ExecutionContext): string[] => {
    const { rawHeaders } = ctx.switchToHttp().getRequest<Request>();
    return rawHeaders;
  },
);
