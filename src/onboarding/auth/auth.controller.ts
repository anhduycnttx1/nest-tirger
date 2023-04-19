
import { Body, Controller, Post, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
     constructor(private authService: AuthService) { }

     @HttpCode(200)
     @Post('register')
     async register(@Body() registerDto: RegisterDto): Promise<any> {
          return await this.authService.register(registerDto)
     }

     @HttpCode(200)
     @Post('auth-with-password')
     async login(@Body() loginDto: LoginDto): Promise<any> {
          return await this.authService.login(loginDto)
     }
}