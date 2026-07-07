---
id: v1-nonemployeesourcerequestbody
title: Nonemployeesourcerequestbody
pagination_label: Nonemployeesourcerequestbody
sidebar_label: Nonemployeesourcerequestbody
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Nonemployeesourcerequestbody', 'V1Nonemployeesourcerequestbody'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/models/nonemployeesourcerequestbody
tags: ['SDK', 'Software Development Kit', 'Nonemployeesourcerequestbody', 'V1Nonemployeesourcerequestbody']
---

# Nonemployeesourcerequestbody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of non-employee source. | 
**Description** | **string** | Description of non-employee source. | 
**Owner** | [**Nonemployeeidnuserrequest**](nonemployeeidnuserrequest) |  | 
**ManagementWorkgroup** | Pointer to **string** | The ID for the management workgroup that contains source sub-admins | [optional] 
**Approvers** | Pointer to [**[]Nonemployeeidnuserrequest**](nonemployeeidnuserrequest) | List of approvers. | [optional] 
**AccountManagers** | Pointer to [**[]Nonemployeeidnuserrequest**](nonemployeeidnuserrequest) | List of account managers. | [optional] 

## Methods

### NewNonemployeesourcerequestbody

`func NewNonemployeesourcerequestbody(name string, description string, owner Nonemployeeidnuserrequest, ) *Nonemployeesourcerequestbody`

NewNonemployeesourcerequestbody instantiates a new Nonemployeesourcerequestbody object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonemployeesourcerequestbodyWithDefaults

`func NewNonemployeesourcerequestbodyWithDefaults() *Nonemployeesourcerequestbody`

NewNonemployeesourcerequestbodyWithDefaults instantiates a new Nonemployeesourcerequestbody object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Nonemployeesourcerequestbody) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Nonemployeesourcerequestbody) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Nonemployeesourcerequestbody) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Nonemployeesourcerequestbody) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Nonemployeesourcerequestbody) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Nonemployeesourcerequestbody) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetOwner

`func (o *Nonemployeesourcerequestbody) GetOwner() Nonemployeeidnuserrequest`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Nonemployeesourcerequestbody) GetOwnerOk() (*Nonemployeeidnuserrequest, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Nonemployeesourcerequestbody) SetOwner(v Nonemployeeidnuserrequest)`

SetOwner sets Owner field to given value.


### GetManagementWorkgroup

`func (o *Nonemployeesourcerequestbody) GetManagementWorkgroup() string`

GetManagementWorkgroup returns the ManagementWorkgroup field if non-nil, zero value otherwise.

### GetManagementWorkgroupOk

`func (o *Nonemployeesourcerequestbody) GetManagementWorkgroupOk() (*string, bool)`

GetManagementWorkgroupOk returns a tuple with the ManagementWorkgroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagementWorkgroup

`func (o *Nonemployeesourcerequestbody) SetManagementWorkgroup(v string)`

SetManagementWorkgroup sets ManagementWorkgroup field to given value.

### HasManagementWorkgroup

`func (o *Nonemployeesourcerequestbody) HasManagementWorkgroup() bool`

HasManagementWorkgroup returns a boolean if a field has been set.

### GetApprovers

`func (o *Nonemployeesourcerequestbody) GetApprovers() []Nonemployeeidnuserrequest`

GetApprovers returns the Approvers field if non-nil, zero value otherwise.

### GetApproversOk

`func (o *Nonemployeesourcerequestbody) GetApproversOk() (*[]Nonemployeeidnuserrequest, bool)`

GetApproversOk returns a tuple with the Approvers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovers

`func (o *Nonemployeesourcerequestbody) SetApprovers(v []Nonemployeeidnuserrequest)`

SetApprovers sets Approvers field to given value.

### HasApprovers

`func (o *Nonemployeesourcerequestbody) HasApprovers() bool`

HasApprovers returns a boolean if a field has been set.

### GetAccountManagers

`func (o *Nonemployeesourcerequestbody) GetAccountManagers() []Nonemployeeidnuserrequest`

GetAccountManagers returns the AccountManagers field if non-nil, zero value otherwise.

### GetAccountManagersOk

`func (o *Nonemployeesourcerequestbody) GetAccountManagersOk() (*[]Nonemployeeidnuserrequest, bool)`

GetAccountManagersOk returns a tuple with the AccountManagers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountManagers

`func (o *Nonemployeesourcerequestbody) SetAccountManagers(v []Nonemployeeidnuserrequest)`

SetAccountManagers sets AccountManagers field to given value.

### HasAccountManagers

`func (o *Nonemployeesourcerequestbody) HasAccountManagers() bool`

HasAccountManagers returns a boolean if a field has been set.


