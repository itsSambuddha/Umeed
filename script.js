import OpenAI from 'openai';

const openaiClient = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: "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",
//   defaultHeaders: {
//     'HTTP-Referer': '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai.
//     'X-Title': '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai.
//   },
});

async function main() {
  const completion = await openaiClient.chat.completions.create({
    model: 'deepseek/deepseek-chat-v3-0324:free',
    messages: [
      {
        role: 'user',
        content: 'What is the meaning of life?',
      },
    ],
  });

  console.log(completion.choices[0].message);
}

main();
