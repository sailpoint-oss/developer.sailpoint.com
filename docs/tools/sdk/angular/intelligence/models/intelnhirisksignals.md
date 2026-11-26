# Intelnhirisksignals

# Intelnhirisksignals

Import this model from the entry point of its package:

```typescript
import { Intelnhirisksignals } from '@sailpoint/angular-sdk/intelligence';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | **(optional)** `Array<Intelnhirisksignalwire>` | First page of risk factors. | [default to undefined]
**totalCount** | **(optional)** `number` | Total number of risk factors. Omitted when `items` is empty. | [default to undefined]
**next** | **(optional)** `string` | URL for the next page of risk factors. Omitted when everything fits on this page. | [default to undefined]
**message** | **(optional)** `string` | Set when risk factors could not be loaded. `items`, `totalCount`, and `next` are omitted. | [default to undefined]
**reason** | **(optional)** `Intelenrichmentfailurereason` |  | [default to undefined]

