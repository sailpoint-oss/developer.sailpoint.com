---
id: v1-accountstatuschanged
title: Accountstatuschanged
pagination_label: Accountstatuschanged
sidebar_label: Accountstatuschanged
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountstatuschanged', 'V1Accountstatuschanged'] 
slug: /tools/sdk/go/identityhistory/models/accountstatuschanged
tags: ['SDK', 'Software Development Kit', 'Accountstatuschanged', 'V1Accountstatuschanged']
---

# Accountstatuschanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | Pointer to **string** | the event type | [optional] 
**IdentityId** | Pointer to **string** | the identity id | [optional] 
**DateTime** | Pointer to **string** | the date of event | [optional] 
**Account** | [**AccountstatuschangedAccount**](accountstatuschanged-account) |  | 
**StatusChange** | [**AccountstatuschangedStatusChange**](accountstatuschanged-status-change) |  | 

## Methods

### NewAccountstatuschanged

`func NewAccountstatuschanged(account AccountstatuschangedAccount, statusChange AccountstatuschangedStatusChange, ) *Accountstatuschanged`

NewAccountstatuschanged instantiates a new Accountstatuschanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountstatuschangedWithDefaults

`func NewAccountstatuschangedWithDefaults() *Accountstatuschanged`

NewAccountstatuschangedWithDefaults instantiates a new Accountstatuschanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventType

`func (o *Accountstatuschanged) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *Accountstatuschanged) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *Accountstatuschanged) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *Accountstatuschanged) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetIdentityId

`func (o *Accountstatuschanged) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Accountstatuschanged) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Accountstatuschanged) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *Accountstatuschanged) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetDateTime

`func (o *Accountstatuschanged) GetDateTime() string`

GetDateTime returns the DateTime field if non-nil, zero value otherwise.

### GetDateTimeOk

`func (o *Accountstatuschanged) GetDateTimeOk() (*string, bool)`

GetDateTimeOk returns a tuple with the DateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTime

`func (o *Accountstatuschanged) SetDateTime(v string)`

SetDateTime sets DateTime field to given value.

### HasDateTime

`func (o *Accountstatuschanged) HasDateTime() bool`

HasDateTime returns a boolean if a field has been set.

### GetAccount

`func (o *Accountstatuschanged) GetAccount() AccountstatuschangedAccount`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *Accountstatuschanged) GetAccountOk() (*AccountstatuschangedAccount, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *Accountstatuschanged) SetAccount(v AccountstatuschangedAccount)`

SetAccount sets Account field to given value.


### GetStatusChange

`func (o *Accountstatuschanged) GetStatusChange() AccountstatuschangedStatusChange`

GetStatusChange returns the StatusChange field if non-nil, zero value otherwise.

### GetStatusChangeOk

`func (o *Accountstatuschanged) GetStatusChangeOk() (*AccountstatuschangedStatusChange, bool)`

GetStatusChangeOk returns a tuple with the StatusChange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusChange

`func (o *Accountstatuschanged) SetStatusChange(v AccountstatuschangedStatusChange)`

SetStatusChange sets StatusChange field to given value.



