---
id: slimdiscoveredapplications
title: Slimdiscoveredapplications
pagination_label: Slimdiscoveredapplications
sidebar_label: Slimdiscoveredapplications
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Slimdiscoveredapplications', 'Slimdiscoveredapplications'] 
slug: /tools/sdk/powershell/applicationdiscovery/models/slimdiscoveredapplications
tags: ['SDK', 'Software Development Kit', 'Slimdiscoveredapplications', 'Slimdiscoveredapplications']
---


# Slimdiscoveredapplications

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique identifier for the discovered application. | [optional] 
**Name** | **String** | Name of the discovered application. | [optional] 
**DiscoverySource** | **String** | Source from which the application was discovered. | [optional] 
**DiscoveredVendor** | **String** | The vendor associated with the discovered application. | [optional] 
**Description** | **String** | A brief description of the discovered application. | [optional] 
**RecommendedConnectors** | **[]String** | List of recommended connectors for the application. | [optional] 
**DiscoveredAt** | **System.DateTime** | The timestamp when the application was last received via an entitlement aggregation invocation  or a manual csv upload, in ISO 8601 format. | [optional] 
**CreatedAt** | **System.DateTime** | The timestamp when the application was first discovered, in ISO 8601 format. | [optional] 
**Status** | **String** | The status of an application within the discovery source.  By default this field is set to ""ACTIVE"" when the application is discovered.  If an application has been deleted from within the discovery source, the status will be set to ""INACTIVE"". | [optional] 
**OperationalStatus** | **String** | The operational status of the application. | [optional] 
**DiscoverySourceCategory** | **String** | The category of the discovery source. | [optional] 
**LicenseCount** | **Int32** | The number of licenses associated with the application. | [optional] 
**IsSanctioned** | **Boolean** | Indicates whether the application is sanctioned. | [optional] [default to $false]
**Logo** | **String** | URL of the application's logo. | [optional] 
**AppUrl** | **String** | The URL of the application. | [optional] 
**Groups** | [**[]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | List of groups associated with the application. | [optional] 
**UsersCount** | **String** | The count of users associated with the application. | [optional] 
**ApplicationOwner** | **[]String** | The owners of the application. | [optional] 
**ItApplicationOwner** | **[]String** | The IT owners of the application. | [optional] 
**BusinessCriticality** | **String** | The business criticality level of the application. | [optional] 
**DataClassification** | **String** | The data classification level of the application. | [optional] 
**BusinessUnit** | **String** | The business unit associated with the application. | [optional] 
**InstallType** | **String** | The installation type of the application. | [optional] 
**Environment** | **String** | The environment in which the application operates. | [optional] 
**RiskScore** | **Int32** | The risk score of the application ranging from 0-100, 100 being highest risk. | [optional] 
**IsBusiness** | **Boolean** | Indicates whether the application is used for business purposes. | [optional] [default to $true]
**TotalSigninsCount** | **Int32** | The total number of sign-in accounts for the application. | [optional] 
**RiskLevel** |  **Enum** [  "High",    "Medium",    "Low" ] | The risk level of the application. | [optional] 
**IsPrivileged** | **Boolean** | Indicates whether the application has privileged access. | [optional] [default to $false]
**WarrantyExpiration** | **String** | The warranty expiration date of the application. | [optional] 
**Attributes** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Additional attributes of the application useful for visibility of governance posture. | [optional] 

## Examples

- Prepare the resource
```powershell
$Slimdiscoveredapplications = Initialize-Slimdiscoveredapplications  -Id null `
 -Name ExampleApp `
 -DiscoverySource csv `
 -DiscoveredVendor ExampleVendor `
 -Description An application for managing examples. `
 -RecommendedConnectors ["ConnectorA","ConnectorB"] `
 -DiscoveredAt 2023-01-01T12:00Z `
 -CreatedAt 2023-01-01T12:00Z `
 -Status ACTIVE `
 -OperationalStatus Operational `
 -DiscoverySourceCategory sso `
 -LicenseCount 175 `
 -IsSanctioned true `
 -Logo https://spdojtest1.oktapreview.com/api/v1/apps/0oaeuef9hiipHcMgR0h7/logo `
 -AppUrl https://spdojtest1.oktapreview.com/home/salesforce/0oaeuef9hiipHcMgR0h7/24 `
 -Groups [{"map":{"id":"id","name":"JIRA Users","nativeIdentifiers":{"map":{"distinguishedName":"CN=Engineering users,OU=Engineering,DC=corp,DC=example,DC=com","id":"nativeId","objectSid":"S-1-5-21-717838489-685202119-709183397-1177"}},"type":"EXTERNAL_GROUP|LOCAL_GROUP"}}] `
 -UsersCount 175 `
 -ApplicationOwner ["owner1@example.com","owner2@example.com"] `
 -ItApplicationOwner ["itowner1@example.com","itowner2@example.com"] `
 -BusinessCriticality High `
 -DataClassification Restricted `
 -BusinessUnit Finance `
 -InstallType On Premise `
 -Environment Production `
 -RiskScore 1 `
 -IsBusiness false `
 -TotalSigninsCount 1 `
 -RiskLevel Low `
 -IsPrivileged false `
 -WarrantyExpiration 2023-09-25T14:07:27.000+0000 `
 -Attributes {"features":["IMPORT_PROFILE_UPDATES","IMPORT_USER_SCHEMA","IMPORT_NEW_USERS"],"identityStack":"NOT_SHARED","selfService":false,"signOnMode":"SAML_2_0"}
```

- Convert the resource to JSON
```powershell
$Slimdiscoveredapplications | ConvertTo-JSON
```


[[Back to top]](#) 

