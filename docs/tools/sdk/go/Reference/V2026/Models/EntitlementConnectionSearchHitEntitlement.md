---
id: v2026-entitlement-connection-search-hit-entitlement
title: EntitlementConnectionSearchHitEntitlement
pagination_label: EntitlementConnectionSearchHitEntitlement
sidebar_label: EntitlementConnectionSearchHitEntitlement
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementConnectionSearchHitEntitlement', 'V2026EntitlementConnectionSearchHitEntitlement'] 
slug: /tools/sdk/go/v2026/models/entitlement-connection-search-hit-entitlement
tags: ['SDK', 'Software Development Kit', 'EntitlementConnectionSearchHitEntitlement', 'V2026EntitlementConnectionSearchHitEntitlement']
---

# EntitlementConnectionSearchHitEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Entitlement identifier. | [optional] 
**Name** | Pointer to **string** | Entitlement name. | [optional] 
**DisplayName** | Pointer to **string** | Human-readable entitlement label. | [optional] 
**Description** | Pointer to **string** | Entitlement description. | [optional] 
**Attribute** | Pointer to **string** | Source attribute carrying entitlement values. | [optional] 
**Value** | Pointer to **string** | Source entitlement value. | [optional] 
**SourceSchemaObjectType** | Pointer to **string** | Source schema object type for the entitlement. | [optional] 
**PrivilegeLevel** | Pointer to [**EntitlementConnectionSearchHitEntitlementPrivilegeLevel**](entitlement-connection-search-hit-entitlement-privilege-level) |  | [optional] 

## Methods

### NewEntitlementConnectionSearchHitEntitlement

`func NewEntitlementConnectionSearchHitEntitlement() *EntitlementConnectionSearchHitEntitlement`

NewEntitlementConnectionSearchHitEntitlement instantiates a new EntitlementConnectionSearchHitEntitlement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementConnectionSearchHitEntitlementWithDefaults

`func NewEntitlementConnectionSearchHitEntitlementWithDefaults() *EntitlementConnectionSearchHitEntitlement`

NewEntitlementConnectionSearchHitEntitlementWithDefaults instantiates a new EntitlementConnectionSearchHitEntitlement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *EntitlementConnectionSearchHitEntitlement) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EntitlementConnectionSearchHitEntitlement) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EntitlementConnectionSearchHitEntitlement) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *EntitlementConnectionSearchHitEntitlement) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *EntitlementConnectionSearchHitEntitlement) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntitlementConnectionSearchHitEntitlement) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntitlementConnectionSearchHitEntitlement) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EntitlementConnectionSearchHitEntitlement) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDisplayName

`func (o *EntitlementConnectionSearchHitEntitlement) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *EntitlementConnectionSearchHitEntitlement) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *EntitlementConnectionSearchHitEntitlement) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *EntitlementConnectionSearchHitEntitlement) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *EntitlementConnectionSearchHitEntitlement) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *EntitlementConnectionSearchHitEntitlement) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *EntitlementConnectionSearchHitEntitlement) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *EntitlementConnectionSearchHitEntitlement) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAttribute

`func (o *EntitlementConnectionSearchHitEntitlement) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *EntitlementConnectionSearchHitEntitlement) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *EntitlementConnectionSearchHitEntitlement) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *EntitlementConnectionSearchHitEntitlement) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *EntitlementConnectionSearchHitEntitlement) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *EntitlementConnectionSearchHitEntitlement) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *EntitlementConnectionSearchHitEntitlement) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *EntitlementConnectionSearchHitEntitlement) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetSourceSchemaObjectType

`func (o *EntitlementConnectionSearchHitEntitlement) GetSourceSchemaObjectType() string`

GetSourceSchemaObjectType returns the SourceSchemaObjectType field if non-nil, zero value otherwise.

### GetSourceSchemaObjectTypeOk

`func (o *EntitlementConnectionSearchHitEntitlement) GetSourceSchemaObjectTypeOk() (*string, bool)`

GetSourceSchemaObjectTypeOk returns a tuple with the SourceSchemaObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceSchemaObjectType

`func (o *EntitlementConnectionSearchHitEntitlement) SetSourceSchemaObjectType(v string)`

SetSourceSchemaObjectType sets SourceSchemaObjectType field to given value.

### HasSourceSchemaObjectType

`func (o *EntitlementConnectionSearchHitEntitlement) HasSourceSchemaObjectType() bool`

HasSourceSchemaObjectType returns a boolean if a field has been set.

### GetPrivilegeLevel

`func (o *EntitlementConnectionSearchHitEntitlement) GetPrivilegeLevel() EntitlementConnectionSearchHitEntitlementPrivilegeLevel`

GetPrivilegeLevel returns the PrivilegeLevel field if non-nil, zero value otherwise.

### GetPrivilegeLevelOk

`func (o *EntitlementConnectionSearchHitEntitlement) GetPrivilegeLevelOk() (*EntitlementConnectionSearchHitEntitlementPrivilegeLevel, bool)`

GetPrivilegeLevelOk returns a tuple with the PrivilegeLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegeLevel

`func (o *EntitlementConnectionSearchHitEntitlement) SetPrivilegeLevel(v EntitlementConnectionSearchHitEntitlementPrivilegeLevel)`

SetPrivilegeLevel sets PrivilegeLevel field to given value.

### HasPrivilegeLevel

`func (o *EntitlementConnectionSearchHitEntitlement) HasPrivilegeLevel() bool`

HasPrivilegeLevel returns a boolean if a field has been set.


