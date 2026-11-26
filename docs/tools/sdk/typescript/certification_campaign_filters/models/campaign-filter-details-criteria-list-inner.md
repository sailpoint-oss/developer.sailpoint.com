# CampaignFilterDetailsCriteriaListInner

# CampaignFilterDetailsCriteriaListInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `CriteriaType` |  | [default to undefined]
**operation** | **(optional)** `Operation` |  | [default to undefined]
**property** | `string` | Specified key from the type of criteria. | [default to undefined]
**value** | `string` | Value for the specified key from the type of criteria. | [default to undefined]
**negateResult** | **(optional)** `boolean` | If true, the filter will negate the result of the criteria. | [default to false]
**shortCircuit** | **(optional)** `boolean` | If true, the filter will short circuit the evaluation of the criteria. | [default to false]
**recordChildMatches** | **(optional)** `boolean` | If true, the filter will record child matches for the criteria. | [default to false]
**id** | **(optional)** `string` | The unique ID of the criteria. | [default to undefined]
**suppressMatchedItems** | **(optional)** `boolean` | If this value is true, then matched items will not only be excluded from the campaign, they will also not have archived certification items created.  Such items will not appear in the exclusion report.  | [default to false]
**children** | **(optional)** `Array<object>` | List of child criteria. | [default to undefined]

