# CampaignGet

# CampaignGet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | ID of the campaign | [readonly] [default to undefined]
**name** | `string` | The campaign name. | [default to undefined]
**description** | `string` | The campaign description. | [default to undefined]
**deadline** | **(optional)** `string` | The campaign\'s completion deadline date. While creating campaign, If deadline is passed as empty then automatically it will be set for two weeks later from current time. | [default to undefined]
**deadlineTimezone** | **(optional)** `string` | The timezone must be in a valid ISO 8601 format. Timezones in ISO 8601 are represented as UTC (represented as \'Z\') or as an offset from UTC. The offset format can be +/-hh:mm, +/-hhmm, or +/-hh. | [default to undefined]
**deadlineTime** | **(optional)** `string` | Calculated deadline time in UTC timezone of the campaign calculated from the deadline and the deadlineTimezone | [default to undefined]
**emailNotificationEnabled** | **(optional)** `boolean` | Enables email notification for this campaign | [default to false]
**autoRevokeAllowed** | **(optional)** `boolean` | Allows auto revoke for this campaign | [default to false]
**autoActivate** | **(optional)** `boolean` | If true, the campaign is set to activate automatically after generation completes. Campaigns stored without this attribute default to false. | [default to false]
**recommendationsEnabled** | **(optional)** `boolean` | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [default to false]
**sunsetCommentsRequired** | **(optional)** `boolean` | Determines if comments on sunset date changes are required. | [default to true]
**type** | `CampaignType` |  | [default to undefined]
**reviewer** | `Reviewer` |  | [default to undefined]
**alerts** | **(optional)** `Array<Alert>` | A list of errors and warnings that have accumulated. | [readonly] [default to undefined]
**filterRef** | **(optional)** `CampaignFilterRef` |  | [default to undefined]
**inlineFilter** | **(optional)** `CampaignFilterInline` |  | [default to undefined]
**searchBasedParams** | **(optional)** `CampaignSearchBasedParams` |  | [default to undefined]
**remediatorRef** | **(optional)** `CampaignRemediatorRef` |  | [default to undefined]
**ownerId** | **(optional)** `string` | The campaign owner is the Identity that created the campaign. | [default to undefined]
**created** | **(optional)** `string` | Created time of the campaign | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Modified time of the campaign | [readonly] [default to undefined]
**totalCertifications** | **(optional)** `number` | The total number of certifications in this campaign. | [readonly] [default to undefined]
**completedCertifications** | **(optional)** `number` | The number of completed certifications in this campaign. | [readonly] [default to undefined]
**mandatoryCommentRequirement** | **(optional)** `CampaignMandatoryCommentRequirement` |  | [default to undefined]
**status** | **(optional)** `string` | The campaign\'s current status. | [readonly] [default to undefined]
**latestReports** | **(optional)**  | A map of the latest report for each report type | [default to undefined]
**sourceIds** | **(optional)** `Array<string>` | A direct list of sourceIds to include in this campaign. | [default to undefined]
**sourcesWithOrphanEntitlements** | **(optional)** `Array<CampaignOrphanEntitlementSource>` | Sources that have orphan entitlement line items for this campaign, as supplied when the campaign finished staging. Each entry identifies a source by id and name. | [readonly] [default to undefined]

