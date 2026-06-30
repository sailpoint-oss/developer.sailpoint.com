---
id: v1-roleinsightsresponse
title: Roleinsightsresponse
pagination_label: Roleinsightsresponse
sidebar_label: Roleinsightsresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleinsightsresponse', 'V1Roleinsightsresponse'] 
slug: /tools/sdk/go/roleinsights/models/roleinsightsresponse
tags: ['SDK', 'Software Development Kit', 'Roleinsightsresponse', 'V1Roleinsightsresponse']
---

# Roleinsightsresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Request Id for a role insight generation request | [optional] 
**CreatedDate** | Pointer to **SailPointTime** | The date-time role insights request was created. | [optional] 
**LastGenerated** | Pointer to **SailPointTime** | The date-time role insights request was completed. | [optional] 
**NumberOfUpdates** | Pointer to **int32** | Total number of updates for this request. Starts with 0 and will have correct number when request is COMPLETED. | [optional] 
**RoleIds** | Pointer to **[]string** | The role IDs that are in this request. | [optional] 
**Status** | Pointer to **string** | Request status | [optional] 

## Methods

### NewRoleinsightsresponse

`func NewRoleinsightsresponse() *Roleinsightsresponse`

NewRoleinsightsresponse instantiates a new Roleinsightsresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleinsightsresponseWithDefaults

`func NewRoleinsightsresponseWithDefaults() *Roleinsightsresponse`

NewRoleinsightsresponseWithDefaults instantiates a new Roleinsightsresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Roleinsightsresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Roleinsightsresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Roleinsightsresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Roleinsightsresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCreatedDate

`func (o *Roleinsightsresponse) GetCreatedDate() SailPointTime`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *Roleinsightsresponse) GetCreatedDateOk() (*SailPointTime, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *Roleinsightsresponse) SetCreatedDate(v SailPointTime)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *Roleinsightsresponse) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.

### GetLastGenerated

`func (o *Roleinsightsresponse) GetLastGenerated() SailPointTime`

GetLastGenerated returns the LastGenerated field if non-nil, zero value otherwise.

### GetLastGeneratedOk

`func (o *Roleinsightsresponse) GetLastGeneratedOk() (*SailPointTime, bool)`

GetLastGeneratedOk returns a tuple with the LastGenerated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastGenerated

`func (o *Roleinsightsresponse) SetLastGenerated(v SailPointTime)`

SetLastGenerated sets LastGenerated field to given value.

### HasLastGenerated

`func (o *Roleinsightsresponse) HasLastGenerated() bool`

HasLastGenerated returns a boolean if a field has been set.

### GetNumberOfUpdates

`func (o *Roleinsightsresponse) GetNumberOfUpdates() int32`

GetNumberOfUpdates returns the NumberOfUpdates field if non-nil, zero value otherwise.

### GetNumberOfUpdatesOk

`func (o *Roleinsightsresponse) GetNumberOfUpdatesOk() (*int32, bool)`

GetNumberOfUpdatesOk returns a tuple with the NumberOfUpdates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfUpdates

`func (o *Roleinsightsresponse) SetNumberOfUpdates(v int32)`

SetNumberOfUpdates sets NumberOfUpdates field to given value.

### HasNumberOfUpdates

`func (o *Roleinsightsresponse) HasNumberOfUpdates() bool`

HasNumberOfUpdates returns a boolean if a field has been set.

### GetRoleIds

`func (o *Roleinsightsresponse) GetRoleIds() []string`

GetRoleIds returns the RoleIds field if non-nil, zero value otherwise.

### GetRoleIdsOk

`func (o *Roleinsightsresponse) GetRoleIdsOk() (*[]string, bool)`

GetRoleIdsOk returns a tuple with the RoleIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleIds

`func (o *Roleinsightsresponse) SetRoleIds(v []string)`

SetRoleIds sets RoleIds field to given value.

### HasRoleIds

`func (o *Roleinsightsresponse) HasRoleIds() bool`

HasRoleIds returns a boolean if a field has been set.

### GetStatus

`func (o *Roleinsightsresponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Roleinsightsresponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Roleinsightsresponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Roleinsightsresponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


