---
id: v1-roleassignmentdto
title: Roleassignmentdto
pagination_label: Roleassignmentdto
sidebar_label: Roleassignmentdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleassignmentdto', 'V1Roleassignmentdto'] 
slug: /tools/sdk/go/identities/models/roleassignmentdto
tags: ['SDK', 'Software Development Kit', 'Roleassignmentdto', 'V1Roleassignmentdto']
---

# Roleassignmentdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Assignment Id | [optional] 
**Role** | Pointer to [**Basereferencedto**](basereferencedto) |  | [optional] 
**Comments** | Pointer to **NullableString** | Comments added by the user when the assignment was made | [optional] 
**AssignmentSource** | Pointer to **string** | Source describing how this assignment was made | [optional] 
**Assigner** | Pointer to [**RoleassignmentdtoAssigner**](roleassignmentdto-assigner) |  | [optional] 
**AssignedDimensions** | Pointer to [**[]Basereferencedto**](basereferencedto) | Dimensions assigned related to this role | [optional] 
**AssignmentContext** | Pointer to [**RoleassignmentdtoAssignmentContext**](roleassignmentdto-assignment-context) |  | [optional] 
**AccountTargets** | Pointer to [**[]Roletargetdto**](roletargetdto) |  | [optional] 
**StartDate** | Pointer to **NullableTime** | Date when assignment will be active, if access was requested with a future start date. If null, assignment is active immediately | [optional] 
**RemoveDate** | Pointer to **NullableTime** | Date that the assignment will be removed | [optional] 
**AddedDate** | Pointer to **SailPointTime** | Date that the assignment was added | [optional] 

## Methods

### NewRoleassignmentdto

`func NewRoleassignmentdto() *Roleassignmentdto`

NewRoleassignmentdto instantiates a new Roleassignmentdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleassignmentdtoWithDefaults

`func NewRoleassignmentdtoWithDefaults() *Roleassignmentdto`

NewRoleassignmentdtoWithDefaults instantiates a new Roleassignmentdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Roleassignmentdto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Roleassignmentdto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Roleassignmentdto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Roleassignmentdto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetRole

`func (o *Roleassignmentdto) GetRole() Basereferencedto`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *Roleassignmentdto) GetRoleOk() (*Basereferencedto, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *Roleassignmentdto) SetRole(v Basereferencedto)`

SetRole sets Role field to given value.

### HasRole

`func (o *Roleassignmentdto) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetComments

`func (o *Roleassignmentdto) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *Roleassignmentdto) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *Roleassignmentdto) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *Roleassignmentdto) HasComments() bool`

HasComments returns a boolean if a field has been set.

### SetCommentsNil

`func (o *Roleassignmentdto) SetCommentsNil(b bool)`

 SetCommentsNil sets the value for Comments to be an explicit nil

### UnsetComments
`func (o *Roleassignmentdto) UnsetComments()`

UnsetComments ensures that no value is present for Comments, not even an explicit nil
### GetAssignmentSource

`func (o *Roleassignmentdto) GetAssignmentSource() string`

GetAssignmentSource returns the AssignmentSource field if non-nil, zero value otherwise.

### GetAssignmentSourceOk

`func (o *Roleassignmentdto) GetAssignmentSourceOk() (*string, bool)`

GetAssignmentSourceOk returns a tuple with the AssignmentSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignmentSource

`func (o *Roleassignmentdto) SetAssignmentSource(v string)`

SetAssignmentSource sets AssignmentSource field to given value.

### HasAssignmentSource

`func (o *Roleassignmentdto) HasAssignmentSource() bool`

HasAssignmentSource returns a boolean if a field has been set.

### GetAssigner

`func (o *Roleassignmentdto) GetAssigner() RoleassignmentdtoAssigner`

GetAssigner returns the Assigner field if non-nil, zero value otherwise.

### GetAssignerOk

`func (o *Roleassignmentdto) GetAssignerOk() (*RoleassignmentdtoAssigner, bool)`

GetAssignerOk returns a tuple with the Assigner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssigner

`func (o *Roleassignmentdto) SetAssigner(v RoleassignmentdtoAssigner)`

SetAssigner sets Assigner field to given value.

### HasAssigner

`func (o *Roleassignmentdto) HasAssigner() bool`

HasAssigner returns a boolean if a field has been set.

### GetAssignedDimensions

`func (o *Roleassignmentdto) GetAssignedDimensions() []Basereferencedto`

GetAssignedDimensions returns the AssignedDimensions field if non-nil, zero value otherwise.

### GetAssignedDimensionsOk

`func (o *Roleassignmentdto) GetAssignedDimensionsOk() (*[]Basereferencedto, bool)`

GetAssignedDimensionsOk returns a tuple with the AssignedDimensions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignedDimensions

`func (o *Roleassignmentdto) SetAssignedDimensions(v []Basereferencedto)`

SetAssignedDimensions sets AssignedDimensions field to given value.

### HasAssignedDimensions

`func (o *Roleassignmentdto) HasAssignedDimensions() bool`

HasAssignedDimensions returns a boolean if a field has been set.

### GetAssignmentContext

`func (o *Roleassignmentdto) GetAssignmentContext() RoleassignmentdtoAssignmentContext`

GetAssignmentContext returns the AssignmentContext field if non-nil, zero value otherwise.

### GetAssignmentContextOk

`func (o *Roleassignmentdto) GetAssignmentContextOk() (*RoleassignmentdtoAssignmentContext, bool)`

GetAssignmentContextOk returns a tuple with the AssignmentContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignmentContext

`func (o *Roleassignmentdto) SetAssignmentContext(v RoleassignmentdtoAssignmentContext)`

SetAssignmentContext sets AssignmentContext field to given value.

### HasAssignmentContext

`func (o *Roleassignmentdto) HasAssignmentContext() bool`

HasAssignmentContext returns a boolean if a field has been set.

### GetAccountTargets

`func (o *Roleassignmentdto) GetAccountTargets() []Roletargetdto`

GetAccountTargets returns the AccountTargets field if non-nil, zero value otherwise.

### GetAccountTargetsOk

`func (o *Roleassignmentdto) GetAccountTargetsOk() (*[]Roletargetdto, bool)`

GetAccountTargetsOk returns a tuple with the AccountTargets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountTargets

`func (o *Roleassignmentdto) SetAccountTargets(v []Roletargetdto)`

SetAccountTargets sets AccountTargets field to given value.

### HasAccountTargets

`func (o *Roleassignmentdto) HasAccountTargets() bool`

HasAccountTargets returns a boolean if a field has been set.

### GetStartDate

`func (o *Roleassignmentdto) GetStartDate() SailPointTime`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *Roleassignmentdto) GetStartDateOk() (*SailPointTime, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *Roleassignmentdto) SetStartDate(v SailPointTime)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *Roleassignmentdto) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### SetStartDateNil

`func (o *Roleassignmentdto) SetStartDateNil(b bool)`

 SetStartDateNil sets the value for StartDate to be an explicit nil

### UnsetStartDate
`func (o *Roleassignmentdto) UnsetStartDate()`

UnsetStartDate ensures that no value is present for StartDate, not even an explicit nil
### GetRemoveDate

`func (o *Roleassignmentdto) GetRemoveDate() SailPointTime`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *Roleassignmentdto) GetRemoveDateOk() (*SailPointTime, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *Roleassignmentdto) SetRemoveDate(v SailPointTime)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *Roleassignmentdto) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### SetRemoveDateNil

`func (o *Roleassignmentdto) SetRemoveDateNil(b bool)`

 SetRemoveDateNil sets the value for RemoveDate to be an explicit nil

### UnsetRemoveDate
`func (o *Roleassignmentdto) UnsetRemoveDate()`

UnsetRemoveDate ensures that no value is present for RemoveDate, not even an explicit nil
### GetAddedDate

`func (o *Roleassignmentdto) GetAddedDate() SailPointTime`

GetAddedDate returns the AddedDate field if non-nil, zero value otherwise.

### GetAddedDateOk

`func (o *Roleassignmentdto) GetAddedDateOk() (*SailPointTime, bool)`

GetAddedDateOk returns a tuple with the AddedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddedDate

`func (o *Roleassignmentdto) SetAddedDate(v SailPointTime)`

SetAddedDate sets AddedDate field to given value.

### HasAddedDate

`func (o *Roleassignmentdto) HasAddedDate() bool`

HasAddedDate returns a boolean if a field has been set.


