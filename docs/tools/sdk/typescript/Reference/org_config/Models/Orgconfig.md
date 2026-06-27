---
id: v1-orgconfig-v1
title: OrgconfigV1
pagination_label: OrgconfigV1
sidebar_label: OrgconfigV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'OrgconfigV1', 'v1OrgconfigV1']
slug: /tools/sdk/typescript/org_config/models/orgconfig-v1
tags: ['SDK', 'Software Development Kit', 'OrgconfigV1', 'v1OrgconfigV1']
---

# OrgconfigV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orgName** | **(optional)** `string` | The name of the org. | [default to undefined]
**timeZone** | **(optional)** `string` | The selected time zone which is to be used for the org.  This directly affects when scheduled tasks are executed.  Valid options can be found at /beta/org-config/valid-time-zones | [default to undefined]
**lcsChangeHonorsSourceEnableFeature** | **(optional)** `boolean` | Flag to determine whether the LCS_CHANGE_HONORS_SOURCE_ENABLE_FEATURE flag is enabled for the current org. | [default to undefined]
**armCustomerId** | **(optional)** `string` | ARM Customer ID | [default to undefined]
**armSapSystemIdMappings** | **(optional)** `string` | A list of IDN::sourceId to ARM::systemId mappings. | [default to undefined]
**armAuth** | **(optional)** `string` | ARM authentication string | [default to undefined]
**armDb** | **(optional)** `string` | ARM database name | [default to undefined]
**armSsoUrl** | **(optional)** `string` | ARM SSO URL | [default to undefined]
**iaiEnableCertificationRecommendations** | **(optional)** `boolean` | Flag to determine whether IAI Certification Recommendations are enabled for the current org | [default to undefined]
**sodReportConfigs** | **(optional)** `Array<ReportconfigdtoV1>` |  | [default to undefined]

