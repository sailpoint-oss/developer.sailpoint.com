# CampaignTemplate

# CampaignTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Id of the campaign template | [default to undefined]
**name** | `string` | This template\'s name. Has no bearing on generated campaigns\' names. | [default to undefined]
**description** | `string` | This template\'s description. Has no bearing on generated campaigns\' descriptions. | [default to undefined]
**created** | `string` | Creation date of Campaign Template | [readonly] [default to undefined]
**modified** | `string` | Modification date of Campaign Template | [readonly] [default to undefined]
**scheduled** | **(optional)** `boolean` | Indicates if this campaign template has been scheduled. | [readonly] [default to false]
**ownerRef** | **(optional)** `CampaignTemplateOwnerRef` |  | [default to undefined]
**deadlineDuration** | **(optional)** `string` | The time period during which the campaign should be completed, formatted as an ISO-8601 Duration. When this template generates a campaign, the campaign\'s deadline will be the current date plus this duration. For example, if generation occurred on 2020-01-01 and this field was \"P2W\" (two weeks), the resulting campaign\'s deadline would be 2020-01-15 (the current date plus 14 days). | [default to undefined]
**campaign** | `Campaign2` |  | [default to undefined]

