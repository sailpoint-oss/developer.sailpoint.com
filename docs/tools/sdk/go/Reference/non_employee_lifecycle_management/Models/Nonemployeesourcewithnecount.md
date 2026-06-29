---
id: v1-nonemployeesourcewithnecount
title: Nonemployeesourcewithnecount
pagination_label: Nonemployeesourcewithnecount
sidebar_label: Nonemployeesourcewithnecount
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Nonemployeesourcewithnecount', 'V1Nonemployeesourcewithnecount'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/models/nonemployeesourcewithnecount
tags: ['SDK', 'Software Development Kit', 'Nonemployeesourcewithnecount', 'V1Nonemployeesourcewithnecount']
---

# Nonemployeesourcewithnecount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Non-Employee source id. | [optional] 
**SourceId** | Pointer to **string** | Source Id associated with this non-employee source. | [optional] 
**Name** | Pointer to **string** | Source name associated with this non-employee source. | [optional] 
**Description** | Pointer to **string** | Source description associated with this non-employee source. | [optional] 
**Approvers** | Pointer to [**[]Nonemployeeidentityreferencewithid**](nonemployeeidentityreferencewithid) | List of approvers | [optional] 
**AccountManagers** | Pointer to [**[]Nonemployeeidentityreferencewithid**](nonemployeeidentityreferencewithid) | List of account managers | [optional] 
**Modified** | Pointer to **SailPointTime** | When the request was last modified. | [optional] 
**Created** | Pointer to **SailPointTime** | When the request was created. | [optional] 
**NonEmployeeCount** | Pointer to **NullableInt32** | Number of non-employee records associated with this source. This value is 'NULL' by default. To get the non-employee count, you must set the `non-employee-count` flag in your request to 'true'. | [optional] 

## Methods

### NewNonemployeesourcewithnecount

`func NewNonemployeesourcewithnecount() *Nonemployeesourcewithnecount`

NewNonemployeesourcewithnecount instantiates a new Nonemployeesourcewithnecount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonemployeesourcewithnecountWithDefaults

`func NewNonemployeesourcewithnecountWithDefaults() *Nonemployeesourcewithnecount`

NewNonemployeesourcewithnecountWithDefaults instantiates a new Nonemployeesourcewithnecount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Nonemployeesourcewithnecount) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Nonemployeesourcewithnecount) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Nonemployeesourcewithnecount) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Nonemployeesourcewithnecount) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSourceId

`func (o *Nonemployeesourcewithnecount) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Nonemployeesourcewithnecount) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Nonemployeesourcewithnecount) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Nonemployeesourcewithnecount) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetName

`func (o *Nonemployeesourcewithnecount) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Nonemployeesourcewithnecount) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Nonemployeesourcewithnecount) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Nonemployeesourcewithnecount) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Nonemployeesourcewithnecount) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Nonemployeesourcewithnecount) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Nonemployeesourcewithnecount) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Nonemployeesourcewithnecount) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetApprovers

`func (o *Nonemployeesourcewithnecount) GetApprovers() []Nonemployeeidentityreferencewithid`

GetApprovers returns the Approvers field if non-nil, zero value otherwise.

### GetApproversOk

`func (o *Nonemployeesourcewithnecount) GetApproversOk() (*[]Nonemployeeidentityreferencewithid, bool)`

GetApproversOk returns a tuple with the Approvers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovers

`func (o *Nonemployeesourcewithnecount) SetApprovers(v []Nonemployeeidentityreferencewithid)`

SetApprovers sets Approvers field to given value.

### HasApprovers

`func (o *Nonemployeesourcewithnecount) HasApprovers() bool`

HasApprovers returns a boolean if a field has been set.

### GetAccountManagers

`func (o *Nonemployeesourcewithnecount) GetAccountManagers() []Nonemployeeidentityreferencewithid`

GetAccountManagers returns the AccountManagers field if non-nil, zero value otherwise.

### GetAccountManagersOk

`func (o *Nonemployeesourcewithnecount) GetAccountManagersOk() (*[]Nonemployeeidentityreferencewithid, bool)`

GetAccountManagersOk returns a tuple with the AccountManagers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountManagers

`func (o *Nonemployeesourcewithnecount) SetAccountManagers(v []Nonemployeeidentityreferencewithid)`

SetAccountManagers sets AccountManagers field to given value.

### HasAccountManagers

`func (o *Nonemployeesourcewithnecount) HasAccountManagers() bool`

HasAccountManagers returns a boolean if a field has been set.

### GetModified

`func (o *Nonemployeesourcewithnecount) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Nonemployeesourcewithnecount) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Nonemployeesourcewithnecount) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Nonemployeesourcewithnecount) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCreated

`func (o *Nonemployeesourcewithnecount) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Nonemployeesourcewithnecount) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Nonemployeesourcewithnecount) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Nonemployeesourcewithnecount) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetNonEmployeeCount

`func (o *Nonemployeesourcewithnecount) GetNonEmployeeCount() int32`

GetNonEmployeeCount returns the NonEmployeeCount field if non-nil, zero value otherwise.

### GetNonEmployeeCountOk

`func (o *Nonemployeesourcewithnecount) GetNonEmployeeCountOk() (*int32, bool)`

GetNonEmployeeCountOk returns a tuple with the NonEmployeeCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonEmployeeCount

`func (o *Nonemployeesourcewithnecount) SetNonEmployeeCount(v int32)`

SetNonEmployeeCount sets NonEmployeeCount field to given value.

### HasNonEmployeeCount

`func (o *Nonemployeesourcewithnecount) HasNonEmployeeCount() bool`

HasNonEmployeeCount returns a boolean if a field has been set.

### SetNonEmployeeCountNil

`func (o *Nonemployeesourcewithnecount) SetNonEmployeeCountNil(b bool)`

 SetNonEmployeeCountNil sets the value for NonEmployeeCount to be an explicit nil

### UnsetNonEmployeeCount
`func (o *Nonemployeesourcewithnecount) UnsetNonEmployeeCount()`

UnsetNonEmployeeCount ensures that no value is present for NonEmployeeCount, not even an explicit nil

