---
id: connector-detail
title: ConnectorDetail
pagination_label: ConnectorDetail
sidebar_label: ConnectorDetail
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorDetail', 'ConnectorDetail'] 
slug: /tools/sdk/powershell/v3/models/connector-detail
tags: ['SDK', 'Software Development Kit', 'ConnectorDetail', 'ConnectorDetail']
---


# ConnectorDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | The connector name | [optional] 
**Type** |  Pointer to **String** | The connector type | [optional] 
**ClassName** |  Pointer to **String** | The connector class name | [optional] 
**ScriptName** |  Pointer to **String** | The connector script name | [optional] 
**ApplicationXml** |  Pointer to **String** | The connector application xml | [optional] 
**CorrelationConfigXml** |  Pointer to **String** | The connector correlation config xml | [optional] 
**SourceConfigXml** |  Pointer to **String** | The connector source config xml | [optional] 
**SourceConfig** |  Pointer to **String** | The connector source config | [optional] 
**SourceConfigFrom** |  Pointer to **String** | The connector source config origin | [optional] 
**S3Location** |  Pointer to **String** | storage path key for this connector | [optional] 
**UploadedFiles** |  Pointer to **[]String** | The list of uploaded files supported by the connector. If there was any executable files uploaded to thee connector. Typically this be empty as the executable be uploaded at source creation. | [optional] 
**FileUpload** |  Pointer to **Boolean** | true if the source is file upload | [optional] [default to $false]
**DirectConnect** |  Pointer to **Boolean** | true if the source is a direct connect source | [optional] [default to $false]
**TranslationProperties** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A map containing translation attributes by loacale key | [optional] 
**ConnectorMetadata** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A map containing metadata pertinent to the UI to be used | [optional] 
**Status** |  Pointer to  **Enum** [  "DEPRECATED",    "DEVELOPMENT",    "DEMO",    "RELEASED" ] | The connector status | [optional] 

## Examples

- Prepare the resource
```powershell
$ConnectorDetail = Initialize-PSSailpoint.V3ConnectorDetail  -Name name `
 -Type ServiceNow `
 -ClassName class name `
 -ScriptName servicenow `
 -ApplicationXml &lt;?xml version&#x3D;&#39;1.0&#39; encoding&#x3D;&#39;UTF-8&#39;?&gt;
&lt;!DOCTYPE Application PUBLIC &quot;sailpoint.dtd&quot; &quot;sailpoint.dtd&quot;&gt;
&lt;Application connector&#x3D;&quot;sailpoint.connector.OpenConnectorAdapter&quot; name&#x3D;&quot;custom Atlassian Suite - Cloud&quot; type&#x3D;&quot;custom Atlassian Suite - Cloud&quot;/&gt;
 `
 -CorrelationConfigXml &lt;?xml version&#x3D;&#39;1.0&#39; encoding&#x3D;&#39;UTF-8&#39;?&gt;
&lt;!-- Copyright (C) 2021 SailPoint Technologies, Inc.  All rights reserved. --&gt;

&lt;!DOCTYPE CorrelationConfig PUBLIC &quot;sailpoint.dtd&quot; &quot;sailpoint.dtd&quot;&gt;

&lt;CorrelationConfig name&#x3D;&quot;custom Atlassian Suite - Cloud Account Correlation Config&quot;&gt;
	&lt;AttributeAssignments&gt;
		&lt;Filter operation&#x3D;&quot;EQ&quot; property&#x3D;&quot;email&quot; value&#x3D;&quot;mail&quot;/&gt;
		&lt;Filter operation&#x3D;&quot;EQ&quot; property&#x3D;&quot;empId&quot; value&#x3D;&quot;employeeNumber&quot;/&gt;
		&lt;Filter operation&#x3D;&quot;EQ&quot; property&#x3D;&quot;displayName&quot; value&#x3D;&quot;cn&quot;/&gt;
	&lt;/AttributeAssignments&gt;
&lt;/CorrelationConfig&gt;
 `
 -SourceConfigXml &lt;?xml version&#x3D;&quot;1.0&quot; encoding&#x3D;&quot;UTF-8&quot; standalone&#x3D;&quot;no&quot;?&gt;&lt;!-- Copyright (C) 2023 SailPoint Technologies, Inc.  All rights reserved. --&gt;&lt;Form xmlns&#x3D;&quot;http://www.sailpoint.com/xsd/sailpoint_form_2_0.xsd&quot; connectorName&#x3D;&quot;custom Atlassian Suite - Cloud&quot; directConnect&#x3D;&quot;true&quot; fileUpload&#x3D;&quot;true&quot; name&#x3D;&quot;Custom Atlassian Suite - Cloud&quot; status&#x3D;&quot;released&quot; type&#x3D;&quot;SourceConfig&quot;&gt;
    &lt;BaseConfig&gt;
        &lt;Field maxFiles&#x3D;&quot;10&quot; maxSize&#x3D;&quot;300&quot; name&#x3D;&quot;fileUpload&quot; supportedExtensions&#x3D;&quot;jar&quot; type&#x3D;&quot;fileupload&quot; validateJSON&#x3D;&quot;false&quot;/&gt;
    &lt;/BaseConfig&gt;
  

 
&lt;/Form&gt; `
 -SourceConfig &lt;?xml version&#x3D;&quot;1.0&quot; encoding&#x3D;&quot;UTF-8&quot; standalone&#x3D;&quot;no&quot;?&gt;&lt;!-- Copyright (C) 2023 SailPoint Technologies, Inc.  All rights reserved. --&gt;&lt;Form xmlns&#x3D;&quot;http://www.sailpoint.com/xsd/sailpoint_form_2_0.xsd&quot; connectorName&#x3D;&quot;custom Atlassian Suite - Cloud&quot; directConnect&#x3D;&quot;true&quot; fileUpload&#x3D;&quot;true&quot; name&#x3D;&quot;Custom Atlassian Suite - Cloud&quot; status&#x3D;&quot;released&quot; type&#x3D;&quot;SourceConfig&quot;&gt;
    &lt;BaseConfig&gt;
        &lt;Field maxFiles&#x3D;&quot;10&quot; maxSize&#x3D;&quot;300&quot; name&#x3D;&quot;fileUpload&quot; supportedExtensions&#x3D;&quot;jar&quot; type&#x3D;&quot;fileupload&quot; validateJSON&#x3D;&quot;false&quot;/&gt;
    &lt;/BaseConfig&gt;
  

 
&lt;/Form&gt; `
 -SourceConfigFrom sp-connect `
 -S3Location custom-connector/scriptname `
 -UploadedFiles [pod/org/connectorFiles/testconnector/test1.jar] `
 -FileUpload true `
 -DirectConnect true `
 -TranslationProperties {de&#x3D;# Copyright (C) 2024 SailPoint Technologies, Inc.  All rights reserved.
# DO NOT EDIT. This file is generated by &quot;sailpointTranslate&quot; command.
menuLabel_ConnectionSettings&#x3D;Verbindungseinstellungen
menuLabel_AggregationSettings&#x3D;Aggregationseinstellungen
sectionLabel_AuthenticationSettings&#x3D;Verbindungseinstellungen
sectionLabel_AggregationSettings&#x3D;Aggregationseinstellungen
sectionInfo_AuthenticationSettings&#x3D;Konfigurieren Sie eine direkte Verbindung zwischen der Quelle Delinea Secret Server On-Premise und IdentityNow.&lt;br&gt;&lt;br&gt;Geben Sie bei &lt;strong&gt;Zeit\u00fcberschreitung bei Verbindung&lt;/strong&gt; die maximal erlaubte Zeitdauer (in Minuten) f\u00fcr die Verbindung von IdentityNow mit der Quelle ein.&lt;br&gt;&lt;br&gt;Geben Sie die &lt;strong&gt;Host-URL&lt;/strong&gt; der Delinea-SCIM-Serverquelle ein.&lt;br&gt;&lt;br&gt;Geben Sie den &lt;strong&gt;API-Token&lt;/strong&gt; der Quelle zur Authentifizierung ein.
sectionInfo_AggregationSettings&#x3D;Geben Sie die Einstellungen f\u00fcr Ihre Aggregation an.&lt;br&gt;&lt;br&gt;Geben Sie in das Feld  &lt;strong&gt;Seitengr\u00f6\u00dfe&lt;/strong&gt; die Anzahl an Kontoeintr\u00e4gen ein, die auf einer einzelnen Seite aggregiert werden sollen, wenn gro\u00dfe Datens\u00e4tze durchlaufen werden.&lt;br&gt;\n&lt;br&gt;Geben Sie im &lt;strong&gt;Kontofilter&lt;/strong&gt; die Bedingungen f\u00fcr den Kontofilter an. Beispiel: userName sw &quot;S&quot;&lt;br&gt;&lt;br&gt;Geben Sie im &lt;strong&gt;Gruppenfilter&lt;/strong&gt; die Gruppenfilterbedingungen an. Beispiel: displayName sw &quot;S&quot;.
placeHolder_accAggregation&#x3D;userName sw &quot;S&quot;
placeHolder_grpAggregation&#x3D;displayName sw &quot;S&quot;
placeHolder_host&#x3D;https://{Delinea_SCIM_Server_host}/v2
docLinkLabel_AuthenticationSettings&#x3D;Mehr \u00fcber Verbindungseinstellungen
docLinkLabel_Filters&#x3D;Mehr \u00fcber Konto- und Gruppenfilter
HostURL&#x3D;Host-URL
ConnectionTimeout&#x3D;Zeit\u00fcberschreitung bei Verbindung
API_TOKEN&#x3D;API-Token
JSONPathMapping&#x3D;JSON-Path-Attribut-Mapping
FilterConditionForAccounts&#x3D;Kontofilter
FilterConditionForGroups&#x3D;Gruppenfilter
Page_Size&#x3D;Seitengr\u00f6\u00dfe
SchemaAttribute&#x3D;Schema-Attribut
JSONpath&#x3D;JSON-Pfad
ShortDesc&#x3D;Das Integrationsmodul IdentityNow f\u00fcr Delinea Secret Server On-Premise bietet die M\u00f6glichkeit einer tiefen Governance f\u00fcr Konten und Gruppen. Es unterst\u00fctzt au\u00dferdem das End-to-End-Lebenszyklus-Management.} `
 -ConnectorMetadata {supportedUI&#x3D;EXTJS, platform&#x3D;ccg, shortDesc&#x3D;connector description} `
 -Status RELEASED
```

- Convert the resource to JSON
```powershell
$ConnectorDetail | ConvertTo-JSON
```


[[Back to top]](#) 

