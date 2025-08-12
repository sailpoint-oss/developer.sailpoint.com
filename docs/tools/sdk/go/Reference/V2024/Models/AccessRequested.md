---
id: v2024-access-requested
title: AccessRequested
pagination_label: AccessRequested
sidebar_label: AccessRequested
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequested', 'V2024AccessRequested'] 
slug: /tools/sdk/go/v2024/models/access-requested
tags: ['SDK', 'Software Development Kit', 'AccessRequested', 'V2024AccessRequested']
---

# AccessRequested

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | Pointer to **string** | the event type | [optional] 
**IdentityId** | Pointer to **string** | the identity id | [optional] 
**DateTime** | Pointer to **string** | the date of event | [optional] 
**Account** | [**AccessRequestedAccount**](access-requested-account) |  | 
**StatusChange** | [**AccessRequestedStatusChange**](access-requested-status-change) |  | 

## Methods

### NewAccessRequested

`func NewAccessRequested(account AccessRequestedAccount, statusChange AccessRequestedStatusChange, ) *AccessRequested`

NewAccessRequested instantiates a new AccessRequested object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestedWithDefaults

`func NewAccessRequestedWithDefaults() *AccessRequested`

NewAccessRequestedWithDefaults instantiates a new AccessRequested object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventType

`func (o *AccessRequested) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *AccessRequested) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *AccessRequested) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *AccessRequested) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetIdentityId

`func (o *AccessRequested) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *AccessRequested) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *AccessRequested) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *AccessRequested) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetDateTime

`func (o *AccessRequested) GetDateTime() string`

GetDateTime returns the DateTime field if non-nil, zero value otherwise.

### GetDateTimeOk

`func (o *AccessRequested) GetDateTimeOk() (*string, bool)`

GetDateTimeOk returns a tuple with the DateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTime

`func (o *AccessRequested) SetDateTime(v string)`

SetDateTime sets DateTime field to given value.

### HasDateTime

`func (o *AccessRequested) HasDateTime() bool`

HasDateTime returns a boolean if a field has been set.

### GetAccount

`func (o *AccessRequested) GetAccount() AccessRequestedAccount`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *AccessRequested) GetAccountOk() (*AccessRequestedAccount, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *AccessRequested) SetAccount(v AccessRequestedAccount)`

SetAccount sets Account field to given value.


### GetStatusChange

`func (o *AccessRequested) GetStatusChange() AccessRequestedStatusChange`

GetStatusChange returns the StatusChange field if non-nil, zero value otherwise.

### GetStatusChangeOk

`func (o *AccessRequested) GetStatusChangeOk() (*AccessRequestedStatusChange, bool)`

GetStatusChangeOk returns a tuple with the StatusChange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusChange

`func (o *AccessRequested) SetStatusChange(v AccessRequestedStatusChange)`

SetStatusChange sets StatusChange field to given value.



