---
id: v1-roleinsight
title: Roleinsight
pagination_label: Roleinsight
sidebar_label: Roleinsight
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleinsight', 'V1Roleinsight'] 
slug: /tools/sdk/go/roleinsights/models/roleinsight
tags: ['SDK', 'Software Development Kit', 'Roleinsight', 'V1Roleinsight']
---

# Roleinsight

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Insight id | [optional] 
**NumberOfUpdates** | Pointer to **int32** | Total number of updates for this role | [optional] 
**CreatedDate** | Pointer to **SailPointTime** | The date-time insights were last created for this role. | [optional] 
**ModifiedDate** | Pointer to **NullableTime** | The date-time insights were last modified for this role. | [optional] 
**Role** | Pointer to [**Roleinsightsrole**](roleinsightsrole) |  | [optional] 
**Insight** | Pointer to [**Roleinsightsinsight**](roleinsightsinsight) |  | [optional] 

## Methods

### NewRoleinsight

`func NewRoleinsight() *Roleinsight`

NewRoleinsight instantiates a new Roleinsight object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleinsightWithDefaults

`func NewRoleinsightWithDefaults() *Roleinsight`

NewRoleinsightWithDefaults instantiates a new Roleinsight object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Roleinsight) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Roleinsight) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Roleinsight) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Roleinsight) HasId() bool`

HasId returns a boolean if a field has been set.

### GetNumberOfUpdates

`func (o *Roleinsight) GetNumberOfUpdates() int32`

GetNumberOfUpdates returns the NumberOfUpdates field if non-nil, zero value otherwise.

### GetNumberOfUpdatesOk

`func (o *Roleinsight) GetNumberOfUpdatesOk() (*int32, bool)`

GetNumberOfUpdatesOk returns a tuple with the NumberOfUpdates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfUpdates

`func (o *Roleinsight) SetNumberOfUpdates(v int32)`

SetNumberOfUpdates sets NumberOfUpdates field to given value.

### HasNumberOfUpdates

`func (o *Roleinsight) HasNumberOfUpdates() bool`

HasNumberOfUpdates returns a boolean if a field has been set.

### GetCreatedDate

`func (o *Roleinsight) GetCreatedDate() SailPointTime`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *Roleinsight) GetCreatedDateOk() (*SailPointTime, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *Roleinsight) SetCreatedDate(v SailPointTime)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *Roleinsight) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.

### GetModifiedDate

`func (o *Roleinsight) GetModifiedDate() SailPointTime`

GetModifiedDate returns the ModifiedDate field if non-nil, zero value otherwise.

### GetModifiedDateOk

`func (o *Roleinsight) GetModifiedDateOk() (*SailPointTime, bool)`

GetModifiedDateOk returns a tuple with the ModifiedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedDate

`func (o *Roleinsight) SetModifiedDate(v SailPointTime)`

SetModifiedDate sets ModifiedDate field to given value.

### HasModifiedDate

`func (o *Roleinsight) HasModifiedDate() bool`

HasModifiedDate returns a boolean if a field has been set.

### SetModifiedDateNil

`func (o *Roleinsight) SetModifiedDateNil(b bool)`

 SetModifiedDateNil sets the value for ModifiedDate to be an explicit nil

### UnsetModifiedDate
`func (o *Roleinsight) UnsetModifiedDate()`

UnsetModifiedDate ensures that no value is present for ModifiedDate, not even an explicit nil
### GetRole

`func (o *Roleinsight) GetRole() Roleinsightsrole`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *Roleinsight) GetRoleOk() (*Roleinsightsrole, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *Roleinsight) SetRole(v Roleinsightsrole)`

SetRole sets Role field to given value.

### HasRole

`func (o *Roleinsight) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetInsight

`func (o *Roleinsight) GetInsight() Roleinsightsinsight`

GetInsight returns the Insight field if non-nil, zero value otherwise.

### GetInsightOk

`func (o *Roleinsight) GetInsightOk() (*Roleinsightsinsight, bool)`

GetInsightOk returns a tuple with the Insight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInsight

`func (o *Roleinsight) SetInsight(v Roleinsightsinsight)`

SetInsight sets Insight field to given value.

### HasInsight

`func (o *Roleinsight) HasInsight() bool`

HasInsight returns a boolean if a field has been set.


