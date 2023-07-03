import { Controller, Post } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';

@Controller('batches')
export class BatchController {
  constructor(private scheduler: SchedulerRegistry) {}

  @Post('/start')
  start() {
    const job = this.scheduler.getCronJob('cronSample');
    job.start();
    console.log('start!', job.lastDate());

    return 'done';
  }

  @Post('/stop')
  stop() {
    const job = this.scheduler.getCronJob('cronSample');
    job.stop();
    console.log('stop!', job.lastDate());

    return 'done';
  }
}
