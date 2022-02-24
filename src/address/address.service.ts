import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';

@Injectable()
export class AddressService {

    constructor(private db: PrismaService) {}

    async create({street, number, complement, district, city, state, country, zipcode}:
                {street: string;
                number: number;
                complement: string;
                district: string;
                city: string;
                state: string;
                country: string;
                zipcode: number
            }) {

    }
}
