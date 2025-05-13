---
id: non-employee-source-request-body
title: NonEmployeeSourceRequestBody
pagination_label: NonEmployeeSourceRequestBody
sidebar_label: NonEmployeeSourceRequestBody
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'NonEmployeeSourceRequestBody', 'NonEmployeeSourceRequestBody'] 
slug: /tools/sdk/go/v3/models/non-employee-source-request-body
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSourceRequestBody', 'NonEmployeeSourceRequestBody']
---

# NonEmployeeSourceRequestBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of non-employee source. | 
**Description** | **string** | Description of non-employee source. | 
**Owner** | [**NonEmployeeIdnUserRequest**](non-employee-idn-user-request) |  | 
**ManagementWorkgroup** | Pointer to **string** | The ID for the management workgroup that contains source sub-admins | [optional] 
**Approvers** | Pointer to [**[]NonEmployeeIdnUserRequest**](non-employee-idn-user-request) | List of approvers. | [optional] 
**AccountManagers** | Pointer to [**[]NonEmployeeIdnUserRequest**](non-employee-idn-user-request) | List of account managers. | [optional] 

## Methods

### NewNonEmployeeSourceRequestBody

`func NewNonEmployeeSourceRequestBody(name string, description string, owner NonEmployeeIdnUserRequest, ) *NonEmployeeSourceRequestBody`

NewNonEmployeeSourceRequestBody instantiates a new NonEmployeeSourceRequestBody object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonEmployeeSourceRequestBodyWithDefaults

`func NewNonEmployeeSourceRequestBodyWithDefaults() *NonEmployeeSourceRequestBody`

NewNonEmployeeSourceRequestBodyWithDefaults instantiates a new NonEmployeeSourceRequestBody object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *NonEmployeeSourceRequestBody) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *NonEmployeeSourceRequestBody) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *NonEmployeeSourceRequestBody) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *NonEmployeeSourceRequestBody) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *NonEmployeeSourceRequestBody) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *NonEmployeeSourceRequestBody) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetOwner

`func (o *NonEmployeeSourceRequestBody) GetOwner() NonEmployeeIdnUserRequest`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *NonEmployeeSourceRequestBody) GetOwnerOk() (*NonEmployeeIdnUserRequest, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *NonEmployeeSourceRequestBody) SetOwner(v NonEmployeeIdnUserRequest)`

SetOwner sets Owner field to given value.


### GetManagementWorkgroup

`func (o *NonEmployeeSourceRequestBody) GetManagementWorkgroup() string`

GetManagementWorkgroup returns the ManagementWorkgroup field if non-nil, zero value otherwise.

### GetManagementWorkgroupOk

`func (o *NonEmployeeSourceRequestBody) GetManagementWorkgroupOk() (*string, bool)`

GetManagementWorkgroupOk returns a tuple with the ManagementWorkgroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagementWorkgroup

`func (o *NonEmployeeSourceRequestBody) SetManagementWorkgroup(v string)`

SetManagementWorkgroup sets ManagementWorkgroup field to given value.

### HasManagementWorkgroup

`func (o *NonEmployeeSourceRequestBody) HasManagementWorkgroup() bool`

HasManagementWorkgroup returns a boolean if a field has been set.

### GetApprovers

`func (o *NonEmployeeSourceRequestBody) GetApprovers() []NonEmployeeIdnUserRequest`

GetApprovers returns the Approvers field if non-nil, zero value otherwise.

### GetApproversOk

`func (o *NonEmployeeSourceRequestBody) GetApproversOk() (*[]NonEmployeeIdnUserRequest, bool)`

GetApproversOk returns a tuple with the Approvers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovers

`func (o *NonEmployeeSourceRequestBody) SetApprovers(v []NonEmployeeIdnUserRequest)`

SetApprovers sets Approvers field to given value.

### HasApprovers

`func (o *NonEmployeeSourceRequestBody) HasApprovers() bool`

HasApprovers returns a boolean if a field has been set.

### GetAccountManagers

`func (o *NonEmployeeSourceRequestBody) GetAccountManagers() []NonEmployeeIdnUserRequest`

GetAccountManagers returns the AccountManagers field if non-nil, zero value otherwise.

### GetAccountManagersOk

`func (o *NonEmployeeSourceRequestBody) GetAccountManagersOk() (*[]NonEmployeeIdnUserRequest, bool)`

GetAccountManagersOk returns a tuple with the AccountManagers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountManagers

`func (o *NonEmployeeSourceRequestBody) SetAccountManagers(v []NonEmployeeIdnUserRequest)`

SetAccountManagers sets AccountManagers field to given value.

### HasAccountManagers

`func (o *NonEmployeeSourceRequestBody) HasAccountManagers() bool`

HasAccountManagers returns a boolean if a field has been set.


