---
id: v2025-delete-vendor-connector-mapping200-response
title: DeleteVendorConnectorMapping200Response
pagination_label: DeleteVendorConnectorMapping200Response
sidebar_label: DeleteVendorConnectorMapping200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DeleteVendorConnectorMapping200Response', 'V2025DeleteVendorConnectorMapping200Response'] 
slug: /tools/sdk/powershell/v2025/models/delete-vendor-connector-mapping200-response
tags: ['SDK', 'Software Development Kit', 'DeleteVendorConnectorMapping200Response', 'V2025DeleteVendorConnectorMapping200Response']
---


# DeleteVendorConnectorMapping200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **Int32** | The number of vendor connector mappings successfully deleted. | [optional] 

## Examples

- Prepare the resource
```powershell
$DeleteVendorConnectorMapping200Response = Initialize-V2025DeleteVendorConnectorMapping200Response  -Count 1
```

- Convert the resource to JSON
```powershell
$DeleteVendorConnectorMapping200Response | ConvertTo-JSON
```


[[Back to top]](#) 

