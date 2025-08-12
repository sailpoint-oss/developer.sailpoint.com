---
id: beta-connector-detail
title: ConnectorDetail
pagination_label: ConnectorDetail
sidebar_label: ConnectorDetail
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorDetail', 'BetaConnectorDetail'] 
slug: /tools/sdk/powershell/beta/models/connector-detail
tags: ['SDK', 'Software Development Kit', 'ConnectorDetail', 'BetaConnectorDetail']
---


# ConnectorDetail

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
$ConnectorDetail = Initialize-BetaConnectorDetail  -Name JDBC `
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
$ConnectorDetail | ConvertTo-JSON
```


[[Back to top]](#) 

