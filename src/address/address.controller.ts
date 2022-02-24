import { Body, Controller, Post } from '@nestjs/common';
import { AddressService } from './address.service';

@Controller('addresses')
export class AddressController {

    constructor(private AddressService: AddressService) {}

    @Post()
    async create(
        @Body('street') street,
        @Body('number') number,
        @Body('complement') complement,
        @Body('district') district,
        @Body('city') city,
        @Body('state') state,
        @Body('country') country,
        @Body('zipcode') zipcode,
        ) {

            return this.AddressService.create({
                street,
                number,
                complement,
                district,
                city,
                state,
                country,
                zipcode
            });

    }
}
