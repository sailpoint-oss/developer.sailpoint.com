---
id: v2024-role-insights-response
title: RoleInsightsResponse
pagination_label: RoleInsightsResponse
sidebar_label: RoleInsightsResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleInsightsResponse', 'V2024RoleInsightsResponse'] 
slug: /tools/sdk/go/v2024/models/role-insights-response
tags: ['SDK', 'Software Development Kit', 'RoleInsightsResponse', 'V2024RoleInsightsResponse']
---

# RoleInsightsResponse

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

### NewRoleInsightsResponse

`func NewRoleInsightsResponse() *RoleInsightsResponse`

NewRoleInsightsResponse instantiates a new RoleInsightsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleInsightsResponseWithDefaults

`func NewRoleInsightsResponseWithDefaults() *RoleInsightsResponse`

NewRoleInsightsResponseWithDefaults instantiates a new RoleInsightsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RoleInsightsResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleInsightsResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleInsightsResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleInsightsResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCreatedDate

`func (o *RoleInsightsResponse) GetCreatedDate() SailPointTime`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *RoleInsightsResponse) GetCreatedDateOk() (*SailPointTime, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *RoleInsightsResponse) SetCreatedDate(v SailPointTime)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *RoleInsightsResponse) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.

### GetLastGenerated

`func (o *RoleInsightsResponse) GetLastGenerated() SailPointTime`

GetLastGenerated returns the LastGenerated field if non-nil, zero value otherwise.

### GetLastGeneratedOk

`func (o *RoleInsightsResponse) GetLastGeneratedOk() (*SailPointTime, bool)`

GetLastGeneratedOk returns a tuple with the LastGenerated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastGenerated

`func (o *RoleInsightsResponse) SetLastGenerated(v SailPointTime)`

SetLastGenerated sets LastGenerated field to given value.

### HasLastGenerated

`func (o *RoleInsightsResponse) HasLastGenerated() bool`

HasLastGenerated returns a boolean if a field has been set.

### GetNumberOfUpdates

`func (o *RoleInsightsResponse) GetNumberOfUpdates() int32`

GetNumberOfUpdates returns the NumberOfUpdates field if non-nil, zero value otherwise.

### GetNumberOfUpdatesOk

`func (o *RoleInsightsResponse) GetNumberOfUpdatesOk() (*int32, bool)`

GetNumberOfUpdatesOk returns a tuple with the NumberOfUpdates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfUpdates

`func (o *RoleInsightsResponse) SetNumberOfUpdates(v int32)`

SetNumberOfUpdates sets NumberOfUpdates field to given value.

### HasNumberOfUpdates

`func (o *RoleInsightsResponse) HasNumberOfUpdates() bool`

HasNumberOfUpdates returns a boolean if a field has been set.

### GetRoleIds

`func (o *RoleInsightsResponse) GetRoleIds() []string`

GetRoleIds returns the RoleIds field if non-nil, zero value otherwise.

### GetRoleIdsOk

`func (o *RoleInsightsResponse) GetRoleIdsOk() (*[]string, bool)`

GetRoleIdsOk returns a tuple with the RoleIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleIds

`func (o *RoleInsightsResponse) SetRoleIds(v []string)`

SetRoleIds sets RoleIds field to given value.

### HasRoleIds

`func (o *RoleInsightsResponse) HasRoleIds() bool`

HasRoleIds returns a boolean if a field has been set.

### GetStatus

`func (o *RoleInsightsResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *RoleInsightsResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *RoleInsightsResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *RoleInsightsResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


