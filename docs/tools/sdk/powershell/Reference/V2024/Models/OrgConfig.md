---
id: v2024-org-config
title: OrgConfig
pagination_label: OrgConfig
sidebar_label: OrgConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'OrgConfig', 'V2024OrgConfig'] 
slug: /tools/sdk/powershell/v2024/models/org-config
tags: ['SDK', 'Software Development Kit', 'OrgConfig', 'V2024OrgConfig']
---


# OrgConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrgName** | **String** | The name of the org. | [optional] 
**TimeZone** | **String** | The selected time zone which is to be used for the org.  This directly affects when scheduled tasks are executed.  Valid options can be found at /beta/org-config/valid-time-zones | [optional] 
**LcsChangeHonorsSourceEnableFeature** | **Boolean** | Flag to determine whether the LCS_CHANGE_HONORS_SOURCE_ENABLE_FEATURE flag is enabled for the current org. | [optional] 
**ArmCustomerId** | **String** | ARM Customer ID | [optional] 
**ArmSapSystemIdMappings** | **String** | A list of IDN::sourceId to ARM::systemId mappings. | [optional] 
**ArmAuth** | **String** | ARM authentication string | [optional] 
**ArmDb** | **String** | ARM database name | [optional] 
**ArmSsoUrl** | **String** | ARM SSO URL | [optional] 
**IaiEnableCertificationRecommendations** | **Boolean** | Flag to determine whether IAI Certification Recommendations are enabled for the current org | [optional] 
**SodReportConfigs** | [**[]ReportConfigDTO**](report-config-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$OrgConfig = Initialize-V2024OrgConfig  -OrgName acme-solar `
 -TimeZone America/Toronto `
 -LcsChangeHonorsSourceEnableFeature false `
 -ArmCustomerId DE38E75A-5FF6-4A65-5DC7-08D64426B09E `
 -ArmSapSystemIdMappings [{sourceId=2c91808c791a94e501792388b0d62659, systemId=1556}, {sourceId=2_2c91808c791a94e501792388b0d62659, systemId=2_1556}, {sourceId=3_2c91808c791a94e501792388b0d62659, systemId=3_1556}] `
 -ArmAuth epiYNTRYA2S7swisDWk1Zv4VMNgvqEjiBh5_ufuCWsma2m-5XADijqBg0ijXLby5nS6lxZNXabhGnAPGeDGc4V3jQKrhwV-UHypRLs8ZLgOjiQNus9NimS0uPdKomRW6TFWqXyfnYd-znNgbbVuwUy9GyD9ebDVJSntPastxSx7UcyGuWBqfNZYpuxKRWe_7TVY60qL55jUqyz8N4XUbbdcxdbZ0uik6ut-Bv90MKTbZexBW_PR4qcgIkaEs4kIenLyBxnGziYo7AO0tJ8bGHO8FJRkibCpAQIt7PISLo7Gg_Xf9j10dKq2YDgy4pPTvz3fE2ZHYnXCXvXFSA-vVag== `
 -ArmDb EU `
 -ArmSsoUrl https://your-arm-sso-url `
 -IaiEnableCertificationRecommendations true `
 -SodReportConfigs null
```

- Convert the resource to JSON
```powershell
$OrgConfig | ConvertTo-JSON
```


[[Back to top]](#) 

