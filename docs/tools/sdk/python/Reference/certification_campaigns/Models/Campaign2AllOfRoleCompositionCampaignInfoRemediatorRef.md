---
id: campaign2-all-of-role-composition-campaign-info-remediator-ref
title: Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef
pagination_label: Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef
sidebar_label: Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef', 'Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef'] 
slug: /tools/sdk/python/certification-campaigns/models/campaign2-all-of-role-composition-campaign-info-remediator-ref
tags: ['SDK', 'Software Development Kit', 'Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef', 'Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef']
---

# Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef

This determines who remediation tasks will be assigned to. Remediation tasks are created for each revoke decision on items in the campaign. The only legal remediator type is 'IDENTITY', and the chosen identity must be a Role Admin or Org Admin.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Legal Remediator Type | [required]
**id** | **str** | The ID of the remediator. | [required]
**name** | **str** | The name of the remediator. | [optional] [readonly] 
}

## Example

```python
from sailpoint.certification_campaigns.models.campaign2_all_of_role_composition_campaign_info_remediator_ref import Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef

campaign2_all_of_role_composition_campaign_info_remediator_ref = Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef(
type='IDENTITY',
id='2c90ad2a70ace7d50170acf22ca90010',
name='Role Admin'
)

```
[[Back to top]](#) 

