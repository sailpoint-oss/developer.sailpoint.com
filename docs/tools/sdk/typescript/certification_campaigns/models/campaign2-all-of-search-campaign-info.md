# Campaign2AllOfSearchCampaignInfo

# Campaign2AllOfSearchCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `string` | The type of search campaign represented. | [default to undefined]
**description** | **(optional)** `string` | Describes this search campaign. Intended for storing the query used, and possibly the number of identities selected/available. | [default to undefined]
**reviewer** | **(optional)** `Campaign2AllOfSearchCampaignInfoReviewer` |  | [default to undefined]
**query** | **(optional)** `string` | The scope for the campaign. The campaign will cover identities returned by the query and identities that have access items returned by the query. One of `query` or `identityIds` must be set. | [default to undefined]
**identityIds** | **(optional)** `Array<string>` | A direct list of identities to include in this campaign. One of `identityIds` or `query` must be set. | [default to undefined]
**accessConstraints** | **(optional)** `Array<AccessConstraint>` | Further reduces the scope of the campaign by excluding identities (from `query` or `identityIds`) that do not have this access. | [default to undefined]

