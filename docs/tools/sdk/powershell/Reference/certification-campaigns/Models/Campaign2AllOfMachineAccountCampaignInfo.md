---
id: campaign2-all-of-machine-account-campaign-info
title: Campaign2AllOfMachineAccountCampaignInfo
pagination_label: Campaign2AllOfMachineAccountCampaignInfo
sidebar_label: Campaign2AllOfMachineAccountCampaignInfo
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Campaign2AllOfMachineAccountCampaignInfo', 'Campaign2AllOfMachineAccountCampaignInfo'] 
slug: /tools/sdk/powershell/certificationcampaigns/models/campaign2-all-of-machine-account-campaign-info
tags: ['SDK', 'Software Development Kit', 'Campaign2AllOfMachineAccountCampaignInfo', 'Campaign2AllOfMachineAccountCampaignInfo']
---


# Campaign2AllOfMachineAccountCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceIds** | **[]String** | The list of sources to be included in the campaign. | [optional] 
**ReviewerType** |  **Enum** [  "ACCOUNT_OWNER" ] | The reviewer's type. | [optional] 

## Examples

- Prepare the resource
```powershell
$Campaign2AllOfMachineAccountCampaignInfo = Initialize-Campaign2AllOfMachineAccountCampaignInfo  -SourceIds ["0fbe863c063c4c88a35fd7f17e8a3df5"] `
 -ReviewerType ACCOUNT_OWNER
```

- Convert the resource to JSON
```powershell
$Campaign2AllOfMachineAccountCampaignInfo | ConvertTo-JSON
```


[[Back to top]](#) 

