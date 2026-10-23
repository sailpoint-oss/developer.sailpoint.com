# CampaignTemplateCreate

# CampaignTemplateCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | Name of the campaign template. | [default to undefined]
**description** | `string` | Description of the campaign template. | [default to undefined]
**type** | `CampaignType` |  | [default to undefined]
**remediatorRef** | **(optional)** `CampaignRemediatorRef` |  | [default to undefined]
**mandatoryCommentRequirement** | **(optional)** `CampaignMandatoryCommentRequirement` |  | [default to undefined]
**emailNotificationEnabled** | `boolean` | Enables email notification for this campaign | [default to false]
**autoRevokeAllowed** | `boolean` | Allows auto revoke for this campaign | [default to false]
**recommendationsEnabled** | `boolean` | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [default to false]
**sunsetCommentsRequired** | `boolean` | Determines if comments on sunset date changes are required. | [default to true]
**reviewer** | `Reviewer` |  | [default to undefined]
**deadlineDuration** | **(optional)** `string` | The time period during which the campaign should be completed, formatted as an ISO-8601 Duration. When this template generates a campaign, the campaign\'s deadline will be the current date plus this duration. For example, if generation occurred on 2020-01-01 and this field was \"P2W\" (two weeks), the resulting campaign\'s deadline would be 2020-01-15 (the current date plus 14 days). | [default to undefined]
**campaignName** | `string` | The campaign name. Special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details. | [default to undefined]
**campaignDescription** | `string` | The campaign description. Special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details. | [default to undefined]
**filterRef** | **(optional)** `CampaignFilterIdRef` |  | [default to undefined]
**searchBasedParams** | **(optional)** `CampaignSearchBasedParams` |  | [default to undefined]
**sourceIds** | **(optional)** `Array<string>` | A direct list of sourceIds to include in this campaign. | [default to undefined]

