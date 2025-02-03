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
 -SourceConfigXml &lt;Form connectorName&#x3D;&#39;Active Directory - Direct&#39; directConnect&#x3D;&#39;true&#39; name&#x3D;&#39;Active Directory&#39; status&#x3D;&#39;released&#39; type&#x3D;&#39;SourceConfig&#39; xmlns&#x3D;&#39;http://www.sailpoint.com/xsd/sailpoint_form_1_0.xsd&#39;&gt;
	&lt;Field defaultValue&#x3D;&#39;true&#39; hidden&#x3D;&#39;true&#39; name&#x3D;&#39;cloudAuthEnabled&#39; type&#x3D;&#39;boolean&#39; value&#x3D;&#39;true&#39;&gt; &lt;/Field&gt; &lt;/Form&gt; `
 -SourceConfig {Form&#x3D;{Field&#x3D;{_defaultValue&#x3D;true, _hidden&#x3D;true, _name&#x3D;cloudAuthEnabled, _type&#x3D;boolean, _value&#x3D;true}, _xmlns&#x3D;http://www.sailpoint.com/xsd/sailpoint_form_1_0.xsd, _connectorName&#x3D;Active Directory - Direct, _directConnect&#x3D;true, _name&#x3D;Active Directory, _status&#x3D;released, _type&#x3D;SourceConfig, __text&#x3D;\n\t}} `
 -DirectConnect true `
 -FileUpload false `
 -UploadedFiles [] `
 -ConnectorMetadata {supportedUI&#x3D;EXTJS}
```

- Convert the resource to JSON
```powershell
$ConnectorDetail1 | ConvertTo-JSON
```


[[Back to top]](#) 

