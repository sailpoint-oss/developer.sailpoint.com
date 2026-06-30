---
id: v1-roleminingsessiondraftroledto
title: Roleminingsessiondraftroledto
pagination_label: Roleminingsessiondraftroledto
sidebar_label: Roleminingsessiondraftroledto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleminingsessiondraftroledto', 'V1Roleminingsessiondraftroledto'] 
slug: /tools/sdk/go/iairolemining/models/roleminingsessiondraftroledto
tags: ['SDK', 'Software Development Kit', 'Roleminingsessiondraftroledto', 'V1Roleminingsessiondraftroledto']
---

# Roleminingsessiondraftroledto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the draft role | [optional] 
**Description** | Pointer to **string** | Draft role description | [optional] 
**IdentityIds** | Pointer to **[]string** | The list of identities for this role mining session. | [optional] 
**EntitlementIds** | Pointer to **[]string** | The list of entitlement ids for this role mining session. | [optional] 
**ExcludedEntitlements** | Pointer to **[]string** | The list of excluded entitlement ids. | [optional] 
**Modified** | Pointer to **SailPointTime** | Last modified date | [optional] 
**Type** | Pointer to [**Roleminingroletype**](roleminingroletype) |  | [optional] 
**Id** | Pointer to **string** | Id of the potential draft role | [optional] 
**CreatedDate** | Pointer to **SailPointTime** | The date-time when this potential draft role was created. | [optional] 
**ModifiedDate** | Pointer to **SailPointTime** | The date-time when this potential draft role was modified. | [optional] 

## Methods

### NewRoleminingsessiondraftroledto

`func NewRoleminingsessiondraftroledto() *Roleminingsessiondraftroledto`

NewRoleminingsessiondraftroledto instantiates a new Roleminingsessiondraftroledto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleminingsessiondraftroledtoWithDefaults

`func NewRoleminingsessiondraftroledtoWithDefaults() *Roleminingsessiondraftroledto`

NewRoleminingsessiondraftroledtoWithDefaults instantiates a new Roleminingsessiondraftroledto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Roleminingsessiondraftroledto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Roleminingsessiondraftroledto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Roleminingsessiondraftroledto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Roleminingsessiondraftroledto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Roleminingsessiondraftroledto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Roleminingsessiondraftroledto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Roleminingsessiondraftroledto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Roleminingsessiondraftroledto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetIdentityIds

`func (o *Roleminingsessiondraftroledto) GetIdentityIds() []string`

GetIdentityIds returns the IdentityIds field if non-nil, zero value otherwise.

### GetIdentityIdsOk

`func (o *Roleminingsessiondraftroledto) GetIdentityIdsOk() (*[]string, bool)`

GetIdentityIdsOk returns a tuple with the IdentityIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityIds

`func (o *Roleminingsessiondraftroledto) SetIdentityIds(v []string)`

SetIdentityIds sets IdentityIds field to given value.

### HasIdentityIds

`func (o *Roleminingsessiondraftroledto) HasIdentityIds() bool`

HasIdentityIds returns a boolean if a field has been set.

### GetEntitlementIds

`func (o *Roleminingsessiondraftroledto) GetEntitlementIds() []string`

GetEntitlementIds returns the EntitlementIds field if non-nil, zero value otherwise.

### GetEntitlementIdsOk

`func (o *Roleminingsessiondraftroledto) GetEntitlementIdsOk() (*[]string, bool)`

GetEntitlementIdsOk returns a tuple with the EntitlementIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementIds

`func (o *Roleminingsessiondraftroledto) SetEntitlementIds(v []string)`

SetEntitlementIds sets EntitlementIds field to given value.

### HasEntitlementIds

`func (o *Roleminingsessiondraftroledto) HasEntitlementIds() bool`

HasEntitlementIds returns a boolean if a field has been set.

### GetExcludedEntitlements

`func (o *Roleminingsessiondraftroledto) GetExcludedEntitlements() []string`

GetExcludedEntitlements returns the ExcludedEntitlements field if non-nil, zero value otherwise.

### GetExcludedEntitlementsOk

`func (o *Roleminingsessiondraftroledto) GetExcludedEntitlementsOk() (*[]string, bool)`

GetExcludedEntitlementsOk returns a tuple with the ExcludedEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludedEntitlements

`func (o *Roleminingsessiondraftroledto) SetExcludedEntitlements(v []string)`

SetExcludedEntitlements sets ExcludedEntitlements field to given value.

### HasExcludedEntitlements

`func (o *Roleminingsessiondraftroledto) HasExcludedEntitlements() bool`

HasExcludedEntitlements returns a boolean if a field has been set.

### GetModified

`func (o *Roleminingsessiondraftroledto) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Roleminingsessiondraftroledto) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Roleminingsessiondraftroledto) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Roleminingsessiondraftroledto) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetType

`func (o *Roleminingsessiondraftroledto) GetType() Roleminingroletype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Roleminingsessiondraftroledto) GetTypeOk() (*Roleminingroletype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Roleminingsessiondraftroledto) SetType(v Roleminingroletype)`

SetType sets Type field to given value.

### HasType

`func (o *Roleminingsessiondraftroledto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Roleminingsessiondraftroledto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Roleminingsessiondraftroledto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Roleminingsessiondraftroledto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Roleminingsessiondraftroledto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCreatedDate

`func (o *Roleminingsessiondraftroledto) GetCreatedDate() SailPointTime`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *Roleminingsessiondraftroledto) GetCreatedDateOk() (*SailPointTime, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *Roleminingsessiondraftroledto) SetCreatedDate(v SailPointTime)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *Roleminingsessiondraftroledto) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.

### GetModifiedDate

`func (o *Roleminingsessiondraftroledto) GetModifiedDate() SailPointTime`

GetModifiedDate returns the ModifiedDate field if non-nil, zero value otherwise.

### GetModifiedDateOk

`func (o *Roleminingsessiondraftroledto) GetModifiedDateOk() (*SailPointTime, bool)`

GetModifiedDateOk returns a tuple with the ModifiedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedDate

`func (o *Roleminingsessiondraftroledto) SetModifiedDate(v SailPointTime)`

SetModifiedDate sets ModifiedDate field to given value.

### HasModifiedDate

`func (o *Roleminingsessiondraftroledto) HasModifiedDate() bool`

HasModifiedDate returns a boolean if a field has been set.


