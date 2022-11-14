import { AuthService } from "../src/modules/auth/auth.service";
import { UserService } from "../src/modules/user/user.service";
import { UserRepository } from '../src/modules/user/user.repository'
import { JwtService } from '@nestjs/jwt';
import { LoginByUsernameDto } from "../src/modules/auth/dto/LoginByUsernameDto";
import { LoginReturnDto } from "../src/modules/auth/dto/LoginReturnDto";



describe('The authentication service', () => {

    let userRepository: UserRepository

    let jwtService: JwtService

    const userService = new UserService(userRepository)

    const authService = new AuthService(userService, jwtService)

    it('it should be logged in successfully', () => {
        const data: LoginByUsernameDto = {
            email: "admin@gmail.com",
            password: "default",
            rememberClient: true
        }

        expect(authService.loginWithUsername(data)).toBe(typeof LoginReturnDto)
    })
})