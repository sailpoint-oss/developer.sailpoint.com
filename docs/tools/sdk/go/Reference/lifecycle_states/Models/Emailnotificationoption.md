---
id: v1-emailnotificationoption
title: Emailnotificationoption
pagination_label: Emailnotificationoption
sidebar_label: Emailnotificationoption
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Emailnotificationoption', 'V1Emailnotificationoption'] 
slug: /tools/sdk/go/lifecyclestates/models/emailnotificationoption
tags: ['SDK', 'Software Development Kit', 'Emailnotificationoption', 'V1Emailnotificationoption']
---

# Emailnotificationoption

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NotifyManagers** | Pointer to **bool** | If true, then the manager is notified of the lifecycle state change. | [optional] [default to false]
**NotifyAllAdmins** | Pointer to **bool** | If true, then all the admins are notified of the lifecycle state change. | [optional] [default to false]
**NotifySpecificUsers** | Pointer to **bool** | If true, then the users specified in \"emailAddressList\" below are notified of lifecycle state change. | [optional] [default to false]
**EmailAddressList** | Pointer to **[]string** | List of user email addresses. If \"notifySpecificUsers\" option is true, then these users are notified of lifecycle state change. | [optional] 

## Methods

### NewEmailnotificationoption

`func NewEmailnotificationoption() *Emailnotificationoption`

NewEmailnotificationoption instantiates a new Emailnotificationoption object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmailnotificationoptionWithDefaults

`func NewEmailnotificationoptionWithDefaults() *Emailnotificationoption`

NewEmailnotificationoptionWithDefaults instantiates a new Emailnotificationoption object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNotifyManagers

`func (o *Emailnotificationoption) GetNotifyManagers() bool`

GetNotifyManagers returns the NotifyManagers field if non-nil, zero value otherwise.

### GetNotifyManagersOk

`func (o *Emailnotificationoption) GetNotifyManagersOk() (*bool, bool)`

GetNotifyManagersOk returns a tuple with the NotifyManagers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotifyManagers

`func (o *Emailnotificationoption) SetNotifyManagers(v bool)`

SetNotifyManagers sets NotifyManagers field to given value.

### HasNotifyManagers

`func (o *Emailnotificationoption) HasNotifyManagers() bool`

HasNotifyManagers returns a boolean if a field has been set.

### GetNotifyAllAdmins

`func (o *Emailnotificationoption) GetNotifyAllAdmins() bool`

GetNotifyAllAdmins returns the NotifyAllAdmins field if non-nil, zero value otherwise.

### GetNotifyAllAdminsOk

`func (o *Emailnotificationoption) GetNotifyAllAdminsOk() (*bool, bool)`

GetNotifyAllAdminsOk returns a tuple with the NotifyAllAdmins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotifyAllAdmins

`func (o *Emailnotificationoption) SetNotifyAllAdmins(v bool)`

SetNotifyAllAdmins sets NotifyAllAdmins field to given value.

### HasNotifyAllAdmins

`func (o *Emailnotificationoption) HasNotifyAllAdmins() bool`

HasNotifyAllAdmins returns a boolean if a field has been set.

### GetNotifySpecificUsers

`func (o *Emailnotificationoption) GetNotifySpecificUsers() bool`

GetNotifySpecificUsers returns the NotifySpecificUsers field if non-nil, zero value otherwise.

### GetNotifySpecificUsersOk

`func (o *Emailnotificationoption) GetNotifySpecificUsersOk() (*bool, bool)`

GetNotifySpecificUsersOk returns a tuple with the NotifySpecificUsers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotifySpecificUsers

`func (o *Emailnotificationoption) SetNotifySpecificUsers(v bool)`

SetNotifySpecificUsers sets NotifySpecificUsers field to given value.

### HasNotifySpecificUsers

`func (o *Emailnotificationoption) HasNotifySpecificUsers() bool`

HasNotifySpecificUsers returns a boolean if a field has been set.

### GetEmailAddressList

`func (o *Emailnotificationoption) GetEmailAddressList() []string`

GetEmailAddressList returns the EmailAddressList field if non-nil, zero value otherwise.

### GetEmailAddressListOk

`func (o *Emailnotificationoption) GetEmailAddressListOk() (*[]string, bool)`

GetEmailAddressListOk returns a tuple with the EmailAddressList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddressList

`func (o *Emailnotificationoption) SetEmailAddressList(v []string)`

SetEmailAddressList sets EmailAddressList field to given value.

### HasEmailAddressList

`func (o *Emailnotificationoption) HasEmailAddressList() bool`

HasEmailAddressList returns a boolean if a field has been set.


