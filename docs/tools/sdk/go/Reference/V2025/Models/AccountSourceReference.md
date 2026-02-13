---
id: v2025-account-source-reference
title: AccountSourceReference
pagination_label: AccountSourceReference
sidebar_label: AccountSourceReference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountSourceReference', 'V2025AccountSourceReference'] 
slug: /tools/sdk/go/v2025/models/account-source-reference
tags: ['SDK', 'Software Development Kit', 'AccountSourceReference', 'V2025AccountSourceReference']
---

# AccountSourceReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the source. | 
**Name** | **string** | The name of the source. | 
**Alias** | **string** | The alias of the source. | 
**Owner** | [**AccountSourceReferenceOwner**](account-source-reference-owner) |  | 
**GovernanceGroup** | [**AccountSourceReferenceGovernanceGroup**](account-source-reference-governance-group) |  | 

## Methods

### NewAccountSourceReference

`func NewAccountSourceReference(id string, name string, alias string, owner AccountSourceReferenceOwner, governanceGroup AccountSourceReferenceGovernanceGroup, ) *AccountSourceReference`

NewAccountSourceReference instantiates a new AccountSourceReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountSourceReferenceWithDefaults

`func NewAccountSourceReferenceWithDefaults() *AccountSourceReference`

NewAccountSourceReferenceWithDefaults instantiates a new AccountSourceReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccountSourceReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountSourceReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountSourceReference) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccountSourceReference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountSourceReference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountSourceReference) SetName(v string)`

SetName sets Name field to given value.


### GetAlias

`func (o *AccountSourceReference) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *AccountSourceReference) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *AccountSourceReference) SetAlias(v string)`

SetAlias sets Alias field to given value.


### GetOwner

`func (o *AccountSourceReference) GetOwner() AccountSourceReferenceOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *AccountSourceReference) GetOwnerOk() (*AccountSourceReferenceOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *AccountSourceReference) SetOwner(v AccountSourceReferenceOwner)`

SetOwner sets Owner field to given value.


### GetGovernanceGroup

`func (o *AccountSourceReference) GetGovernanceGroup() AccountSourceReferenceGovernanceGroup`

GetGovernanceGroup returns the GovernanceGroup field if non-nil, zero value otherwise.

### GetGovernanceGroupOk

`func (o *AccountSourceReference) GetGovernanceGroupOk() (*AccountSourceReferenceGovernanceGroup, bool)`

GetGovernanceGroupOk returns a tuple with the GovernanceGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGovernanceGroup

`func (o *AccountSourceReference) SetGovernanceGroup(v AccountSourceReferenceGovernanceGroup)`

SetGovernanceGroup sets GovernanceGroup field to given value.



