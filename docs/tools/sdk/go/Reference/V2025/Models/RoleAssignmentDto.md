---
id: v2025-role-assignment-dto
title: RoleAssignmentDto
pagination_label: RoleAssignmentDto
sidebar_label: RoleAssignmentDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleAssignmentDto', 'V2025RoleAssignmentDto'] 
slug: /tools/sdk/go/v2025/models/role-assignment-dto
tags: ['SDK', 'Software Development Kit', 'RoleAssignmentDto', 'V2025RoleAssignmentDto']
---

# RoleAssignmentDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Assignment Id | [optional] 
**Role** | Pointer to [**BaseReferenceDto**](base-reference-dto) |  | [optional] 
**Comments** | Pointer to **NullableString** | Comments added by the user when the assignment was made | [optional] 
**AssignmentSource** | Pointer to **string** | Source describing how this assignment was made | [optional] 
**Assigner** | Pointer to [**RoleAssignmentDtoAssigner**](role-assignment-dto-assigner) |  | [optional] 
**AssignedDimensions** | Pointer to [**[]BaseReferenceDto**](base-reference-dto) | Dimensions assigned related to this role | [optional] 
**AssignmentContext** | Pointer to [**RoleAssignmentDtoAssignmentContext**](role-assignment-dto-assignment-context) |  | [optional] 
**AccountTargets** | Pointer to [**[]RoleTargetDto**](role-target-dto) |  | [optional] 
**RemoveDate** | Pointer to **NullableString** | Date that the assignment will be removed | [optional] 

## Methods

### NewRoleAssignmentDto

`func NewRoleAssignmentDto() *RoleAssignmentDto`

NewRoleAssignmentDto instantiates a new RoleAssignmentDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleAssignmentDtoWithDefaults

`func NewRoleAssignmentDtoWithDefaults() *RoleAssignmentDto`

NewRoleAssignmentDtoWithDefaults instantiates a new RoleAssignmentDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RoleAssignmentDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleAssignmentDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleAssignmentDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleAssignmentDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetRole

`func (o *RoleAssignmentDto) GetRole() BaseReferenceDto`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *RoleAssignmentDto) GetRoleOk() (*BaseReferenceDto, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *RoleAssignmentDto) SetRole(v BaseReferenceDto)`

SetRole sets Role field to given value.

### HasRole

`func (o *RoleAssignmentDto) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetComments

`func (o *RoleAssignmentDto) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *RoleAssignmentDto) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *RoleAssignmentDto) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *RoleAssignmentDto) HasComments() bool`

HasComments returns a boolean if a field has been set.

### SetCommentsNil

`func (o *RoleAssignmentDto) SetCommentsNil(b bool)`

 SetCommentsNil sets the value for Comments to be an explicit nil

### UnsetComments
`func (o *RoleAssignmentDto) UnsetComments()`

UnsetComments ensures that no value is present for Comments, not even an explicit nil
### GetAssignmentSource

`func (o *RoleAssignmentDto) GetAssignmentSource() string`

GetAssignmentSource returns the AssignmentSource field if non-nil, zero value otherwise.

### GetAssignmentSourceOk

`func (o *RoleAssignmentDto) GetAssignmentSourceOk() (*string, bool)`

GetAssignmentSourceOk returns a tuple with the AssignmentSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignmentSource

`func (o *RoleAssignmentDto) SetAssignmentSource(v string)`

SetAssignmentSource sets AssignmentSource field to given value.

### HasAssignmentSource

`func (o *RoleAssignmentDto) HasAssignmentSource() bool`

HasAssignmentSource returns a boolean if a field has been set.

### GetAssigner

`func (o *RoleAssignmentDto) GetAssigner() RoleAssignmentDtoAssigner`

GetAssigner returns the Assigner field if non-nil, zero value otherwise.

### GetAssignerOk

`func (o *RoleAssignmentDto) GetAssignerOk() (*RoleAssignmentDtoAssigner, bool)`

GetAssignerOk returns a tuple with the Assigner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssigner

`func (o *RoleAssignmentDto) SetAssigner(v RoleAssignmentDtoAssigner)`

SetAssigner sets Assigner field to given value.

### HasAssigner

`func (o *RoleAssignmentDto) HasAssigner() bool`

HasAssigner returns a boolean if a field has been set.

### GetAssignedDimensions

`func (o *RoleAssignmentDto) GetAssignedDimensions() []BaseReferenceDto`

GetAssignedDimensions returns the AssignedDimensions field if non-nil, zero value otherwise.

### GetAssignedDimensionsOk

`func (o *RoleAssignmentDto) GetAssignedDimensionsOk() (*[]BaseReferenceDto, bool)`

GetAssignedDimensionsOk returns a tuple with the AssignedDimensions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignedDimensions

`func (o *RoleAssignmentDto) SetAssignedDimensions(v []BaseReferenceDto)`

SetAssignedDimensions sets AssignedDimensions field to given value.

### HasAssignedDimensions

`func (o *RoleAssignmentDto) HasAssignedDimensions() bool`

HasAssignedDimensions returns a boolean if a field has been set.

### GetAssignmentContext

`func (o *RoleAssignmentDto) GetAssignmentContext() RoleAssignmentDtoAssignmentContext`

GetAssignmentContext returns the AssignmentContext field if non-nil, zero value otherwise.

### GetAssignmentContextOk

`func (o *RoleAssignmentDto) GetAssignmentContextOk() (*RoleAssignmentDtoAssignmentContext, bool)`

GetAssignmentContextOk returns a tuple with the AssignmentContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignmentContext

`func (o *RoleAssignmentDto) SetAssignmentContext(v RoleAssignmentDtoAssignmentContext)`

SetAssignmentContext sets AssignmentContext field to given value.

### HasAssignmentContext

`func (o *RoleAssignmentDto) HasAssignmentContext() bool`

HasAssignmentContext returns a boolean if a field has been set.

### GetAccountTargets

`func (o *RoleAssignmentDto) GetAccountTargets() []RoleTargetDto`

GetAccountTargets returns the AccountTargets field if non-nil, zero value otherwise.

### GetAccountTargetsOk

`func (o *RoleAssignmentDto) GetAccountTargetsOk() (*[]RoleTargetDto, bool)`

GetAccountTargetsOk returns a tuple with the AccountTargets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountTargets

`func (o *RoleAssignmentDto) SetAccountTargets(v []RoleTargetDto)`

SetAccountTargets sets AccountTargets field to given value.

### HasAccountTargets

`func (o *RoleAssignmentDto) HasAccountTargets() bool`

HasAccountTargets returns a boolean if a field has been set.

### GetRemoveDate

`func (o *RoleAssignmentDto) GetRemoveDate() string`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *RoleAssignmentDto) GetRemoveDateOk() (*string, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *RoleAssignmentDto) SetRemoveDate(v string)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *RoleAssignmentDto) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### SetRemoveDateNil

`func (o *RoleAssignmentDto) SetRemoveDateNil(b bool)`

 SetRemoveDateNil sets the value for RemoveDate to be an explicit nil

### UnsetRemoveDate
`func (o *RoleAssignmentDto) UnsetRemoveDate()`

UnsetRemoveDate ensures that no value is present for RemoveDate, not even an explicit nil

