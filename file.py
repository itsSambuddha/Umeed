from openai import OpenAI

client = OpenAI(
  base_url="https://openrouter.ai/api/v1",
  api_key="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",
)

completion = client.chat.completions.create(
  extra_headers={
    "HTTP-Referer": "<YOUR_SITE_URL>", # Optional. Site URL for rankings on openrouter.ai.
    "X-Title": "<YOUR_SITE_NAME>", # Optional. Site title for rankings on openrouter.ai.
  },
  model="google/gemini-2.0-flash-exp:free",
  messages=[
    {
      "role": "user",
      "content": "What is the meaning of life?",
    }
  ]
)

print(completion.choices[0].message.content)
