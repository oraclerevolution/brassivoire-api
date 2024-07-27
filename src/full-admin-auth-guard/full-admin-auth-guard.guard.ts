import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FULL_ADMIN_AUTH_GUARD } from './full-admin-auth.strategy';

@Injectable()
export class FullAdminAuthGuard extends AuthGuard(FULL_ADMIN_AUTH_GUARD) {}
