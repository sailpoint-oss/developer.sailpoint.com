---
id: v1-get-role-assignments-v1200-response-inner
title: GetRoleAssignmentsV1200ResponseInner
pagination_label: GetRoleAssignmentsV1200ResponseInner
sidebar_label: GetRoleAssignmentsV1200ResponseInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetRoleAssignmentsV1200ResponseInner', 'V1GetRoleAssignmentsV1200ResponseInner'] 
slug: /tools/sdk/go/identities/models/get-role-assignments-v1200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetRoleAssignmentsV1200ResponseInner', 'V1GetRoleAssignmentsV1200ResponseInner']
---

# GetRoleAssignmentsV1200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Assignment Id | [optional] 
**Role** | Pointer to [**Basereferencedto**](basereferencedto) |  | [optional] 
**AddedDate** | Pointer to **SailPointTime** | Date that the assignment was added | [optional] 
**StartDate** | Pointer to **NullableTime** | Date when assignment will be active, if access was requested with a future start date. If null, assignment is active immediately | [optional] 
**RemoveDate** | Pointer to **NullableTime** | Date that the assignment will be removed | [optional] 
**Comments** | Pointer to **NullableString** | Comments added by the user when the assignment was made | [optional] 
**AssignmentSource** | Pointer to **string** | Source describing how this assignment was made | [optional] 
**Assigner** | Pointer to [**RoleassignmentdtoAssigner**](roleassignmentdto-assigner) |  | [optional] 
**AssignedDimensions** | Pointer to [**[]Basereferencedto**](basereferencedto) | Dimensions assigned related to this role | [optional] 
**AssignmentContext** | Pointer to [**RoleassignmentdtoAssignmentContext**](roleassignmentdto-assignment-context) |  | [optional] 
**AccountTargets** | Pointer to [**[]Roletargetdto**](roletargetdto) |  | [optional] 

## Methods

### NewGetRoleAssignmentsV1200ResponseInner

`func NewGetRoleAssignmentsV1200ResponseInner() *GetRoleAssignmentsV1200ResponseInner`

NewGetRoleAssignmentsV1200ResponseInner instantiates a new GetRoleAssignmentsV1200ResponseInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetRoleAssignmentsV1200ResponseInnerWithDefaults

`func NewGetRoleAssignmentsV1200ResponseInnerWithDefaults() *GetRoleAssignmentsV1200ResponseInner`

NewGetRoleAssignmentsV1200ResponseInnerWithDefaults instantiates a new GetRoleAssignmentsV1200ResponseInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *GetRoleAssignmentsV1200ResponseInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetRoleAssignmentsV1200ResponseInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetRoleAssignmentsV1200ResponseInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *GetRoleAssignmentsV1200ResponseInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetRole

`func (o *GetRoleAssignmentsV1200ResponseInner) GetRole() Basereferencedto`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *GetRoleAssignmentsV1200ResponseInner) GetRoleOk() (*Basereferencedto, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *GetRoleAssignmentsV1200ResponseInner) SetRole(v Basereferencedto)`

SetRole sets Role field to given value.

### HasRole

`func (o *GetRoleAssignmentsV1200ResponseInner) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetAddedDate

`func (o *GetRoleAssignmentsV1200ResponseInner) GetAddedDate() SailPointTime`

GetAddedDate returns the AddedDate field if non-nil, zero value otherwise.

### GetAddedDateOk

`func (o *GetRoleAssignmentsV1200ResponseInner) GetAddedDateOk() (*SailPointTime, bool)`

GetAddedDateOk returns a tuple with the AddedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddedDate

`func (o *GetRoleAssignmentsV1200ResponseInner) SetAddedDate(v SailPointTime)`

SetAddedDate sets AddedDate field to given value.

### HasAddedDate

`func (o *GetRoleAssignmentsV1200ResponseInner) HasAddedDate() bool`

HasAddedDate returns a boolean if a field has been set.

### GetStartDate

`func (o *GetRoleAssignmentsV1200ResponseInner) GetStartDate() SailPointTime`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *GetRoleAssignmentsV1200ResponseInner) GetStartDateOk() (*SailPointTime, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *GetRoleAssignmentsV1200ResponseInner) SetStartDate(v SailPointTime)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *GetRoleAssignmentsV1200ResponseInner) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### SetStartDateNil

`func (o *GetRoleAssignmentsV1200ResponseInner) SetStartDateNil(b bool)`

 SetStartDateNil sets the value for StartDate to be an explicit nil

### UnsetStartDate
`func (o *GetRoleAssignmentsV1200ResponseInner) UnsetStartDate()`

UnsetStartDate ensures that no value is present for StartDate, not even an explicit nil
### GetRemoveDate

`func (o *GetRoleAssignmentsV1200ResponseInner) GetRemoveDate() SailPointTime`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *GetRoleAssignmentsV1200ResponseInner) GetRemoveDateOk() (*SailPointTime, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *GetRoleAssignmentsV1200ResponseInner) SetRemoveDate(v SailPointTime)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *GetRoleAssignmentsV1200ResponseInner) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### SetRemoveDateNil

`func (o *GetRoleAssignmentsV1200ResponseInner) SetRemoveDateNil(b bool)`

 SetRemoveDateNil sets the value for RemoveDate to be an explicit nil

### UnsetRemoveDate
`func (o *GetRoleAssignmentsV1200ResponseInner) UnsetRemoveDate()`

UnsetRemoveDate ensures that no value is present for RemoveDate, not even an explicit nil
### GetComments

`func (o *GetRoleAssignmentsV1200ResponseInner) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *GetRoleAssignmentsV1200ResponseInner) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *GetRoleAssignmentsV1200ResponseInner) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *GetRoleAssignmentsV1200ResponseInner) HasComments() bool`

HasComments returns a boolean if a field has been set.

### SetCommentsNil

`func (o *GetRoleAssignmentsV1200ResponseInner) SetCommentsNil(b bool)`

 SetCommentsNil sets the value for Comments to be an explicit nil

### UnsetComments
`func (o *GetRoleAssignmentsV1200ResponseInner) UnsetComments()`

UnsetComments ensures that no value is present for Comments, not even an explicit nil
### GetAssignmentSource

`func (o *GetRoleAssignmentsV1200ResponseInner) GetAssignmentSource() string`

GetAssignmentSource returns the AssignmentSource field if non-nil, zero value otherwise.

### GetAssignmentSourceOk

`func (o *GetRoleAssignmentsV1200ResponseInner) GetAssignmentSourceOk() (*string, bool)`

GetAssignmentSourceOk returns a tuple with the AssignmentSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignmentSource

`func (o *GetRoleAssignmentsV1200ResponseInner) SetAssignmentSource(v string)`

SetAssignmentSource sets AssignmentSource field to given value.

### HasAssignmentSource

`func (o *GetRoleAssignmentsV1200ResponseInner) HasAssignmentSource() bool`

HasAssignmentSource returns a boolean if a field has been set.

### GetAssigner

`func (o *GetRoleAssignmentsV1200ResponseInner) GetAssigner() RoleassignmentdtoAssigner`

GetAssigner returns the Assigner field if non-nil, zero value otherwise.

### GetAssignerOk

`func (o *GetRoleAssignmentsV1200ResponseInner) GetAssignerOk() (*RoleassignmentdtoAssigner, bool)`

GetAssignerOk returns a tuple with the Assigner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssigner

`func (o *GetRoleAssignmentsV1200ResponseInner) SetAssigner(v RoleassignmentdtoAssigner)`

SetAssigner sets Assigner field to given value.

### HasAssigner

`func (o *GetRoleAssignmentsV1200ResponseInner) HasAssigner() bool`

HasAssigner returns a boolean if a field has been set.

### GetAssignedDimensions

`func (o *GetRoleAssignmentsV1200ResponseInner) GetAssignedDimensions() []Basereferencedto`

GetAssignedDimensions returns the AssignedDimensions field if non-nil, zero value otherwise.

### GetAssignedDimensionsOk

`func (o *GetRoleAssignmentsV1200ResponseInner) GetAssignedDimensionsOk() (*[]Basereferencedto, bool)`

GetAssignedDimensionsOk returns a tuple with the AssignedDimensions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignedDimensions

`func (o *GetRoleAssignmentsV1200ResponseInner) SetAssignedDimensions(v []Basereferencedto)`

SetAssignedDimensions sets AssignedDimensions field to given value.

### HasAssignedDimensions

`func (o *GetRoleAssignmentsV1200ResponseInner) HasAssignedDimensions() bool`

HasAssignedDimensions returns a boolean if a field has been set.

### GetAssignmentContext

`func (o *GetRoleAssignmentsV1200ResponseInner) GetAssignmentContext() RoleassignmentdtoAssignmentContext`

GetAssignmentContext returns the AssignmentContext field if non-nil, zero value otherwise.

### GetAssignmentContextOk

`func (o *GetRoleAssignmentsV1200ResponseInner) GetAssignmentContextOk() (*RoleassignmentdtoAssignmentContext, bool)`

GetAssignmentContextOk returns a tuple with the AssignmentContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignmentContext

`func (o *GetRoleAssignmentsV1200ResponseInner) SetAssignmentContext(v RoleassignmentdtoAssignmentContext)`

SetAssignmentContext sets AssignmentContext field to given value.

### HasAssignmentContext

`func (o *GetRoleAssignmentsV1200ResponseInner) HasAssignmentContext() bool`

HasAssignmentContext returns a boolean if a field has been set.

### GetAccountTargets

`func (o *GetRoleAssignmentsV1200ResponseInner) GetAccountTargets() []Roletargetdto`

GetAccountTargets returns the AccountTargets field if non-nil, zero value otherwise.

### GetAccountTargetsOk

`func (o *GetRoleAssignmentsV1200ResponseInner) GetAccountTargetsOk() (*[]Roletargetdto, bool)`

GetAccountTargetsOk returns a tuple with the AccountTargets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountTargets

`func (o *GetRoleAssignmentsV1200ResponseInner) SetAccountTargets(v []Roletargetdto)`

SetAccountTargets sets AccountTargets field to given value.

### HasAccountTargets

`func (o *GetRoleAssignmentsV1200ResponseInner) HasAccountTargets() bool`

HasAccountTargets returns a boolean if a field has been set.


