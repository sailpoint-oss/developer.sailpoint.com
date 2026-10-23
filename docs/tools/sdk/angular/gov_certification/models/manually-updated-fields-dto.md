# ManuallyUpdatedFieldsDTO

# ManuallyUpdatedFieldsDTO

Import this model from the entry point of its package:

```typescript
import { ManuallyUpdatedFieldsDTO } from '@sailpoint/angular-sdk/gov_certification';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**displayName** | **(optional)** `boolean` | True if the entitlements name was updated manually via entitlement import csv or patch endpoint. False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) > `name` property. | [default to false]
**description** | **(optional)** `boolean` | True if the entitlement description was updated manually via entitlement import csv or patch endpoint. False means that property value has not been change after first entitlement aggregation. Field refers to [Entitlement response schema](https://developer.sailpoint.com/idn/api/beta/get-entitlement) > `description` property. | [default to false]

