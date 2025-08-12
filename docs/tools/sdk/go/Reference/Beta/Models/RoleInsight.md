---
id: beta-role-insight
title: RoleInsight
pagination_label: RoleInsight
sidebar_label: RoleInsight
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleInsight', 'BetaRoleInsight'] 
slug: /tools/sdk/go/beta/models/role-insight
tags: ['SDK', 'Software Development Kit', 'RoleInsight', 'BetaRoleInsight']
---

# RoleInsight

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Insight id | [optional] 
**NumberOfUpdates** | Pointer to **int32** | Total number of updates for this role | [optional] 
**CreatedDate** | Pointer to **SailPointTime** | The date-time insights were last created for this role. | [optional] 
**ModifiedDate** | Pointer to **NullableTime** | The date-time insights were last modified for this role. | [optional] 
**Role** | Pointer to [**RoleInsightsRole**](role-insights-role) |  | [optional] 
**Insight** | Pointer to [**RoleInsightsInsight**](role-insights-insight) |  | [optional] 

## Methods

### NewRoleInsight

`func NewRoleInsight() *RoleInsight`

NewRoleInsight instantiates a new RoleInsight object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleInsightWithDefaults

`func NewRoleInsightWithDefaults() *RoleInsight`

NewRoleInsightWithDefaults instantiates a new RoleInsight object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RoleInsight) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleInsight) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleInsight) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleInsight) HasId() bool`

HasId returns a boolean if a field has been set.

### GetNumberOfUpdates

`func (o *RoleInsight) GetNumberOfUpdates() int32`

GetNumberOfUpdates returns the NumberOfUpdates field if non-nil, zero value otherwise.

### GetNumberOfUpdatesOk

`func (o *RoleInsight) GetNumberOfUpdatesOk() (*int32, bool)`

GetNumberOfUpdatesOk returns a tuple with the NumberOfUpdates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfUpdates

`func (o *RoleInsight) SetNumberOfUpdates(v int32)`

SetNumberOfUpdates sets NumberOfUpdates field to given value.

### HasNumberOfUpdates

`func (o *RoleInsight) HasNumberOfUpdates() bool`

HasNumberOfUpdates returns a boolean if a field has been set.

### GetCreatedDate

`func (o *RoleInsight) GetCreatedDate() SailPointTime`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *RoleInsight) GetCreatedDateOk() (*SailPointTime, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *RoleInsight) SetCreatedDate(v SailPointTime)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *RoleInsight) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.

### GetModifiedDate

`func (o *RoleInsight) GetModifiedDate() SailPointTime`

GetModifiedDate returns the ModifiedDate field if non-nil, zero value otherwise.

### GetModifiedDateOk

`func (o *RoleInsight) GetModifiedDateOk() (*SailPointTime, bool)`

GetModifiedDateOk returns a tuple with the ModifiedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedDate

`func (o *RoleInsight) SetModifiedDate(v SailPointTime)`

SetModifiedDate sets ModifiedDate field to given value.

### HasModifiedDate

`func (o *RoleInsight) HasModifiedDate() bool`

HasModifiedDate returns a boolean if a field has been set.

### SetModifiedDateNil

`func (o *RoleInsight) SetModifiedDateNil(b bool)`

 SetModifiedDateNil sets the value for ModifiedDate to be an explicit nil

### UnsetModifiedDate
`func (o *RoleInsight) UnsetModifiedDate()`

UnsetModifiedDate ensures that no value is present for ModifiedDate, not even an explicit nil
### GetRole

`func (o *RoleInsight) GetRole() RoleInsightsRole`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *RoleInsight) GetRoleOk() (*RoleInsightsRole, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *RoleInsight) SetRole(v RoleInsightsRole)`

SetRole sets Role field to given value.

### HasRole

`func (o *RoleInsight) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetInsight

`func (o *RoleInsight) GetInsight() RoleInsightsInsight`

GetInsight returns the Insight field if non-nil, zero value otherwise.

### GetInsightOk

`func (o *RoleInsight) GetInsightOk() (*RoleInsightsInsight, bool)`

GetInsightOk returns a tuple with the Insight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInsight

`func (o *RoleInsight) SetInsight(v RoleInsightsInsight)`

SetInsight sets Insight field to given value.

### HasInsight

`func (o *RoleInsight) HasInsight() bool`

HasInsight returns a boolean if a field has been set.


