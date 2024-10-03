import { AuthOptions } from 'next-auth';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Gitlab from 'next-auth/providers/gitlab';
import EmailProvider from 'next-auth/providers/email';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/lib/db';
import { env } from '@/env.mjs';

export const options: AuthOptions = {
	providers: [
		Github({
			clientId: env.GITHUB_ID,
			clientSecret: env.GITHUB_SECRET,
		}),
		Google({
			clientId: env.GOOGLE_ID,
			clientSecret: env.GOOGLE_SECRET,
		}),
		Gitlab({
			clientId: env.GITLAB_ID,
			clientSecret: env.GITLAB_SECRET,
		}),
		EmailProvider({
			server: {
				host: env.EMAIL_SERVER_HOST,
				port: env.EMAIL_SERVER_PORT,
				auth: {
					user: env.EMAIL_SERVER_USER,
					pass: env.EMAIL_SERVER_PASS,
				},
			},
			from: env.EMAIL_FROM,
		}),
	],
	session: {
		strategy: 'database',
		maxAge: 30 * 24 * 60 * 60,
		updateAge: 24 * 60 * 60,
	},
	adapter: PrismaAdapter(prisma),
};
