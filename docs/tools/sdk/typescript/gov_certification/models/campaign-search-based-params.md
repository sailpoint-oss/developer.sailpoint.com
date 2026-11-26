# CampaignSearchBasedParams

# CampaignSearchBasedParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**searchType** | **(optional)** `string` | If the campaign type is `Identity`, then the searchType must be set. | [default to undefined]
**query** | **(optional)** `string` | The scope for the campaign. If the searchType is `Identity`, then one of `query` or `identityIds` must be set. | [default to undefined]
**identityIds** | **(optional)** `Array<string>` | A direct list of identities to include in this campaign. If the searchType is `Identity`, then one of `query` or `identityIds` must be set. | [default to undefined]
**accessConstraints** | **(optional)** `Array<AccessConstraint>` | Further reduces the scope of the campaign by excluding identities (from `query` or `identityIds`) that do not have this access. | [default to undefined]

