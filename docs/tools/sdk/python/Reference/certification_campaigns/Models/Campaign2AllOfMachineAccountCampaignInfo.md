---
id: campaign2-all-of-machine-account-campaign-info
title: Campaign2AllOfMachineAccountCampaignInfo
pagination_label: Campaign2AllOfMachineAccountCampaignInfo
sidebar_label: Campaign2AllOfMachineAccountCampaignInfo
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Campaign2AllOfMachineAccountCampaignInfo', 'Campaign2AllOfMachineAccountCampaignInfo'] 
slug: /tools/sdk/python/certification-campaigns/models/campaign2-all-of-machine-account-campaign-info
tags: ['SDK', 'Software Development Kit', 'Campaign2AllOfMachineAccountCampaignInfo', 'Campaign2AllOfMachineAccountCampaignInfo']
---

# Campaign2AllOfMachineAccountCampaignInfo

Must be set only if the campaign type is MACHINE_ACCOUNT.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_ids** | **[]str** | The list of sources to be included in the campaign. | [optional] 
**reviewer_type** |  **Enum** [  'ACCOUNT_OWNER' ] | The reviewer's type. | [optional] 
}

## Example

```python
from sailpoint.certification_campaigns.models.campaign2_all_of_machine_account_campaign_info import Campaign2AllOfMachineAccountCampaignInfo

campaign2_all_of_machine_account_campaign_info = Campaign2AllOfMachineAccountCampaignInfo(
source_ids=["0fbe863c063c4c88a35fd7f17e8a3df5"],
reviewer_type='ACCOUNT_OWNER'
)

```
[[Back to top]](#) 

