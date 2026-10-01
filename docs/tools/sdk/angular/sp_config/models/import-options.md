# ImportOptions

# ImportOptions

Import this model from the entry point of its package:

```typescript
import { ImportOptions } from '@sailpoint/angular-sdk/sp_config';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excludeTypes** | **(optional)** `Array<string>` | Object type names to be excluded from an sp-config export command. | [default to undefined]
**includeTypes** | **(optional)** `Array<string>` | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [default to undefined]
**objectOptions** | **(optional)**  | Additional options targeting specific objects related to each item in the includeTypes field | [default to undefined]
**defaultReferences** | **(optional)** `Array<string>` | List of object types that can be used to resolve references on import. | [default to undefined]
**excludeBackup** | **(optional)** `boolean` | By default, every import will first export all existing objects supported by sp-config as a backup before the import is attempted. If excludeBackup is true, the backup will not be performed. | [default to false]

