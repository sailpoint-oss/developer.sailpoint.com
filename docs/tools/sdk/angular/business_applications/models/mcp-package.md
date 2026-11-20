# MCPPackage

# MCPPackage

Import this model from the entry point of its package:

```typescript
import { MCPPackage } from '@sailpoint/angular-sdk/business_applications';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**registryType** | **(optional)** `string` | Package registry that hosts the package. | [default to undefined]
**identifier** | **(optional)** `string` | Package identifier within the registry. | [default to undefined]
**command** | **(optional)** `string` | Command used to launch the package. | [default to undefined]
**args** | **(optional)** `Array<string>` | Arguments passed to the launch command, in the order they are applied. | [default to undefined]

