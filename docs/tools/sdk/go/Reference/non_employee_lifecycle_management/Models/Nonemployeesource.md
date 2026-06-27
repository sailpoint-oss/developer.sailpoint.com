---
id: v1-nonemployeesource
title: Nonemployeesource
pagination_label: Nonemployeesource
sidebar_label: Nonemployeesource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Nonemployeesource', 'V1Nonemployeesource'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/models/nonemployeesource
tags: ['SDK', 'Software Development Kit', 'Nonemployeesource', 'V1Nonemployeesource']
---

# Nonemployeesource

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

## Methods

### NewNonemployeesource

`func NewNonemployeesource() *Nonemployeesource`

NewNonemployeesource instantiates a new Nonemployeesource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonemployeesourceWithDefaults

`func NewNonemployeesourceWithDefaults() *Nonemployeesource`

NewNonemployeesourceWithDefaults instantiates a new Nonemployeesource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Nonemployeesource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Nonemployeesource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Nonemployeesource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Nonemployeesource) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSourceId

`func (o *Nonemployeesource) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Nonemployeesource) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Nonemployeesource) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Nonemployeesource) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetName

`func (o *Nonemployeesource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Nonemployeesource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Nonemployeesource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Nonemployeesource) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Nonemployeesource) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Nonemployeesource) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Nonemployeesource) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Nonemployeesource) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetApprovers

`func (o *Nonemployeesource) GetApprovers() []Nonemployeeidentityreferencewithid`

GetApprovers returns the Approvers field if non-nil, zero value otherwise.

### GetApproversOk

`func (o *Nonemployeesource) GetApproversOk() (*[]Nonemployeeidentityreferencewithid, bool)`

GetApproversOk returns a tuple with the Approvers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovers

`func (o *Nonemployeesource) SetApprovers(v []Nonemployeeidentityreferencewithid)`

SetApprovers sets Approvers field to given value.

### HasApprovers

`func (o *Nonemployeesource) HasApprovers() bool`

HasApprovers returns a boolean if a field has been set.

### GetAccountManagers

`func (o *Nonemployeesource) GetAccountManagers() []Nonemployeeidentityreferencewithid`

GetAccountManagers returns the AccountManagers field if non-nil, zero value otherwise.

### GetAccountManagersOk

`func (o *Nonemployeesource) GetAccountManagersOk() (*[]Nonemployeeidentityreferencewithid, bool)`

GetAccountManagersOk returns a tuple with the AccountManagers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountManagers

`func (o *Nonemployeesource) SetAccountManagers(v []Nonemployeeidentityreferencewithid)`

SetAccountManagers sets AccountManagers field to given value.

### HasAccountManagers

`func (o *Nonemployeesource) HasAccountManagers() bool`

HasAccountManagers returns a boolean if a field has been set.

### GetModified

`func (o *Nonemployeesource) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Nonemployeesource) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Nonemployeesource) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Nonemployeesource) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCreated

`func (o *Nonemployeesource) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Nonemployeesource) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Nonemployeesource) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Nonemployeesource) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


