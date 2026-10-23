# IntelPrivilegedAccessItemWire

# IntelPrivilegedAccessItemWire

Import this model from the entry point of its package:

```typescript
import { IntelPrivilegedAccessItemWire } from '@sailpoint/angular-sdk/intelligence';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**privileged** | `boolean` | True when this item is classified as privileged access for the identity. | [default to undefined]
**privilegeLevel** | **(optional)** `Intelprivilegelevel` |  | [default to undefined]
**id** | `string` | Identifier of the privileged access item. | [default to undefined]
**type** | `string` | Type of privileged access object. | [default to undefined]
**displayName** | **(optional)** `string` | Display label for the privileged access item in administrative experiences. | [default to undefined]
**name** | **(optional)** `string` | Technical name of the privileged access item. | [default to undefined]
**source** | **(optional)** `IntelPrivilegedAccessItemWireSource` |  | [default to undefined]
**attribute** | **(optional)** `string` | Source attribute name that carries the privileged value when applicable. | [default to undefined]
**value** | **(optional)** `string` | Privileged value on the source attribute when applicable. | [default to undefined]

