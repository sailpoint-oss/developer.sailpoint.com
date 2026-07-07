---
id: multihostintegrations-connector-attributes
title: MultihostintegrationsConnectorAttributes
pagination_label: MultihostintegrationsConnectorAttributes
sidebar_label: MultihostintegrationsConnectorAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultihostintegrationsConnectorAttributes', 'MultihostintegrationsConnectorAttributes'] 
slug: /tools/sdk/powershell/multihostintegration/models/multihostintegrations-connector-attributes
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsConnectorAttributes', 'MultihostintegrationsConnectorAttributes']
---


# MultihostintegrationsConnectorAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MaxAllowedSources** | **Int32** | Maximum sources allowed count of a Multi-Host Integration | [optional] 
**LastSourceUploadCount** | **Int32** | Last upload sources count of a Multi-Host Integration | [optional] 
**ConnectorFileUploadHistory** | [**MultihostintegrationsConnectorAttributesConnectorFileUploadHistory**](multihostintegrations-connector-attributes-connector-file-upload-history) |  | [optional] 
**MultihostStatus** |  **Enum** [  "ready",    "processing",    "fileUploadInProgress",    "sourceCreationInProgress",    "aggregationGroupingInProgress",    "aggregationScheduleInProgress",    "deleteInProgress",    "deleteFailed" ] | Multi-Host integration status. | [optional] 
**ShowAccountSchema** | **Boolean** | Show account schema | [optional] [default to $true]
**ShowEntitlementSchema** | **Boolean** | Show entitlement schema | [optional] [default to $true]
**MultiHostAttributes** | [**MultihostintegrationsConnectorAttributesMultiHostAttributes**](multihostintegrations-connector-attributes-multi-host-attributes) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$MultihostintegrationsConnectorAttributes = Initialize-MultihostintegrationsConnectorAttributes  -MaxAllowedSources 250 `
 -LastSourceUploadCount 40 `
 -ConnectorFileUploadHistory null `
 -MultihostStatus ready `
 -ShowAccountSchema true `
 -ShowEntitlementSchema true `
 -MultiHostAttributes null
```

- Convert the resource to JSON
```powershell
$MultihostintegrationsConnectorAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

