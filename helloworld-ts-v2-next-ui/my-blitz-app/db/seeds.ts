import db from './index';
import { SecurePassword } from '@blitzjs/auth';

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * to easily generate realistic data.
 */
const seed = async () => {
  const hashedPassword = await SecurePassword.hash('1234567890');
  for (let i = 0; i < 50; i++) {
    await db.user.create({
      data: {
        email: `user${i}@gmail.com`,
        hashedPassword,
      },
    });
  }

  for (let i = 0; i < 50; i++) {
    await db.project.create({ data: { name: 'Project ' + i, description: 'helloworld' } });
  }
};

export default seed;
