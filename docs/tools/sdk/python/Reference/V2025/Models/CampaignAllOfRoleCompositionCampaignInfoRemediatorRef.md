---
id: v2025-campaign-all-of-role-composition-campaign-info-remediator-ref
title: CampaignAllOfRoleCompositionCampaignInfoRemediatorRef
pagination_label: CampaignAllOfRoleCompositionCampaignInfoRemediatorRef
sidebar_label: CampaignAllOfRoleCompositionCampaignInfoRemediatorRef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignAllOfRoleCompositionCampaignInfoRemediatorRef', 'V2025CampaignAllOfRoleCompositionCampaignInfoRemediatorRef'] 
slug: /tools/sdk/python/v2025/models/campaign-all-of-role-composition-campaign-info-remediator-ref
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfRoleCompositionCampaignInfoRemediatorRef', 'V2025CampaignAllOfRoleCompositionCampaignInfoRemediatorRef']
---

# CampaignAllOfRoleCompositionCampaignInfoRemediatorRef

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
from sailpoint.v2025.models.campaign_all_of_role_composition_campaign_info_remediator_ref import CampaignAllOfRoleCompositionCampaignInfoRemediatorRef

campaign_all_of_role_composition_campaign_info_remediator_ref = CampaignAllOfRoleCompositionCampaignInfoRemediatorRef(
type='IDENTITY',
id='2c90ad2a70ace7d50170acf22ca90010',
name='Role Admin'
)

```
[[Back to top]](#) 

