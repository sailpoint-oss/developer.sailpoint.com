---
id: get-role-assignments200-response-inner
title: GetRoleAssignments200ResponseInner
pagination_label: GetRoleAssignments200ResponseInner
sidebar_label: GetRoleAssignments200ResponseInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetRoleAssignments200ResponseInner', 'GetRoleAssignments200ResponseInner'] 
slug: /tools/sdk/go//models/get-role-assignments200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetRoleAssignments200ResponseInner', 'GetRoleAssignments200ResponseInner']
---

# GetRoleAssignments200ResponseInner

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

### NewGetRoleAssignments200ResponseInner

`func NewGetRoleAssignments200ResponseInner() *GetRoleAssignments200ResponseInner`

NewGetRoleAssignments200ResponseInner instantiates a new GetRoleAssignments200ResponseInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetRoleAssignments200ResponseInnerWithDefaults

`func NewGetRoleAssignments200ResponseInnerWithDefaults() *GetRoleAssignments200ResponseInner`

NewGetRoleAssignments200ResponseInnerWithDefaults instantiates a new GetRoleAssignments200ResponseInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *GetRoleAssignments200ResponseInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetRoleAssignments200ResponseInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetRoleAssignments200ResponseInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *GetRoleAssignments200ResponseInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetRole

`func (o *GetRoleAssignments200ResponseInner) GetRole() BaseReferenceDto`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *GetRoleAssignments200ResponseInner) GetRoleOk() (*BaseReferenceDto, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *GetRoleAssignments200ResponseInner) SetRole(v BaseReferenceDto)`

SetRole sets Role field to given value.

### HasRole

`func (o *GetRoleAssignments200ResponseInner) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetComments

`func (o *GetRoleAssignments200ResponseInner) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *GetRoleAssignments200ResponseInner) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *GetRoleAssignments200ResponseInner) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *GetRoleAssignments200ResponseInner) HasComments() bool`

HasComments returns a boolean if a field has been set.

### SetCommentsNil

`func (o *GetRoleAssignments200ResponseInner) SetCommentsNil(b bool)`

 SetCommentsNil sets the value for Comments to be an explicit nil

### UnsetComments
`func (o *GetRoleAssignments200ResponseInner) UnsetComments()`

UnsetComments ensures that no value is present for Comments, not even an explicit nil
### GetAssignmentSource

`func (o *GetRoleAssignments200ResponseInner) GetAssignmentSource() string`

GetAssignmentSource returns the AssignmentSource field if non-nil, zero value otherwise.

### GetAssignmentSourceOk

`func (o *GetRoleAssignments200ResponseInner) GetAssignmentSourceOk() (*string, bool)`

GetAssignmentSourceOk returns a tuple with the AssignmentSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignmentSource

`func (o *GetRoleAssignments200ResponseInner) SetAssignmentSource(v string)`

SetAssignmentSource sets AssignmentSource field to given value.

### HasAssignmentSource

`func (o *GetRoleAssignments200ResponseInner) HasAssignmentSource() bool`

HasAssignmentSource returns a boolean if a field has been set.

### GetAssigner

`func (o *GetRoleAssignments200ResponseInner) GetAssigner() RoleAssignmentDtoAssigner`

GetAssigner returns the Assigner field if non-nil, zero value otherwise.

### GetAssignerOk

`func (o *GetRoleAssignments200ResponseInner) GetAssignerOk() (*RoleAssignmentDtoAssigner, bool)`

GetAssignerOk returns a tuple with the Assigner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssigner

`func (o *GetRoleAssignments200ResponseInner) SetAssigner(v RoleAssignmentDtoAssigner)`

SetAssigner sets Assigner field to given value.

### HasAssigner

`func (o *GetRoleAssignments200ResponseInner) HasAssigner() bool`

HasAssigner returns a boolean if a field has been set.

### GetAssignedDimensions

`func (o *GetRoleAssignments200ResponseInner) GetAssignedDimensions() []BaseReferenceDto`

GetAssignedDimensions returns the AssignedDimensions field if non-nil, zero value otherwise.

### GetAssignedDimensionsOk

`func (o *GetRoleAssignments200ResponseInner) GetAssignedDimensionsOk() (*[]BaseReferenceDto, bool)`

GetAssignedDimensionsOk returns a tuple with the AssignedDimensions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignedDimensions

`func (o *GetRoleAssignments200ResponseInner) SetAssignedDimensions(v []BaseReferenceDto)`

SetAssignedDimensions sets AssignedDimensions field to given value.

### HasAssignedDimensions

`func (o *GetRoleAssignments200ResponseInner) HasAssignedDimensions() bool`

HasAssignedDimensions returns a boolean if a field has been set.

### GetAssignmentContext

`func (o *GetRoleAssignments200ResponseInner) GetAssignmentContext() RoleAssignmentDtoAssignmentContext`

GetAssignmentContext returns the AssignmentContext field if non-nil, zero value otherwise.

### GetAssignmentContextOk

`func (o *GetRoleAssignments200ResponseInner) GetAssignmentContextOk() (*RoleAssignmentDtoAssignmentContext, bool)`

GetAssignmentContextOk returns a tuple with the AssignmentContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignmentContext

`func (o *GetRoleAssignments200ResponseInner) SetAssignmentContext(v RoleAssignmentDtoAssignmentContext)`

SetAssignmentContext sets AssignmentContext field to given value.

### HasAssignmentContext

`func (o *GetRoleAssignments200ResponseInner) HasAssignmentContext() bool`

HasAssignmentContext returns a boolean if a field has been set.

### GetAccountTargets

`func (o *GetRoleAssignments200ResponseInner) GetAccountTargets() []RoleTargetDto`

GetAccountTargets returns the AccountTargets field if non-nil, zero value otherwise.

### GetAccountTargetsOk

`func (o *GetRoleAssignments200ResponseInner) GetAccountTargetsOk() (*[]RoleTargetDto, bool)`

GetAccountTargetsOk returns a tuple with the AccountTargets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountTargets

`func (o *GetRoleAssignments200ResponseInner) SetAccountTargets(v []RoleTargetDto)`

SetAccountTargets sets AccountTargets field to given value.

### HasAccountTargets

`func (o *GetRoleAssignments200ResponseInner) HasAccountTargets() bool`

HasAccountTargets returns a boolean if a field has been set.

### GetRemoveDate

`func (o *GetRoleAssignments200ResponseInner) GetRemoveDate() string`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *GetRoleAssignments200ResponseInner) GetRemoveDateOk() (*string, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *GetRoleAssignments200ResponseInner) SetRemoveDate(v string)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *GetRoleAssignments200ResponseInner) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### SetRemoveDateNil

`func (o *GetRoleAssignments200ResponseInner) SetRemoveDateNil(b bool)`

 SetRemoveDateNil sets the value for RemoveDate to be an explicit nil

### UnsetRemoveDate
`func (o *GetRoleAssignments200ResponseInner) UnsetRemoveDate()`

UnsetRemoveDate ensures that no value is present for RemoveDate, not even an explicit nil

