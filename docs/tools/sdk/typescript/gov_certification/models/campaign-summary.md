# CampaignSummary

# CampaignSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | ID of the campaign | [readonly] [default to undefined]
**name** | `string` | The campaign name. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details. | [default to undefined]
**description** | `string` | The campaign description. If this object is part of a template, special formatting applies; see the `/campaign-templates/{id}/generate` endpoint documentation for details. | [default to undefined]
**deadline** | **(optional)** `string` | The campaign\'s completion deadline date. | [default to undefined]
**deadlineTimezone** | **(optional)** `string` | The timezone must be in a valid ISO 8601 format. Timezones in ISO 8601 are represented as UTC (represented as \'Z\') or as an offset from UTC. The offset format can be +/-hh:mm, +/-hhmm, or +/-hh. | [default to undefined]
**deadlineTime** | **(optional)** `string` | Calculated deadline time in UTC timezone of the campaign calculated from the deadline and the deadlineTimezone | [default to undefined]
**emailNotificationEnabled** | **(optional)** `boolean` | Enables email notification for this campaign | [default to false]
**autoRevokeAllowed** | **(optional)** `boolean` | Allows auto revoke for this campaign | [default to false]
**recommendationsEnabled** | **(optional)** `boolean` | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [default to false]
**sunsetCommentsRequired** | **(optional)** `boolean` | Determines if comments on sunset date changes are required. | [default to true]
**mandatoryCommentRequirement** | **(optional)** `CampaignMandatoryCommentRequirement` |  | [default to undefined]
**type** | `CampaignType` |  | [default to undefined]
**reviewer** | **(optional)** `Reviewer` |  | [default to undefined]
**alerts** | **(optional)** `Array<Alert>` | A list of errors and warnings that have accumulated. | [readonly] [default to undefined]
**created** | **(optional)** `string` | Created time of the campaign | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Modified time of the campaign | [readonly] [default to undefined]
**totalCertifications** | **(optional)** `number` | The total number of certifications in this campaign. | [readonly] [default to undefined]
**completedCertifications** | **(optional)** `number` | The number of completed certifications in this campaign. | [readonly] [default to undefined]
**status** | **(optional)** `string` | The campaign\'s current status. | [readonly] [default to undefined]
**generationType** | **(optional)** `CampaignGenerationType` |  | [readonly] [default to undefined]

