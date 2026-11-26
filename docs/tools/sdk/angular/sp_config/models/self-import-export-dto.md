# SelfImportExportDto

# SelfImportExportDto

Import this model from the entry point of its package:

```typescript
import { SelfImportExportDto } from '@sailpoint/angular-sdk/sp_config';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `string` | Imported/exported object\'s DTO type. Import is currently only possible with the CONNECTOR_RULE, IDENTITY_OBJECT_CONFIG, IDENTITY_PROFILE, RULE, SOURCE, TRANSFORM, and TRIGGER_SUBSCRIPTION object types. | [default to undefined]
**id** | **(optional)** `string` | Imported/exported object\'s ID. | [default to undefined]
**name** | **(optional)** `string` | Imported/exported object\'s display name. | [default to undefined]

