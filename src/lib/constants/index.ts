import type { Preset } from '$lib/types';

export const GOOGLE_PRESETS: Preset[] = [
	{ label: '', value: '' },
	{
		label: 'Directory listing (Index of)',
		value: 'intitle:index.of'
	},
	{
		label: 'Spreadsheets: xlsx, xls, ods, csv, tsv',
		value: 'filetype:xlsx OR filetype:xls OR filetype:ods OR filetype:csv OR filetype:tsv'
	},
	{
		label: 'Text documents: docx, doc, odt, rtf, pdf, txt',
		value:
			'filetype:docx OR filetype:doc OR filetype:odt OR filetype:rtf OR filetype:pdf OR filetype:txt'
	},
	{
		label: 'Slide presentations: pptx, ppt, odp, pdf',
		value: 'filetype:pptx OR filetype:ppt OR filetype:odp OR filetype:pdf'
	},
	{
		label: 'File database.yml',
		value: 'filetype:yml database'
	}
];

export const GITHUB_PRESETS: Preset[] = [
	{ label: '', value: '' },
	{
		label: 'API Keys & Tokens',
		value:
			'"api_key" OR "api_secret" OR "api_token" OR "aws_access_key_id" OR "aws_secret_key" OR "x-api-key" OR "HEROKU_API_KEY" OR "HOMEBREW_GITHUB_API_TOKEN" OR "shodan_api_key"'
	},
	{
		label: 'Passwords & Secrets',
		value:
			'"password" OR "passwd" OR "secret" OR "aws_secret_access_key" OR "secret_key" OR "dbpassword" OR "redis_password" OR "root_password" OR "secret_access_key" OR "SECRET_KEY_BASE="'
	},
	{
		label: 'File Types & Configs',
		value:
			'filename:.env OR filename:.bashrc OR filename:.git-credentials OR filename:.npmrc OR filename:.s3cfg OR filename:wp-config OR filename:server.cfg OR "s3.yml"'
	},
	{
		label: 'Specific Services',
		value: '"amazonaws" OR "firebase" OR "herokuapp" OR "mailgun" OR "slack_api"'
	},
	{
		label: 'Database Info',
		value:
			'"db_password" OR "db_username" OR "dbpasswd" OR "dbpassword" OR "dbuser" OR "database_password" OR "sql_password"'
	},
	{
		label: 'AWS Specific',
		value:
			'"aws_access" OR "aws_token" OR "AWSSecretKey" OR "S3_ACCESS_KEY_ID" OR "S3_BUCKET" OR "S3_ENDPOINT" OR "S3_SECRET_ACCESS_KEY"'
	},
	{
		label: 'SSH & Encryption',
		value:
			'"private_key" OR "pem private" OR filename:id_rsa OR filename:id_dsa OR "encryption_key"'
	}
];
