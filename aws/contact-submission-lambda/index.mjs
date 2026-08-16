import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

const s3Client = new S3Client({ region: process.env.AWS_REGION || 'us-east-1' });

export const handler = async (event) => {
  const method = event.requestContext?.http?.method || event.httpMethod;
  const requestBody = event.isBase64Encoded
    ? Buffer.from(event.body || '', 'base64').toString('utf8')
    : event.body;
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  if (method === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true }),
    };
  }

  if (method !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  let payload;

  try {
    payload = JSON.parse(requestBody || '{}');
  } catch {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ message: 'Invalid JSON body' }),
    };
  }

  const { name, email, company, projectDetails, submittedAt } = payload;

  if (!name || !email || !projectDetails) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        message: 'Missing required fields: name, email, and projectDetails are required.',
      }),
    };
  }

  const bucketName = process.env.CONTACTS_BUCKET;

  if (!bucketName) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'CONTACTS_BUCKET environment variable is not configured.' }),
    };
  }

  const id = crypto.randomUUID();
  const timestamp = new Date().toISOString();
  const objectKey = `contacts/${timestamp}-${id}.json`;

  const item = {
    id,
    name,
    email,
    company: company || '',
    projectDetails,
    submittedAt: submittedAt || timestamp,
    createdAt: timestamp,
  };

  await s3Client.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: objectKey,
      Body: JSON.stringify(item, null, 2),
      ContentType: 'application/json',
      ACL: 'private',
    })
  );

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      message: 'Inquiry saved successfully',
      objectKey,
      item,
    }),
  };
};
