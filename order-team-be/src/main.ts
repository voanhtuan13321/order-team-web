import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logApplicationAddresses } from './common';

/**
 * Bootstraps the NestJS application and starts it listening.
 * The `PORT` environment variable can be used to set the port.
 * If `PORT` is not set, the application will listen on port 3002.
 * Once listening, the function logs the addresses on which the
 * application is listening with the help of the
 * `logApplicationAddresses` function.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.PORT) ?? 3002;

  await app.listen(port, () => logApplicationAddresses(port));
}

bootstrap();
