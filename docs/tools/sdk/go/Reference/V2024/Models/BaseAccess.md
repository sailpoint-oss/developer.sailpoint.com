---
id: v2024-base-access
title: BaseAccess
pagination_label: BaseAccess
sidebar_label: BaseAccess
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BaseAccess', 'V2024BaseAccess'] 
slug: /tools/sdk/go/v2024/models/base-access
tags: ['SDK', 'Software Development Kit', 'BaseAccess', 'V2024BaseAccess']
---

# BaseAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Access item's description. | [optional] 
**Created** | Pointer to **NullableTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Modified** | Pointer to **NullableTime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**Synced** | Pointer to **NullableTime** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**Enabled** | Pointer to **bool** | Indicates whether the access item is currently enabled. | [optional] [default to false]
**Requestable** | Pointer to **bool** | Indicates whether the access item can be requested. | [optional] [default to true]
**RequestCommentsRequired** | Pointer to **bool** | Indicates whether comments are required for requests to access the item. | [optional] [default to false]
**Owner** | Pointer to [**BaseAccessOwner**](base-access-owner) |  | [optional] 

## Methods

### NewBaseAccess

`func NewBaseAccess() *BaseAccess`

NewBaseAccess instantiates a new BaseAccess object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBaseAccessWithDefaults

`func NewBaseAccessWithDefaults() *BaseAccess`

NewBaseAccessWithDefaults instantiates a new BaseAccess object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *BaseAccess) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *BaseAccess) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *BaseAccess) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *BaseAccess) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCreated

`func (o *BaseAccess) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *BaseAccess) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *BaseAccess) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *BaseAccess) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *BaseAccess) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *BaseAccess) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *BaseAccess) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *BaseAccess) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *BaseAccess) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *BaseAccess) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *BaseAccess) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *BaseAccess) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetSynced

`func (o *BaseAccess) GetSynced() SailPointTime`

GetSynced returns the Synced field if non-nil, zero value otherwise.

### GetSyncedOk

`func (o *BaseAccess) GetSyncedOk() (*SailPointTime, bool)`

GetSyncedOk returns a tuple with the Synced field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSynced

`func (o *BaseAccess) SetSynced(v SailPointTime)`

SetSynced sets Synced field to given value.

### HasSynced

`func (o *BaseAccess) HasSynced() bool`

HasSynced returns a boolean if a field has been set.

### SetSyncedNil

`func (o *BaseAccess) SetSyncedNil(b bool)`

 SetSyncedNil sets the value for Synced to be an explicit nil

### UnsetSynced
`func (o *BaseAccess) UnsetSynced()`

UnsetSynced ensures that no value is present for Synced, not even an explicit nil
### GetEnabled

`func (o *BaseAccess) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *BaseAccess) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *BaseAccess) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *BaseAccess) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetRequestable

`func (o *BaseAccess) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *BaseAccess) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *BaseAccess) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.

### HasRequestable

`func (o *BaseAccess) HasRequestable() bool`

HasRequestable returns a boolean if a field has been set.

### GetRequestCommentsRequired

`func (o *BaseAccess) GetRequestCommentsRequired() bool`

GetRequestCommentsRequired returns the RequestCommentsRequired field if non-nil, zero value otherwise.

### GetRequestCommentsRequiredOk

`func (o *BaseAccess) GetRequestCommentsRequiredOk() (*bool, bool)`

GetRequestCommentsRequiredOk returns a tuple with the RequestCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestCommentsRequired

`func (o *BaseAccess) SetRequestCommentsRequired(v bool)`

SetRequestCommentsRequired sets RequestCommentsRequired field to given value.

### HasRequestCommentsRequired

`func (o *BaseAccess) HasRequestCommentsRequired() bool`

HasRequestCommentsRequired returns a boolean if a field has been set.

### GetOwner

`func (o *BaseAccess) GetOwner() BaseAccessOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *BaseAccess) GetOwnerOk() (*BaseAccessOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *BaseAccess) SetOwner(v BaseAccessOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *BaseAccess) HasOwner() bool`

HasOwner returns a boolean if a field has been set.


