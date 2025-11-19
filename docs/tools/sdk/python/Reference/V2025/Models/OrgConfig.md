---
id: v2025-org-config
title: OrgConfig
pagination_label: OrgConfig
sidebar_label: OrgConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'OrgConfig', 'V2025OrgConfig'] 
slug: /tools/sdk/python/v2025/models/org-config
tags: ['SDK', 'Software Development Kit', 'OrgConfig', 'V2025OrgConfig']
---

# OrgConfig

DTO class for OrgConfig data accessible by customer external org admin (\"ORG_ADMIN\") users

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org_name** | **str** | The name of the org. | [optional] 
**time_zone** | **str** | The selected time zone which is to be used for the org.  This directly affects when scheduled tasks are executed.  Valid options can be found at /beta/org-config/valid-time-zones | [optional] 
**lcs_change_honors_source_enable_feature** | **bool** | Flag to determine whether the LCS_CHANGE_HONORS_SOURCE_ENABLE_FEATURE flag is enabled for the current org. | [optional] 
**arm_customer_id** | **str** | ARM Customer ID | [optional] 
**arm_sap_system_id_mappings** | **str** | A list of IDN::sourceId to ARM::systemId mappings. | [optional] 
**arm_auth** | **str** | ARM authentication string | [optional] 
**arm_db** | **str** | ARM database name | [optional] 
**arm_sso_url** | **str** | ARM SSO URL | [optional] 
**iai_enable_certification_recommendations** | **bool** | Flag to determine whether IAI Certification Recommendations are enabled for the current org | [optional] 
**sod_report_configs** | [**[]ReportConfigDTO**](report-config-dto) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.org_config import OrgConfig

org_config = OrgConfig(
org_name='acme-solar',
time_zone='America/Toronto',
lcs_change_honors_source_enable_feature=False,
arm_customer_id='DE38E75A-5FF6-4A65-5DC7-08D64426B09E',
arm_sap_system_id_mappings='[{sourceId=2c91808c791a94e501792388b0d62659, systemId=1556}, {sourceId=2_2c91808c791a94e501792388b0d62659, systemId=2_1556}, {sourceId=3_2c91808c791a94e501792388b0d62659, systemId=3_1556}]',
arm_auth='epiYNTRYA2S7swisDWk1Zv4VMNgvqEjiBh5_ufuCWsma2m-5XADijqBg0ijXLby5nS6lxZNXabhGnAPGeDGc4V3jQKrhwV-UHypRLs8ZLgOjiQNus9NimS0uPdKomRW6TFWqXyfnYd-znNgbbVuwUy9GyD9ebDVJSntPastxSx7UcyGuWBqfNZYpuxKRWe_7TVY60qL55jUqyz8N4XUbbdcxdbZ0uik6ut-Bv90MKTbZexBW_PR4qcgIkaEs4kIenLyBxnGziYo7AO0tJ8bGHO8FJRkibCpAQIt7PISLo7Gg_Xf9j10dKq2YDgy4pPTvz3fE2ZHYnXCXvXFSA-vVag==',
arm_db='EU',
arm_sso_url='https://your-arm-sso-url',
iai_enable_certification_recommendations=True,
sod_report_configs=[
                    sailpoint.v2025.models.report_config_dto.Report Config DTO(
                        column_name = 'SOD Business Name', 
                        required = True, 
                        included = False, 
                        order = 2, )
                    ]
)

```
[[Back to top]](#) 

