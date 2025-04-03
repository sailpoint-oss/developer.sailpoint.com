---
id: v2024-campaign-all-of-machine-account-campaign-info
title: CampaignAllOfMachineAccountCampaignInfo
pagination_label: CampaignAllOfMachineAccountCampaignInfo
sidebar_label: CampaignAllOfMachineAccountCampaignInfo
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignAllOfMachineAccountCampaignInfo', 'V2024CampaignAllOfMachineAccountCampaignInfo'] 
slug: /tools/sdk/python/v2024/models/campaign-all-of-machine-account-campaign-info
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfMachineAccountCampaignInfo', 'V2024CampaignAllOfMachineAccountCampaignInfo']
---

# CampaignAllOfMachineAccountCampaignInfo

Must be set only if the campaign type is MACHINE_ACCOUNT.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_ids** | **[]str** | The list of sources to be included in the campaign. | [optional] 
**reviewer_type** |  **Enum** [  'ACCOUNT_OWNER' ] | The reviewer's type. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.campaign_all_of_machine_account_campaign_info import CampaignAllOfMachineAccountCampaignInfo

campaign_all_of_machine_account_campaign_info = CampaignAllOfMachineAccountCampaignInfo(
source_ids=[0fbe863c063c4c88a35fd7f17e8a3df5],
reviewer_type='ACCOUNT_OWNER'
)

```
[[Back to top]](#) 

