---
id: v1-entitlementconnectionsearchhitentitlement
title: Entitlementconnectionsearchhitentitlement
pagination_label: Entitlementconnectionsearchhitentitlement
sidebar_label: Entitlementconnectionsearchhitentitlement
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementconnectionsearchhitentitlement', 'V1Entitlementconnectionsearchhitentitlement'] 
slug: /tools/sdk/go/entitlementconnections/models/entitlementconnectionsearchhitentitlement
tags: ['SDK', 'Software Development Kit', 'Entitlementconnectionsearchhitentitlement', 'V1Entitlementconnectionsearchhitentitlement']
---

# Entitlementconnectionsearchhitentitlement

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
**PrivilegeLevel** | Pointer to [**EntitlementconnectionsearchhitentitlementPrivilegeLevel**](entitlementconnectionsearchhitentitlement-privilege-level) |  | [optional] 

## Methods

### NewEntitlementconnectionsearchhitentitlement

`func NewEntitlementconnectionsearchhitentitlement() *Entitlementconnectionsearchhitentitlement`

NewEntitlementconnectionsearchhitentitlement instantiates a new Entitlementconnectionsearchhitentitlement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementconnectionsearchhitentitlementWithDefaults

`func NewEntitlementconnectionsearchhitentitlementWithDefaults() *Entitlementconnectionsearchhitentitlement`

NewEntitlementconnectionsearchhitentitlementWithDefaults instantiates a new Entitlementconnectionsearchhitentitlement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Entitlementconnectionsearchhitentitlement) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Entitlementconnectionsearchhitentitlement) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Entitlementconnectionsearchhitentitlement) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Entitlementconnectionsearchhitentitlement) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Entitlementconnectionsearchhitentitlement) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Entitlementconnectionsearchhitentitlement) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Entitlementconnectionsearchhitentitlement) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Entitlementconnectionsearchhitentitlement) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDisplayName

`func (o *Entitlementconnectionsearchhitentitlement) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Entitlementconnectionsearchhitentitlement) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Entitlementconnectionsearchhitentitlement) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Entitlementconnectionsearchhitentitlement) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *Entitlementconnectionsearchhitentitlement) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Entitlementconnectionsearchhitentitlement) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Entitlementconnectionsearchhitentitlement) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Entitlementconnectionsearchhitentitlement) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAttribute

`func (o *Entitlementconnectionsearchhitentitlement) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *Entitlementconnectionsearchhitentitlement) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *Entitlementconnectionsearchhitentitlement) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *Entitlementconnectionsearchhitentitlement) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *Entitlementconnectionsearchhitentitlement) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Entitlementconnectionsearchhitentitlement) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Entitlementconnectionsearchhitentitlement) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Entitlementconnectionsearchhitentitlement) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetSourceSchemaObjectType

`func (o *Entitlementconnectionsearchhitentitlement) GetSourceSchemaObjectType() string`

GetSourceSchemaObjectType returns the SourceSchemaObjectType field if non-nil, zero value otherwise.

### GetSourceSchemaObjectTypeOk

`func (o *Entitlementconnectionsearchhitentitlement) GetSourceSchemaObjectTypeOk() (*string, bool)`

GetSourceSchemaObjectTypeOk returns a tuple with the SourceSchemaObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceSchemaObjectType

`func (o *Entitlementconnectionsearchhitentitlement) SetSourceSchemaObjectType(v string)`

SetSourceSchemaObjectType sets SourceSchemaObjectType field to given value.

### HasSourceSchemaObjectType

`func (o *Entitlementconnectionsearchhitentitlement) HasSourceSchemaObjectType() bool`

HasSourceSchemaObjectType returns a boolean if a field has been set.

### GetPrivilegeLevel

`func (o *Entitlementconnectionsearchhitentitlement) GetPrivilegeLevel() EntitlementconnectionsearchhitentitlementPrivilegeLevel`

GetPrivilegeLevel returns the PrivilegeLevel field if non-nil, zero value otherwise.

### GetPrivilegeLevelOk

`func (o *Entitlementconnectionsearchhitentitlement) GetPrivilegeLevelOk() (*EntitlementconnectionsearchhitentitlementPrivilegeLevel, bool)`

GetPrivilegeLevelOk returns a tuple with the PrivilegeLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegeLevel

`func (o *Entitlementconnectionsearchhitentitlement) SetPrivilegeLevel(v EntitlementconnectionsearchhitentitlementPrivilegeLevel)`

SetPrivilegeLevel sets PrivilegeLevel field to given value.

### HasPrivilegeLevel

`func (o *Entitlementconnectionsearchhitentitlement) HasPrivilegeLevel() bool`

HasPrivilegeLevel returns a boolean if a field has been set.


