---
id: role-document-all-of-entitlements1
title: RoleDocumentAllOfEntitlements1
pagination_label: RoleDocumentAllOfEntitlements1
sidebar_label: RoleDocumentAllOfEntitlements1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleDocumentAllOfEntitlements1', 'RoleDocumentAllOfEntitlements1'] 
slug: /tools/sdk/go//models/role-document-all-of-entitlements1
tags: ['SDK', 'Software Development Kit', 'RoleDocumentAllOfEntitlements1', 'RoleDocumentAllOfEntitlements1']
---

# RoleDocumentAllOfEntitlements1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HasPermissions** | Pointer to **bool** | Indicates whether the entitlement has permissions. | [optional] [default to false]
**Description** | Pointer to **NullableString** | Entitlement's description. | [optional] 
**Attribute** | Pointer to **string** | Entitlement attribute's name. | [optional] 
**Value** | Pointer to **string** | Entitlement's value. | [optional] 
**Schema** | Pointer to **string** | Entitlement's schema. | [optional] 
**Privileged** | Pointer to **bool** | Indicates whether the entitlement is privileged. | [optional] [default to false]
**Id** | Pointer to **string** | Entitlement's ID. | [optional] 
**Name** | Pointer to **string** | Entitlement's name. | [optional] 
**SourceSchemaObjectType** | Pointer to **string** | Schema objectType. | [optional] 
**Hash** | Pointer to **string** | Read-only calculated hash value of an entitlement. | [optional] 

## Methods

### NewRoleDocumentAllOfEntitlements1

`func NewRoleDocumentAllOfEntitlements1() *RoleDocumentAllOfEntitlements1`

NewRoleDocumentAllOfEntitlements1 instantiates a new RoleDocumentAllOfEntitlements1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleDocumentAllOfEntitlements1WithDefaults

`func NewRoleDocumentAllOfEntitlements1WithDefaults() *RoleDocumentAllOfEntitlements1`

NewRoleDocumentAllOfEntitlements1WithDefaults instantiates a new RoleDocumentAllOfEntitlements1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHasPermissions

`func (o *RoleDocumentAllOfEntitlements1) GetHasPermissions() bool`

GetHasPermissions returns the HasPermissions field if non-nil, zero value otherwise.

### GetHasPermissionsOk

`func (o *RoleDocumentAllOfEntitlements1) GetHasPermissionsOk() (*bool, bool)`

GetHasPermissionsOk returns a tuple with the HasPermissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPermissions

`func (o *RoleDocumentAllOfEntitlements1) SetHasPermissions(v bool)`

SetHasPermissions sets HasPermissions field to given value.

### HasHasPermissions

`func (o *RoleDocumentAllOfEntitlements1) HasHasPermissions() bool`

HasHasPermissions returns a boolean if a field has been set.

### GetDescription

`func (o *RoleDocumentAllOfEntitlements1) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoleDocumentAllOfEntitlements1) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoleDocumentAllOfEntitlements1) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoleDocumentAllOfEntitlements1) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *RoleDocumentAllOfEntitlements1) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *RoleDocumentAllOfEntitlements1) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAttribute

`func (o *RoleDocumentAllOfEntitlements1) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *RoleDocumentAllOfEntitlements1) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *RoleDocumentAllOfEntitlements1) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *RoleDocumentAllOfEntitlements1) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *RoleDocumentAllOfEntitlements1) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *RoleDocumentAllOfEntitlements1) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *RoleDocumentAllOfEntitlements1) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *RoleDocumentAllOfEntitlements1) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetSchema

`func (o *RoleDocumentAllOfEntitlements1) GetSchema() string`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *RoleDocumentAllOfEntitlements1) GetSchemaOk() (*string, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *RoleDocumentAllOfEntitlements1) SetSchema(v string)`

SetSchema sets Schema field to given value.

### HasSchema

`func (o *RoleDocumentAllOfEntitlements1) HasSchema() bool`

HasSchema returns a boolean if a field has been set.

### GetPrivileged

`func (o *RoleDocumentAllOfEntitlements1) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *RoleDocumentAllOfEntitlements1) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *RoleDocumentAllOfEntitlements1) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.

### HasPrivileged

`func (o *RoleDocumentAllOfEntitlements1) HasPrivileged() bool`

HasPrivileged returns a boolean if a field has been set.

### GetId

`func (o *RoleDocumentAllOfEntitlements1) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleDocumentAllOfEntitlements1) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleDocumentAllOfEntitlements1) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleDocumentAllOfEntitlements1) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *RoleDocumentAllOfEntitlements1) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleDocumentAllOfEntitlements1) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleDocumentAllOfEntitlements1) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoleDocumentAllOfEntitlements1) HasName() bool`

HasName returns a boolean if a field has been set.

### GetSourceSchemaObjectType

`func (o *RoleDocumentAllOfEntitlements1) GetSourceSchemaObjectType() string`

GetSourceSchemaObjectType returns the SourceSchemaObjectType field if non-nil, zero value otherwise.

### GetSourceSchemaObjectTypeOk

`func (o *RoleDocumentAllOfEntitlements1) GetSourceSchemaObjectTypeOk() (*string, bool)`

GetSourceSchemaObjectTypeOk returns a tuple with the SourceSchemaObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceSchemaObjectType

`func (o *RoleDocumentAllOfEntitlements1) SetSourceSchemaObjectType(v string)`

SetSourceSchemaObjectType sets SourceSchemaObjectType field to given value.

### HasSourceSchemaObjectType

`func (o *RoleDocumentAllOfEntitlements1) HasSourceSchemaObjectType() bool`

HasSourceSchemaObjectType returns a boolean if a field has been set.

### GetHash

`func (o *RoleDocumentAllOfEntitlements1) GetHash() string`

GetHash returns the Hash field if non-nil, zero value otherwise.

### GetHashOk

`func (o *RoleDocumentAllOfEntitlements1) GetHashOk() (*string, bool)`

GetHashOk returns a tuple with the Hash field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHash

`func (o *RoleDocumentAllOfEntitlements1) SetHash(v string)`

SetHash sets Hash field to given value.

### HasHash

`func (o *RoleDocumentAllOfEntitlements1) HasHash() bool`

HasHash returns a boolean if a field has been set.


