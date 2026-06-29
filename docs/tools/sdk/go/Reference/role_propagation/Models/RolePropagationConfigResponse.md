---
id: v1-role-propagation-config-response
title: RolePropagationConfigResponse
pagination_label: RolePropagationConfigResponse
sidebar_label: RolePropagationConfigResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RolePropagationConfigResponse', 'V1RolePropagationConfigResponse'] 
slug: /tools/sdk/go/rolepropagation/models/role-propagation-config-response
tags: ['SDK', 'Software Development Kit', 'RolePropagationConfigResponse', 'V1RolePropagationConfigResponse']
---

# RolePropagationConfigResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | Indicates if the Role Change Propagation process is enabled for the tenant | [optional] [default to false]
**EnabledDate** | Pointer to **SailPointTime** | The time when Role Change Propagation Process was last enabled on the tenant | [optional] 
**CreatedDate** | Pointer to **SailPointTime** | The time when Role Change Propagation Configuration was first created for the tenant | [optional] 
**ModifiedDate** | Pointer to **SailPointTime** | The time when Role Change Propagation Config was updated on the tenant | [optional] 

## Methods

### NewRolePropagationConfigResponse

`func NewRolePropagationConfigResponse() *RolePropagationConfigResponse`

NewRolePropagationConfigResponse instantiates a new RolePropagationConfigResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolePropagationConfigResponseWithDefaults

`func NewRolePropagationConfigResponseWithDefaults() *RolePropagationConfigResponse`

NewRolePropagationConfigResponseWithDefaults instantiates a new RolePropagationConfigResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *RolePropagationConfigResponse) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *RolePropagationConfigResponse) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *RolePropagationConfigResponse) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *RolePropagationConfigResponse) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetEnabledDate

`func (o *RolePropagationConfigResponse) GetEnabledDate() SailPointTime`

GetEnabledDate returns the EnabledDate field if non-nil, zero value otherwise.

### GetEnabledDateOk

`func (o *RolePropagationConfigResponse) GetEnabledDateOk() (*SailPointTime, bool)`

GetEnabledDateOk returns a tuple with the EnabledDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabledDate

`func (o *RolePropagationConfigResponse) SetEnabledDate(v SailPointTime)`

SetEnabledDate sets EnabledDate field to given value.

### HasEnabledDate

`func (o *RolePropagationConfigResponse) HasEnabledDate() bool`

HasEnabledDate returns a boolean if a field has been set.

### GetCreatedDate

`func (o *RolePropagationConfigResponse) GetCreatedDate() SailPointTime`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *RolePropagationConfigResponse) GetCreatedDateOk() (*SailPointTime, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *RolePropagationConfigResponse) SetCreatedDate(v SailPointTime)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *RolePropagationConfigResponse) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.

### GetModifiedDate

`func (o *RolePropagationConfigResponse) GetModifiedDate() SailPointTime`

GetModifiedDate returns the ModifiedDate field if non-nil, zero value otherwise.

### GetModifiedDateOk

`func (o *RolePropagationConfigResponse) GetModifiedDateOk() (*SailPointTime, bool)`

GetModifiedDateOk returns a tuple with the ModifiedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedDate

`func (o *RolePropagationConfigResponse) SetModifiedDate(v SailPointTime)`

SetModifiedDate sets ModifiedDate field to given value.

### HasModifiedDate

`func (o *RolePropagationConfigResponse) HasModifiedDate() bool`

HasModifiedDate returns a boolean if a field has been set.


