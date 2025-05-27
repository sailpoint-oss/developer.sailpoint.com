---
id: v2025-email-notification-option
title: EmailNotificationOption
pagination_label: EmailNotificationOption
sidebar_label: EmailNotificationOption
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EmailNotificationOption', 'V2025EmailNotificationOption'] 
slug: /tools/sdk/powershell/v2025/models/email-notification-option
tags: ['SDK', 'Software Development Kit', 'EmailNotificationOption', 'V2025EmailNotificationOption']
---


# EmailNotificationOption

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
$EmailNotificationOption = Initialize-V2025EmailNotificationOption  -NotifyManagers true `
 -NotifyAllAdmins true `
 -NotifySpecificUsers true `
 -EmailAddressList [test@test.com, test2@test.com]
```

- Convert the resource to JSON
```powershell
$EmailNotificationOption | ConvertTo-JSON
```


[[Back to top]](#) 

