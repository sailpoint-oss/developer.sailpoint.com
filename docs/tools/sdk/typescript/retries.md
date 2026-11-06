# Retries with The TypeScript SDK

The SDK supports retry logic in the case of an unexpected error. You are able to configure the number of retries and the delay between retries. This logic is implemented in lines 7-12:

```typescript showLineNumbers
import {
  Configuration,
  axiosRetry,
  AccountsApi,
  Paginator,
} from 'sailpoint-api-client';

const getPaginatedAccounts = async () => {
  let apiConfig = new Configuration();
  apiConfig.retriesConfig = {
    retries: 4,
    retryDelay: axiosRetry.exponentialDelay,
    onRetry(retryCount, error, requestConfig) {
      console.log(`retrying due to request error, try number ${retryCount}`);
    },
  };
  let api = new AccountsApi(apiConfig);

  const val = await Paginator.paginate(api, api.listAccountsV1, {limit: 100}, 10);

  console.log(val);
};

getPaginatedAccounts();
```

Run this command to run the code:

```bash
bun src/index.ts
```
