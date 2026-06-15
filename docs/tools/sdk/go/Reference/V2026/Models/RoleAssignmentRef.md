---
id: v2026-role-assignment-ref
title: RoleAssignmentRef
pagination_label: RoleAssignmentRef
sidebar_label: RoleAssignmentRef
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleAssignmentRef', 'V2026RoleAssignmentRef'] 
slug: /tools/sdk/go/v2026/models/role-assignment-ref
tags: ['SDK', 'Software Development Kit', 'RoleAssignmentRef', 'V2026RoleAssignmentRef']
---

# RoleAssignmentRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Assignment Id | [optional] 
**Role** | Pointer to [**BaseReferenceDto**](base-reference-dto) |  | [optional] 
**AddedDate** | Pointer to **SailPointTime** | Date that the assignment was added | [optional] 
**StartDate** | Pointer to **NullableTime** | Date when assignment will be active, if requested with a future date. If null, assignment is active immediately | [optional] 
**RemoveDate** | Pointer to **NullableTime** | Date that the assignment will be removed | [optional] 

## Methods

### NewRoleAssignmentRef

`func NewRoleAssignmentRef() *RoleAssignmentRef`

NewRoleAssignmentRef instantiates a new RoleAssignmentRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleAssignmentRefWithDefaults

`func NewRoleAssignmentRefWithDefaults() *RoleAssignmentRef`

NewRoleAssignmentRefWithDefaults instantiates a new RoleAssignmentRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RoleAssignmentRef) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleAssignmentRef) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleAssignmentRef) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleAssignmentRef) HasId() bool`

HasId returns a boolean if a field has been set.

### GetRole

`func (o *RoleAssignmentRef) GetRole() BaseReferenceDto`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *RoleAssignmentRef) GetRoleOk() (*BaseReferenceDto, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *RoleAssignmentRef) SetRole(v BaseReferenceDto)`

SetRole sets Role field to given value.

### HasRole

`func (o *RoleAssignmentRef) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetAddedDate

`func (o *RoleAssignmentRef) GetAddedDate() SailPointTime`

GetAddedDate returns the AddedDate field if non-nil, zero value otherwise.

### GetAddedDateOk

`func (o *RoleAssignmentRef) GetAddedDateOk() (*SailPointTime, bool)`

GetAddedDateOk returns a tuple with the AddedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddedDate

`func (o *RoleAssignmentRef) SetAddedDate(v SailPointTime)`

SetAddedDate sets AddedDate field to given value.

### HasAddedDate

`func (o *RoleAssignmentRef) HasAddedDate() bool`

HasAddedDate returns a boolean if a field has been set.

### GetStartDate

`func (o *RoleAssignmentRef) GetStartDate() SailPointTime`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *RoleAssignmentRef) GetStartDateOk() (*SailPointTime, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *RoleAssignmentRef) SetStartDate(v SailPointTime)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *RoleAssignmentRef) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### SetStartDateNil

`func (o *RoleAssignmentRef) SetStartDateNil(b bool)`

 SetStartDateNil sets the value for StartDate to be an explicit nil

### UnsetStartDate
`func (o *RoleAssignmentRef) UnsetStartDate()`

UnsetStartDate ensures that no value is present for StartDate, not even an explicit nil
### GetRemoveDate

`func (o *RoleAssignmentRef) GetRemoveDate() SailPointTime`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *RoleAssignmentRef) GetRemoveDateOk() (*SailPointTime, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *RoleAssignmentRef) SetRemoveDate(v SailPointTime)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *RoleAssignmentRef) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### SetRemoveDateNil

`func (o *RoleAssignmentRef) SetRemoveDateNil(b bool)`

 SetRemoveDateNil sets the value for RemoveDate to be an explicit nil

### UnsetRemoveDate
`func (o *RoleAssignmentRef) UnsetRemoveDate()`

UnsetRemoveDate ensures that no value is present for RemoveDate, not even an explicit nil

