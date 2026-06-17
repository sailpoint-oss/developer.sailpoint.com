---
id: v2026-entitlement-connection-search-hit
title: EntitlementConnectionSearchHit
pagination_label: EntitlementConnectionSearchHit
sidebar_label: EntitlementConnectionSearchHit
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementConnectionSearchHit', 'V2026EntitlementConnectionSearchHit'] 
slug: /tools/sdk/go/v2026/models/entitlement-connection-search-hit
tags: ['SDK', 'Software Development Kit', 'EntitlementConnectionSearchHit', 'V2026EntitlementConnectionSearchHit']
---

# EntitlementConnectionSearchHit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Connection ID as represented in search results. | [optional] 
**Identity** | Pointer to **map[string]interface{}** | Identity summary object from search index. | [optional] 
**MachineIdentity** | Pointer to **map[string]interface{}** | Machine identity summary object when available. | [optional] 
**Account** | Pointer to **map[string]interface{}** | Account summary object. | [optional] 
**Entitlement** | Pointer to [**EntitlementConnectionSearchHitEntitlement**](entitlement-connection-search-hit-entitlement) |  | [optional] 
**Source** | Pointer to **map[string]interface{}** | Source summary object. | [optional] 
**State** | Pointer to **map[string]interface{}** | Connection state object. | [optional] 
**Jit** | Pointer to **map[string]interface{}** | JIT timestamps for lifecycle events. | [optional] 
**Standalone** | Pointer to **bool** | Indicates whether the connection is marked as standalone. | [optional] [default to false]
**Type** | Pointer to **string** | Connection type classification. | [optional] 

## Methods

### NewEntitlementConnectionSearchHit

`func NewEntitlementConnectionSearchHit() *EntitlementConnectionSearchHit`

NewEntitlementConnectionSearchHit instantiates a new EntitlementConnectionSearchHit object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementConnectionSearchHitWithDefaults

`func NewEntitlementConnectionSearchHitWithDefaults() *EntitlementConnectionSearchHit`

NewEntitlementConnectionSearchHitWithDefaults instantiates a new EntitlementConnectionSearchHit object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *EntitlementConnectionSearchHit) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EntitlementConnectionSearchHit) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EntitlementConnectionSearchHit) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *EntitlementConnectionSearchHit) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdentity

`func (o *EntitlementConnectionSearchHit) GetIdentity() map[string]interface{}`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *EntitlementConnectionSearchHit) GetIdentityOk() (*map[string]interface{}, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *EntitlementConnectionSearchHit) SetIdentity(v map[string]interface{})`

SetIdentity sets Identity field to given value.

### HasIdentity

`func (o *EntitlementConnectionSearchHit) HasIdentity() bool`

HasIdentity returns a boolean if a field has been set.

### GetMachineIdentity

`func (o *EntitlementConnectionSearchHit) GetMachineIdentity() map[string]interface{}`

GetMachineIdentity returns the MachineIdentity field if non-nil, zero value otherwise.

### GetMachineIdentityOk

`func (o *EntitlementConnectionSearchHit) GetMachineIdentityOk() (*map[string]interface{}, bool)`

GetMachineIdentityOk returns a tuple with the MachineIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineIdentity

`func (o *EntitlementConnectionSearchHit) SetMachineIdentity(v map[string]interface{})`

SetMachineIdentity sets MachineIdentity field to given value.

### HasMachineIdentity

`func (o *EntitlementConnectionSearchHit) HasMachineIdentity() bool`

HasMachineIdentity returns a boolean if a field has been set.

### GetAccount

`func (o *EntitlementConnectionSearchHit) GetAccount() map[string]interface{}`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *EntitlementConnectionSearchHit) GetAccountOk() (*map[string]interface{}, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *EntitlementConnectionSearchHit) SetAccount(v map[string]interface{})`

SetAccount sets Account field to given value.

### HasAccount

`func (o *EntitlementConnectionSearchHit) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetEntitlement

`func (o *EntitlementConnectionSearchHit) GetEntitlement() EntitlementConnectionSearchHitEntitlement`

GetEntitlement returns the Entitlement field if non-nil, zero value otherwise.

### GetEntitlementOk

`func (o *EntitlementConnectionSearchHit) GetEntitlementOk() (*EntitlementConnectionSearchHitEntitlement, bool)`

GetEntitlementOk returns a tuple with the Entitlement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlement

`func (o *EntitlementConnectionSearchHit) SetEntitlement(v EntitlementConnectionSearchHitEntitlement)`

SetEntitlement sets Entitlement field to given value.

### HasEntitlement

`func (o *EntitlementConnectionSearchHit) HasEntitlement() bool`

HasEntitlement returns a boolean if a field has been set.

### GetSource

`func (o *EntitlementConnectionSearchHit) GetSource() map[string]interface{}`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *EntitlementConnectionSearchHit) GetSourceOk() (*map[string]interface{}, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *EntitlementConnectionSearchHit) SetSource(v map[string]interface{})`

SetSource sets Source field to given value.

### HasSource

`func (o *EntitlementConnectionSearchHit) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetState

`func (o *EntitlementConnectionSearchHit) GetState() map[string]interface{}`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *EntitlementConnectionSearchHit) GetStateOk() (*map[string]interface{}, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *EntitlementConnectionSearchHit) SetState(v map[string]interface{})`

SetState sets State field to given value.

### HasState

`func (o *EntitlementConnectionSearchHit) HasState() bool`

HasState returns a boolean if a field has been set.

### GetJit

`func (o *EntitlementConnectionSearchHit) GetJit() map[string]interface{}`

GetJit returns the Jit field if non-nil, zero value otherwise.

### GetJitOk

`func (o *EntitlementConnectionSearchHit) GetJitOk() (*map[string]interface{}, bool)`

GetJitOk returns a tuple with the Jit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJit

`func (o *EntitlementConnectionSearchHit) SetJit(v map[string]interface{})`

SetJit sets Jit field to given value.

### HasJit

`func (o *EntitlementConnectionSearchHit) HasJit() bool`

HasJit returns a boolean if a field has been set.

### GetStandalone

`func (o *EntitlementConnectionSearchHit) GetStandalone() bool`

GetStandalone returns the Standalone field if non-nil, zero value otherwise.

### GetStandaloneOk

`func (o *EntitlementConnectionSearchHit) GetStandaloneOk() (*bool, bool)`

GetStandaloneOk returns a tuple with the Standalone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandalone

`func (o *EntitlementConnectionSearchHit) SetStandalone(v bool)`

SetStandalone sets Standalone field to given value.

### HasStandalone

`func (o *EntitlementConnectionSearchHit) HasStandalone() bool`

HasStandalone returns a boolean if a field has been set.

### GetType

`func (o *EntitlementConnectionSearchHit) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntitlementConnectionSearchHit) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntitlementConnectionSearchHit) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EntitlementConnectionSearchHit) HasType() bool`

HasType returns a boolean if a field has been set.


