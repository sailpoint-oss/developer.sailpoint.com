# SubtypeProvisioningPolicy

# SubtypeProvisioningPolicy

Import this model from the entry point of its package:

```typescript
import { SubtypeProvisioningPolicy } from '@sailpoint/angular-sdk/machine_account_subtypes';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the provisioning policy. Must not be supplied on create. | [readonly] [default to undefined]
**subtypeId** | **(optional)** `string` | ID of the subtype the policy belongs to. Must not be supplied on create. | [readonly] [default to undefined]
**name** | **(optional)** `string` | Name of the provisioning policy. Defaults to the subtype\'s display name when omitted or blank. | [default to undefined]
**description** | **(optional)** `string` | Description of the provisioning policy. | [default to undefined]
**usageType** | **(optional)** `string` | Usage type of the provisioning policy. Only `CREATE_MACHINE_ACCOUNT` is supported. | [default to UsageTypeEnum_CreateMachineAccount]
**fields** | **(optional)** `Array<SubtypeProvisioningPolicyField>` | Fields of the provisioning policy. Every field must have a non-blank `name`. When two fields share a name, only the first is kept. | [default to undefined]

