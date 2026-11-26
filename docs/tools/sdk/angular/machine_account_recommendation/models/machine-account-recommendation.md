# MachineAccountRecommendation

# MachineAccountRecommendation

Import this model from the entry point of its package:

```typescript
import { MachineAccountRecommendation } from '@sailpoint/angular-sdk/machine_account_recommendation';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Recommendation ID. | [default to undefined]
**accountId** | **(optional)** `string` | ID of the account the recommendation is for. | [default to undefined]
**sourceId** | **(optional)** `string` | ID of the source the account belongs to. | [default to undefined]
**isMachine** | **(optional)** `boolean` | Indicates whether the account is recommended as a machine account. | [default to false]
**explanation** | **(optional)** `Array<MachineAccountRecommendationExplanation>` | Reasons that contributed to the recommendation. | [default to undefined]
**created** | **(optional)** `string` | Date and time when the recommendation was created. | [default to undefined]
**recommendation** | **(optional)** `string` | Recommendation result. | [default to undefined]
**recommendationType** | **(optional)** `string` | Type of recommendation. | [default to undefined]
**algorithm** | **(optional)** `string` | Algorithm that produced the recommendation. | [default to undefined]

