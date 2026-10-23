# CampaignFilterDetails

# CampaignFilterDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | The unique ID of the campaign filter | [default to undefined]
**name** | `string` | Campaign filter name. | [default to undefined]
**description** | **(optional)** `string` | Campaign filter description. | [default to undefined]
**owner** | `string` | Owner of the filter. This field automatically populates at creation time with the current user. | [default to undefined]
**mode** | `string` | Mode/type of filter, either the INCLUSION or EXCLUSION type. The INCLUSION type includes the data in generated campaigns  as per specified in the criteria, whereas the EXCLUSION type excludes the data in generated campaigns as per specified in criteria. | [default to undefined]
**criteriaList** | **(optional)** `Array<CampaignFilterDetailsCriteriaListInner>` | List of criteria. | [default to undefined]
**isSystemFilter** | `boolean` | If true, the filter is created by the system. If false, the filter is created by a user. | [default to false]

