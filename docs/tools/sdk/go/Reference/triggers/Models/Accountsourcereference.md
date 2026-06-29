---
id: v1-accountsourcereference
title: Accountsourcereference
pagination_label: Accountsourcereference
sidebar_label: Accountsourcereference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountsourcereference', 'V1Accountsourcereference'] 
slug: /tools/sdk/go/triggers/models/accountsourcereference
tags: ['SDK', 'Software Development Kit', 'Accountsourcereference', 'V1Accountsourcereference']
---

# Accountsourcereference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the source. | 
**Name** | **string** | The name of the source. | 
**Alias** | **string** | The alias of the source. | 
**Owner** | [**AccountsourcereferenceOwner**](accountsourcereference-owner) |  | 
**GovernanceGroup** | [**AccountsourcereferenceGovernanceGroup**](accountsourcereference-governance-group) |  | 

## Methods

### NewAccountsourcereference

`func NewAccountsourcereference(id string, name string, alias string, owner AccountsourcereferenceOwner, governanceGroup AccountsourcereferenceGovernanceGroup, ) *Accountsourcereference`

NewAccountsourcereference instantiates a new Accountsourcereference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountsourcereferenceWithDefaults

`func NewAccountsourcereferenceWithDefaults() *Accountsourcereference`

NewAccountsourcereferenceWithDefaults instantiates a new Accountsourcereference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Accountsourcereference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accountsourcereference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accountsourcereference) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Accountsourcereference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Accountsourcereference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Accountsourcereference) SetName(v string)`

SetName sets Name field to given value.


### GetAlias

`func (o *Accountsourcereference) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *Accountsourcereference) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *Accountsourcereference) SetAlias(v string)`

SetAlias sets Alias field to given value.


### GetOwner

`func (o *Accountsourcereference) GetOwner() AccountsourcereferenceOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Accountsourcereference) GetOwnerOk() (*AccountsourcereferenceOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Accountsourcereference) SetOwner(v AccountsourcereferenceOwner)`

SetOwner sets Owner field to given value.


### GetGovernanceGroup

`func (o *Accountsourcereference) GetGovernanceGroup() AccountsourcereferenceGovernanceGroup`

GetGovernanceGroup returns the GovernanceGroup field if non-nil, zero value otherwise.

### GetGovernanceGroupOk

`func (o *Accountsourcereference) GetGovernanceGroupOk() (*AccountsourcereferenceGovernanceGroup, bool)`

GetGovernanceGroupOk returns a tuple with the GovernanceGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGovernanceGroup

`func (o *Accountsourcereference) SetGovernanceGroup(v AccountsourcereferenceGovernanceGroup)`

SetGovernanceGroup sets GovernanceGroup field to given value.



