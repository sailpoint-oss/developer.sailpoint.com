---
id: email-notification-option
title: EmailNotificationOption
pagination_label: EmailNotificationOption
sidebar_label: EmailNotificationOption
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'EmailNotificationOption'] 
slug: /tools/sdk/powershell/v3/models/email-notification-option
tags: ['SDK', 'Software Development Kit', 'EmailNotificationOption']
---


# EmailNotificationOption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NotifyManagers** |  Pointer to **Boolean** | If true, then the manager is notified of the lifecycle state change. | [optional] 
**NotifyAllAdmins** |  Pointer to **Boolean** | If true, then all the admins are notified of the lifecycle state change. | [optional] 
**NotifySpecificUsers** |  Pointer to **Boolean** | If true, then the users specified in &quot;&quot;emailAddressList&quot;&quot; below are notified of lifecycle state change. | [optional] 
**EmailAddressList** |  Pointer to **[]String** | List of user email addresses. If &quot;&quot;notifySpecificUsers&quot;&quot; option is true, then these users are notified of lifecycle state change. | [optional] 

## Examples

- Prepare the resource
```powershell
$EmailNotificationOption = Initialize-EmailNotificationOption  -NotifyManagers true `
 -NotifyAllAdmins true `
 -NotifySpecificUsers true `
 -EmailAddressList [test@test.com, test2@test.com]
```

- Convert the resource to JSON
```powershell
$EmailNotificationOption | ConvertTo-JSON
```


[[Back to top]](#) 

