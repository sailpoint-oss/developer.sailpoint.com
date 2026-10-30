# ObjectImportResult

# ObjectImportResult

Import this model from the entry point of its package:

```typescript
import { ObjectImportResult } from '@sailpoint/angular-sdk/identity_profiles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**infos** | `Array<SpConfigMessage>` | Informational messages returned from the target service on import. | [default to undefined]
**warnings** | `Array<SpConfigMessage>` | Warning messages returned from the target service on import. | [default to undefined]
**errors** | `Array<SpConfigMessage>` | Error messages returned from the target service on import. | [default to undefined]
**importedObjects** | `Array<ImportObject>` | References to objects that were created or updated by the import. | [default to undefined]

