---
id: accountactivity
title: Accountactivity
pagination_label: Accountactivity
sidebar_label: Accountactivity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accountactivity', 'Accountactivity'] 
slug: /tools/sdk/powershell/accountactivities/models/accountactivity
tags: ['SDK', 'Software Development Kit', 'Accountactivity', 'Accountactivity']
---


# Accountactivity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the account activity | [optional] 
**Name** | **String** | The name of the activity | [optional] 
**Created** | **System.DateTime** | When the activity was first created | [optional] 
**Modified** | **System.DateTime** | When the activity was last modified | [optional] 
**Completed** | **System.DateTime** | When the activity was completed | [optional] 
**CompletionStatus** | [**Completionstatus**](completionstatus) |  | [optional] 
**Type** | **String** | The type of action the activity performed.  Please see the following list of types.  This list may grow over time.  - CloudAutomated - IdentityAttributeUpdate - appRequest - LifecycleStateChange - AccountStateUpdate - AccountAttributeUpdate - CloudPasswordRequest - Attribute Synchronization Refresh - Certification - Identity Refresh - Lifecycle Change Refresh   [Learn more here](https://documentation.sailpoint.com/saas/help/search/searchable-fields.html#searching-account-activity-data).  | [optional] 
**RequesterIdentitySummary** | [**Identitysummary**](identitysummary) |  | [optional] 
**TargetIdentitySummary** | [**Identitysummary**](identitysummary) |  | [optional] 
**Errors** | **[]String** | A list of error messages, if any, that were encountered. | [optional] 
**Warnings** | **[]String** | A list of warning messages, if any, that were encountered. | [optional] 
**Items** | [**[]Accountactivityitem**](accountactivityitem) | Individual actions performed as part of this account activity | [optional] 
**ExecutionStatus** | [**Executionstatus**](executionstatus) |  | [optional] 
**ClientMetadata** | **map[string]String** | Arbitrary key-value pairs, if any were included in the corresponding access request | [optional] 

## Examples

- Prepare the resource
```powershell
$Accountactivity = Initialize-Accountactivity  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Name 2c9180835d2e5168015d32f890ca1581 `
 -Created 2017-07-11T18:45:37.098Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -Completed 2018-10-19T13:49:37.385Z `
 -CompletionStatus null `
 -Type appRequest `
 -RequesterIdentitySummary null `
 -TargetIdentitySummary null `
 -Errors ["sailpoint.connector.ConnectorException: java.lang.InterruptedException: Timeout waiting for response to message 0 from client 57a4ab97-ab3f-4aef-9fe2-0eaf15c73d26 after 60 seconds."] `
 -Warnings ["Some warning, another warning"] `
 -Items null `
 -ExecutionStatus null `
 -ClientMetadata {"customKey1":"custom value 1","customKey2":"custom value 2"}
```

- Convert the resource to JSON
```powershell
$Accountactivity | ConvertTo-JSON
```


[[Back to top]](#) 

