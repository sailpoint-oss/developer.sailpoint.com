# IntelAccessHistoryCertificationsSlice

# IntelAccessHistoryCertificationsSlice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | `Array<IntelCertificationHistoryEvent>` | First page of certification history events for the identity. | [default to undefined]
**totalCount** | **(optional)** `number` | Total number of events in this category; omitted when `items` is empty. | [default to undefined]
**next** | **(optional)** `string` | Absolute URL to the next certifications page; present when totalCount exceeds the items returned on this page. | [default to undefined]

