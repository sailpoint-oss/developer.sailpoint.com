---
id: beta-fullcampaign-all-of-machine-account-campaign-info
title: FullcampaignAllOfMachineAccountCampaignInfo
pagination_label: FullcampaignAllOfMachineAccountCampaignInfo
sidebar_label: FullcampaignAllOfMachineAccountCampaignInfo
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FullcampaignAllOfMachineAccountCampaignInfo', 'BetaFullcampaignAllOfMachineAccountCampaignInfo'] 
slug: /tools/sdk/python/beta/models/fullcampaign-all-of-machine-account-campaign-info
tags: ['SDK', 'Software Development Kit', 'FullcampaignAllOfMachineAccountCampaignInfo', 'BetaFullcampaignAllOfMachineAccountCampaignInfo']
---

# FullcampaignAllOfMachineAccountCampaignInfo

Must be set only if the campaign type is MACHINE_ACCOUNT.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_ids** | **[]str** | The list of sources to be included in the campaign. | [optional] 
**reviewer_type** |  **Enum** [  'ACCOUNT_OWNER' ] | The reviewer's type. | [optional] 
}

## Example

```python
from sailpoint.beta.models.fullcampaign_all_of_machine_account_campaign_info import FullcampaignAllOfMachineAccountCampaignInfo

fullcampaign_all_of_machine_account_campaign_info = FullcampaignAllOfMachineAccountCampaignInfo(
source_ids=[0fbe863c063c4c88a35fd7f17e8a3df5],
reviewer_type='ACCOUNT_OWNER'
)

```
[[Back to top]](#) 

