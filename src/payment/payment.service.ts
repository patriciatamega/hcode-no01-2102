import {
    BadRequestException,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { PrismaService } from 'src/prisma/prisma.service';
  import { Prisma } from '@prisma/client';

@Injectable()
export class PaymentService {
    prisma: any;
    constructor(private db: PrismaService) {}

    
    async get(id: number) {

        id = Number(id);

        if (isNaN(id)) {
            throw new BadRequestException("ID is not a number");
        }

        return this.db.contact.findUnique({
            where: {
                id,
            }
        });

    }
}
