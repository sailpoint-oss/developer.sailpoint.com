---
id: v2024-connector-detail1
title: ConnectorDetail1
pagination_label: ConnectorDetail1
sidebar_label: ConnectorDetail1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorDetail1', 'V2024ConnectorDetail1'] 
slug: /tools/sdk/powershell/v2024/models/connector-detail1
tags: ['SDK', 'Software Development Kit', 'ConnectorDetail1', 'V2024ConnectorDetail1']
---


# ConnectorDetail1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The connector name | [optional] 
**SourceConfigXml** | **String** | XML representation of the source config data | [optional] 
**SourceConfig** | **String** | JSON representation of the source config data | [optional] 
**DirectConnect** | **Boolean** | true if the source is a direct connect source | [optional] 
**FileUpload** | **Boolean** | Connector config's file upload attribute, false if not there | [optional] 
**UploadedFiles** | **String** | List of uploaded file strings for the connector | [optional] 
**ConnectorMetadata** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Object containing metadata pertinent to the UI to be used | [optional] 

## Examples

- Prepare the resource
```powershell
$ConnectorDetail1 = Initialize-PSSailpoint.V2024ConnectorDetail1  -Name JDBC `
 -SourceConfigXml <Form connectorName='Active Directory - Direct' directConnect='true' name='Active Directory' status='released' type='SourceConfig' xmlns='http://www.sailpoint.com/xsd/sailpoint_form_1_0.xsd'>
	<Field defaultValue='true' hidden='true' name='cloudAuthEnabled' type='boolean' value='true'> </Field> </Form> `
 -SourceConfig {Form={Field={_defaultValue=true, _hidden=true, _name=cloudAuthEnabled, _type=boolean, _value=true}, _xmlns=http://www.sailpoint.com/xsd/sailpoint_form_1_0.xsd, _connectorName=Active Directory - Direct, _directConnect=true, _name=Active Directory, _status=released, _type=SourceConfig, __text=\n\t}} `
 -DirectConnect true `
 -FileUpload false `
 -UploadedFiles [] `
 -ConnectorMetadata {supportedUI=EXTJS}
```

- Convert the resource to JSON
```powershell
$ConnectorDetail1 | ConvertTo-JSON
```


[[Back to top]](#) 

