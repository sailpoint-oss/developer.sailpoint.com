# EntitlementAttributeBulkUpdateFilterRequest

# EntitlementAttributeBulkUpdateFilterRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | **(optional)** `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results) Filtering is supported for the following fields and operators:  **id**: *eq* | [default to undefined]
**operation** | **(optional)** `string` | Operation to perform on the attributes in the bulk update request. | [default to undefined]
**replaceScope** | **(optional)** `string` | The choice of update scope. | [default to undefined]
**values** | **(optional)** `Array<BulkUpdateAMMKeyValueInner>` | The metadata to be updated, including attribute and values. | [default to undefined]

