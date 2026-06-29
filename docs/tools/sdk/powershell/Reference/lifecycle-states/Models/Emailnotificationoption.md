---
id: emailnotificationoption
title: Emailnotificationoption
pagination_label: Emailnotificationoption
sidebar_label: Emailnotificationoption
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Emailnotificationoption', 'Emailnotificationoption'] 
slug: /tools/sdk/powershell/lifecyclestates/models/emailnotificationoption
tags: ['SDK', 'Software Development Kit', 'Emailnotificationoption', 'Emailnotificationoption']
---


# Emailnotificationoption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NotifyManagers** | **Boolean** | If true, then the manager is notified of the lifecycle state change. | [optional] [default to $false]
**NotifyAllAdmins** | **Boolean** | If true, then all the admins are notified of the lifecycle state change. | [optional] [default to $false]
**NotifySpecificUsers** | **Boolean** | If true, then the users specified in ""emailAddressList"" below are notified of lifecycle state change. | [optional] [default to $false]
**EmailAddressList** | **[]String** | List of user email addresses. If ""notifySpecificUsers"" option is true, then these users are notified of lifecycle state change. | [optional] 

## Examples

- Prepare the resource
```powershell
$Emailnotificationoption = Initialize-Emailnotificationoption  -NotifyManagers true `
 -NotifyAllAdmins true `
 -NotifySpecificUsers true `
 -EmailAddressList ["test@test.com","test2@test.com"]
```

- Convert the resource to JSON
```powershell
$Emailnotificationoption | ConvertTo-JSON
```


[[Back to top]](#) 

