---
id: v1-machineidentityuserentitlementresponse
title: Machineidentityuserentitlementresponse
pagination_label: Machineidentityuserentitlementresponse
sidebar_label: Machineidentityuserentitlementresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Machineidentityuserentitlementresponse', 'V1Machineidentityuserentitlementresponse'] 
slug: /tools/sdk/go/machineidentities/models/machineidentityuserentitlementresponse
tags: ['SDK', 'Software Development Kit', 'Machineidentityuserentitlementresponse', 'V1Machineidentityuserentitlementresponse']
---

# Machineidentityuserentitlementresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] 
**MachineIdentityId** | Pointer to **string** | System-generated unique ID of the Machine Identity | [optional] 
**Source** | Pointer to [**MachineidentityuserentitlementresponseSource**](machineidentityuserentitlementresponse-source) |  | [optional] 
**Entitlement** | Pointer to [**MachineidentityuserentitlementresponseEntitlement**](machineidentityuserentitlementresponse-entitlement) |  | [optional] 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 

## Methods

### NewMachineidentityuserentitlementresponse

`func NewMachineidentityuserentitlementresponse() *Machineidentityuserentitlementresponse`

NewMachineidentityuserentitlementresponse instantiates a new Machineidentityuserentitlementresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineidentityuserentitlementresponseWithDefaults

`func NewMachineidentityuserentitlementresponseWithDefaults() *Machineidentityuserentitlementresponse`

NewMachineidentityuserentitlementresponseWithDefaults instantiates a new Machineidentityuserentitlementresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Machineidentityuserentitlementresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Machineidentityuserentitlementresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Machineidentityuserentitlementresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Machineidentityuserentitlementresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetMachineIdentityId

`func (o *Machineidentityuserentitlementresponse) GetMachineIdentityId() string`

GetMachineIdentityId returns the MachineIdentityId field if non-nil, zero value otherwise.

### GetMachineIdentityIdOk

`func (o *Machineidentityuserentitlementresponse) GetMachineIdentityIdOk() (*string, bool)`

GetMachineIdentityIdOk returns a tuple with the MachineIdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineIdentityId

`func (o *Machineidentityuserentitlementresponse) SetMachineIdentityId(v string)`

SetMachineIdentityId sets MachineIdentityId field to given value.

### HasMachineIdentityId

`func (o *Machineidentityuserentitlementresponse) HasMachineIdentityId() bool`

HasMachineIdentityId returns a boolean if a field has been set.

### GetSource

`func (o *Machineidentityuserentitlementresponse) GetSource() MachineidentityuserentitlementresponseSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Machineidentityuserentitlementresponse) GetSourceOk() (*MachineidentityuserentitlementresponseSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Machineidentityuserentitlementresponse) SetSource(v MachineidentityuserentitlementresponseSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *Machineidentityuserentitlementresponse) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetEntitlement

`func (o *Machineidentityuserentitlementresponse) GetEntitlement() MachineidentityuserentitlementresponseEntitlement`

GetEntitlement returns the Entitlement field if non-nil, zero value otherwise.

### GetEntitlementOk

`func (o *Machineidentityuserentitlementresponse) GetEntitlementOk() (*MachineidentityuserentitlementresponseEntitlement, bool)`

GetEntitlementOk returns a tuple with the Entitlement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlement

`func (o *Machineidentityuserentitlementresponse) SetEntitlement(v MachineidentityuserentitlementresponseEntitlement)`

SetEntitlement sets Entitlement field to given value.

### HasEntitlement

`func (o *Machineidentityuserentitlementresponse) HasEntitlement() bool`

HasEntitlement returns a boolean if a field has been set.

### GetCreated

`func (o *Machineidentityuserentitlementresponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Machineidentityuserentitlementresponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Machineidentityuserentitlementresponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Machineidentityuserentitlementresponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


