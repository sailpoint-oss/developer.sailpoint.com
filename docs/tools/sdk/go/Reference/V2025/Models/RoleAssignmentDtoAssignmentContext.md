---
id: role-assignment-dto-assignment-context
title: RoleAssignmentDtoAssignmentContext
pagination_label: RoleAssignmentDtoAssignmentContext
sidebar_label: RoleAssignmentDtoAssignmentContext
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleAssignmentDtoAssignmentContext', 'RoleAssignmentDtoAssignmentContext'] 
slug: /tools/sdk/go//models/role-assignment-dto-assignment-context
tags: ['SDK', 'Software Development Kit', 'RoleAssignmentDtoAssignmentContext', 'RoleAssignmentDtoAssignmentContext']
---

# RoleAssignmentDtoAssignmentContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Requested** | Pointer to [**AccessRequestContext**](access-request-context) |  | [optional] 
**Matched** | Pointer to [**[]RoleMatchDto**](role-match-dto) |  | [optional] 
**ComputedDate** | Pointer to **string** | Date that the assignment will was evaluated | [optional] 

## Methods

### NewRoleAssignmentDtoAssignmentContext

`func NewRoleAssignmentDtoAssignmentContext() *RoleAssignmentDtoAssignmentContext`

NewRoleAssignmentDtoAssignmentContext instantiates a new RoleAssignmentDtoAssignmentContext object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleAssignmentDtoAssignmentContextWithDefaults

`func NewRoleAssignmentDtoAssignmentContextWithDefaults() *RoleAssignmentDtoAssignmentContext`

NewRoleAssignmentDtoAssignmentContextWithDefaults instantiates a new RoleAssignmentDtoAssignmentContext object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequested

`func (o *RoleAssignmentDtoAssignmentContext) GetRequested() AccessRequestContext`

GetRequested returns the Requested field if non-nil, zero value otherwise.

### GetRequestedOk

`func (o *RoleAssignmentDtoAssignmentContext) GetRequestedOk() (*AccessRequestContext, bool)`

GetRequestedOk returns a tuple with the Requested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequested

`func (o *RoleAssignmentDtoAssignmentContext) SetRequested(v AccessRequestContext)`

SetRequested sets Requested field to given value.

### HasRequested

`func (o *RoleAssignmentDtoAssignmentContext) HasRequested() bool`

HasRequested returns a boolean if a field has been set.

### GetMatched

`func (o *RoleAssignmentDtoAssignmentContext) GetMatched() []RoleMatchDto`

GetMatched returns the Matched field if non-nil, zero value otherwise.

### GetMatchedOk

`func (o *RoleAssignmentDtoAssignmentContext) GetMatchedOk() (*[]RoleMatchDto, bool)`

GetMatchedOk returns a tuple with the Matched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatched

`func (o *RoleAssignmentDtoAssignmentContext) SetMatched(v []RoleMatchDto)`

SetMatched sets Matched field to given value.

### HasMatched

`func (o *RoleAssignmentDtoAssignmentContext) HasMatched() bool`

HasMatched returns a boolean if a field has been set.

### GetComputedDate

`func (o *RoleAssignmentDtoAssignmentContext) GetComputedDate() string`

GetComputedDate returns the ComputedDate field if non-nil, zero value otherwise.

### GetComputedDateOk

`func (o *RoleAssignmentDtoAssignmentContext) GetComputedDateOk() (*string, bool)`

GetComputedDateOk returns a tuple with the ComputedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComputedDate

`func (o *RoleAssignmentDtoAssignmentContext) SetComputedDate(v string)`

SetComputedDate sets ComputedDate field to given value.

### HasComputedDate

`func (o *RoleAssignmentDtoAssignmentContext) HasComputedDate() bool`

HasComputedDate returns a boolean if a field has been set.


