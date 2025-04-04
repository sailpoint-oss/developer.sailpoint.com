---
id: beta-email-notification-option
title: EmailNotificationOption
pagination_label: EmailNotificationOption
sidebar_label: EmailNotificationOption
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EmailNotificationOption', 'BetaEmailNotificationOption'] 
slug: /tools/sdk/go/beta/models/email-notification-option
tags: ['SDK', 'Software Development Kit', 'EmailNotificationOption', 'BetaEmailNotificationOption']
---

# EmailNotificationOption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NotifyManagers** | Pointer to **bool** | If true, then the manager is notified of the lifecycle state change. | [optional] [default to false]
**NotifyAllAdmins** | Pointer to **bool** | If true, then all the admins are notified of the lifecycle state change. | [optional] [default to false]
**NotifySpecificUsers** | Pointer to **bool** | If true, then the users specified in \"emailAddressList\" below are notified of lifecycle state change. | [optional] [default to false]
**EmailAddressList** | Pointer to **[]string** | List of user email addresses. If \"notifySpecificUsers\" option is true, then these users are notified of lifecycle state change. | [optional] 

## Methods

### NewEmailNotificationOption

`func NewEmailNotificationOption() *EmailNotificationOption`

NewEmailNotificationOption instantiates a new EmailNotificationOption object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmailNotificationOptionWithDefaults

`func NewEmailNotificationOptionWithDefaults() *EmailNotificationOption`

NewEmailNotificationOptionWithDefaults instantiates a new EmailNotificationOption object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNotifyManagers

`func (o *EmailNotificationOption) GetNotifyManagers() bool`

GetNotifyManagers returns the NotifyManagers field if non-nil, zero value otherwise.

### GetNotifyManagersOk

`func (o *EmailNotificationOption) GetNotifyManagersOk() (*bool, bool)`

GetNotifyManagersOk returns a tuple with the NotifyManagers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotifyManagers

`func (o *EmailNotificationOption) SetNotifyManagers(v bool)`

SetNotifyManagers sets NotifyManagers field to given value.

### HasNotifyManagers

`func (o *EmailNotificationOption) HasNotifyManagers() bool`

HasNotifyManagers returns a boolean if a field has been set.

### GetNotifyAllAdmins

`func (o *EmailNotificationOption) GetNotifyAllAdmins() bool`

GetNotifyAllAdmins returns the NotifyAllAdmins field if non-nil, zero value otherwise.

### GetNotifyAllAdminsOk

`func (o *EmailNotificationOption) GetNotifyAllAdminsOk() (*bool, bool)`

GetNotifyAllAdminsOk returns a tuple with the NotifyAllAdmins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotifyAllAdmins

`func (o *EmailNotificationOption) SetNotifyAllAdmins(v bool)`

SetNotifyAllAdmins sets NotifyAllAdmins field to given value.

### HasNotifyAllAdmins

`func (o *EmailNotificationOption) HasNotifyAllAdmins() bool`

HasNotifyAllAdmins returns a boolean if a field has been set.

### GetNotifySpecificUsers

`func (o *EmailNotificationOption) GetNotifySpecificUsers() bool`

GetNotifySpecificUsers returns the NotifySpecificUsers field if non-nil, zero value otherwise.

### GetNotifySpecificUsersOk

`func (o *EmailNotificationOption) GetNotifySpecificUsersOk() (*bool, bool)`

GetNotifySpecificUsersOk returns a tuple with the NotifySpecificUsers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotifySpecificUsers

`func (o *EmailNotificationOption) SetNotifySpecificUsers(v bool)`

SetNotifySpecificUsers sets NotifySpecificUsers field to given value.

### HasNotifySpecificUsers

`func (o *EmailNotificationOption) HasNotifySpecificUsers() bool`

HasNotifySpecificUsers returns a boolean if a field has been set.

### GetEmailAddressList

`func (o *EmailNotificationOption) GetEmailAddressList() []string`

GetEmailAddressList returns the EmailAddressList field if non-nil, zero value otherwise.

### GetEmailAddressListOk

`func (o *EmailNotificationOption) GetEmailAddressListOk() (*[]string, bool)`

GetEmailAddressListOk returns a tuple with the EmailAddressList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddressList

`func (o *EmailNotificationOption) SetEmailAddressList(v []string)`

SetEmailAddressList sets EmailAddressList field to given value.

### HasEmailAddressList

`func (o *EmailNotificationOption) HasEmailAddressList() bool`

HasEmailAddressList returns a boolean if a field has been set.


