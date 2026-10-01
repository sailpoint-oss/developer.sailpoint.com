# Segment

# Segment

Import this model from the entry point of its package:

```typescript
import { Segment } from '@sailpoint/angular-sdk/segments';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The segment\'s ID. | [default to undefined]
**name** | **(optional)** `string` | The segment\'s business name. | [default to undefined]
**created** | **(optional)** `string` | The time when the segment is created. | [default to undefined]
**modified** | **(optional)** `string` | The time when the segment is modified. | [default to undefined]
**description** | **(optional)** `string` | The segment\'s optional description. | [default to undefined]
**owner** | **(optional)** `OwnerReferenceSegments` |  | [default to undefined]
**visibilityCriteria** | **(optional)** `SegmentVisibilityCriteria` |  | [default to undefined]
**active** | **(optional)** `boolean` | This boolean indicates whether the segment is currently active. Inactive segments have no effect. | [default to false]

