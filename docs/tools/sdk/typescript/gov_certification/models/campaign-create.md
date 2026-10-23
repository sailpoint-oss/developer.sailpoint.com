# CampaignCreate

# CampaignCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | Name of the campaign. | [default to undefined]
**description** | `string` | Description of the campaign. | [default to undefined]
**deadline** | **(optional)** `string` | The campaign\'s completion deadline date. While creating campaign, If deadline is passed as empty then automatically it will be set for two weeks later from current time. | [default to undefined]
**deadlineTimezone** | **(optional)** `string` | The timezone must be in a valid ISO 8601 format. Timezones in ISO 8601 are represented as UTC (represented as \'Z\') or as an offset from UTC. The offset format can be +/-hh:mm, +/-hhmm, or +/-hh. | [default to undefined]
**emailNotificationEnabled** | `boolean` | Enables email notification for this campaign | [default to false]
**autoRevokeAllowed** | `boolean` | Allows auto revoke for this campaign | [default to false]
**recommendationsEnabled** | `boolean` | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [default to false]
**sunsetCommentsRequired** | `boolean` | Determines if comments on sunset date changes are required. | [default to true]
**sourceIds** | **(optional)** `Array<string>` | A direct list of sourceIds to include in this campaign. | [default to undefined]
**autoActivate** | `boolean` | If autoActivate is true, the campaign will be activated automatically after generation completes. In this case, a deadline must be provided; otherwise, campaign creation will fail. | [default to false]
**type** | `CampaignType` |  | [default to undefined]
**reviewer** | `Reviewer` |  | [default to undefined]
**filterRef** | **(optional)** `CampaignFilterIdRef` |  | [default to undefined]
**inlineFilter** | **(optional)** `CampaignFilterInline` |  | [default to undefined]
**searchBasedParams** | **(optional)** `CampaignSearchBasedParams` |  | [default to undefined]
**remediatorRef** | **(optional)** `CampaignRemediatorRef` |  | [default to undefined]
**mandatoryCommentRequirement** | **(optional)** `CampaignMandatoryCommentRequirement` |  | [default to undefined]

