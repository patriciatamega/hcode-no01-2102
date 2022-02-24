import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payments')
export class PaymentController {
    [x: string]: any;

    constructor(private PaymentService: PaymentService) {}

    @Get(':id')
    async show(@Param('id') id) {
    return this.paymentService.get(id);
    }

    @Get()
    async showByName(@Query('name') name) {
    return this.paymentService.getByEmail(name);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() body) {
    return this.paymentService.update(id, body);
    }
}

