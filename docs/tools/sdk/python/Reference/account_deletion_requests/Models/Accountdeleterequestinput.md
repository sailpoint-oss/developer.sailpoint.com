---
id: accountdeleterequestinput
title: Accountdeleterequestinput
pagination_label: Accountdeleterequestinput
sidebar_label: Accountdeleterequestinput
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accountdeleterequestinput', 'Accountdeleterequestinput'] 
slug: /tools/sdk/python/account-deletion-requests/models/accountdeleterequestinput
tags: ['SDK', 'Software Development Kit', 'Accountdeleterequestinput', 'Accountdeleterequestinput']
---

# Accountdeleterequestinput

Contains the required information for processing a user-initiated account deletion request, including the reason for deletion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** | Reason for deleting the account. | [optional] 
}

## Example

```python
from sailpoint.account_deletion_requests.models.accountdeleterequestinput import Accountdeleterequestinput

accountdeleterequestinput = Accountdeleterequestinput(
comments='Requesting account deletion request'
)

```
[[Back to top]](#) 

