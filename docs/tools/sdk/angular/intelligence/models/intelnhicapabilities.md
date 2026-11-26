# Intelnhicapabilities

# Intelnhicapabilities

Import this model from the entry point of its package:

```typescript
import { Intelnhicapabilities } from '@sailpoint/angular-sdk/intelligence';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mcp** | **(optional)** `Intelnhicapabilitybucket` | Linked MCP servers for this identity. | [default to undefined]
**tool** | **(optional)** `Intelnhicapabilitybucket` | Linked tools for this identity. | [default to undefined]
**skill** | **(optional)** `Intelnhicapabilitybucket` | Linked skills for this identity. | [default to undefined]
**message** | **(optional)** `string` | Set when linked capabilities could not be loaded. The `mcp`, `tool`, and `skill` properties are omitted; only `message` and `reason` are present. | [default to undefined]
**reason** | **(optional)** `Intelenrichmentfailurereason` |  | [default to undefined]

