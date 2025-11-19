---
id: v2025-machine-identity-user-entitlement-response
title: MachineIdentityUserEntitlementResponse
pagination_label: MachineIdentityUserEntitlementResponse
sidebar_label: MachineIdentityUserEntitlementResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentityUserEntitlementResponse', 'V2025MachineIdentityUserEntitlementResponse'] 
slug: /tools/sdk/go/v2025/models/machine-identity-user-entitlement-response
tags: ['SDK', 'Software Development Kit', 'MachineIdentityUserEntitlementResponse', 'V2025MachineIdentityUserEntitlementResponse']
---

# MachineIdentityUserEntitlementResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] 
**MachineIdentityId** | Pointer to **string** | System-generated unique ID of the Machine Identity | [optional] 
**Source** | Pointer to [**MachineIdentityUserEntitlementResponseSource**](machine-identity-user-entitlement-response-source) |  | [optional] 
**Entitlement** | Pointer to [**MachineIdentityUserEntitlementResponseEntitlement**](machine-identity-user-entitlement-response-entitlement) |  | [optional] 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 

## Methods

### NewMachineIdentityUserEntitlementResponse

`func NewMachineIdentityUserEntitlementResponse() *MachineIdentityUserEntitlementResponse`

NewMachineIdentityUserEntitlementResponse instantiates a new MachineIdentityUserEntitlementResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityUserEntitlementResponseWithDefaults

`func NewMachineIdentityUserEntitlementResponseWithDefaults() *MachineIdentityUserEntitlementResponse`

NewMachineIdentityUserEntitlementResponseWithDefaults instantiates a new MachineIdentityUserEntitlementResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MachineIdentityUserEntitlementResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineIdentityUserEntitlementResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineIdentityUserEntitlementResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MachineIdentityUserEntitlementResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetMachineIdentityId

`func (o *MachineIdentityUserEntitlementResponse) GetMachineIdentityId() string`

GetMachineIdentityId returns the MachineIdentityId field if non-nil, zero value otherwise.

### GetMachineIdentityIdOk

`func (o *MachineIdentityUserEntitlementResponse) GetMachineIdentityIdOk() (*string, bool)`

GetMachineIdentityIdOk returns a tuple with the MachineIdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineIdentityId

`func (o *MachineIdentityUserEntitlementResponse) SetMachineIdentityId(v string)`

SetMachineIdentityId sets MachineIdentityId field to given value.

### HasMachineIdentityId

`func (o *MachineIdentityUserEntitlementResponse) HasMachineIdentityId() bool`

HasMachineIdentityId returns a boolean if a field has been set.

### GetSource

`func (o *MachineIdentityUserEntitlementResponse) GetSource() MachineIdentityUserEntitlementResponseSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *MachineIdentityUserEntitlementResponse) GetSourceOk() (*MachineIdentityUserEntitlementResponseSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *MachineIdentityUserEntitlementResponse) SetSource(v MachineIdentityUserEntitlementResponseSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *MachineIdentityUserEntitlementResponse) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetEntitlement

`func (o *MachineIdentityUserEntitlementResponse) GetEntitlement() MachineIdentityUserEntitlementResponseEntitlement`

GetEntitlement returns the Entitlement field if non-nil, zero value otherwise.

### GetEntitlementOk

`func (o *MachineIdentityUserEntitlementResponse) GetEntitlementOk() (*MachineIdentityUserEntitlementResponseEntitlement, bool)`

GetEntitlementOk returns a tuple with the Entitlement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlement

`func (o *MachineIdentityUserEntitlementResponse) SetEntitlement(v MachineIdentityUserEntitlementResponseEntitlement)`

SetEntitlement sets Entitlement field to given value.

### HasEntitlement

`func (o *MachineIdentityUserEntitlementResponse) HasEntitlement() bool`

HasEntitlement returns a boolean if a field has been set.

### GetCreated

`func (o *MachineIdentityUserEntitlementResponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *MachineIdentityUserEntitlementResponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *MachineIdentityUserEntitlementResponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *MachineIdentityUserEntitlementResponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


