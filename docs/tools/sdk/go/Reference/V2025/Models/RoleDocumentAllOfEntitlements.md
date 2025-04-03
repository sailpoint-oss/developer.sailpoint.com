---
id: v2025-role-document-all-of-entitlements
title: RoleDocumentAllOfEntitlements
pagination_label: RoleDocumentAllOfEntitlements
sidebar_label: RoleDocumentAllOfEntitlements
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleDocumentAllOfEntitlements', 'V2025RoleDocumentAllOfEntitlements'] 
slug: /tools/sdk/go/v2025/models/role-document-all-of-entitlements
tags: ['SDK', 'Software Development Kit', 'RoleDocumentAllOfEntitlements', 'V2025RoleDocumentAllOfEntitlements']
---

# RoleDocumentAllOfEntitlements

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

### NewRoleDocumentAllOfEntitlements

`func NewRoleDocumentAllOfEntitlements() *RoleDocumentAllOfEntitlements`

NewRoleDocumentAllOfEntitlements instantiates a new RoleDocumentAllOfEntitlements object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleDocumentAllOfEntitlementsWithDefaults

`func NewRoleDocumentAllOfEntitlementsWithDefaults() *RoleDocumentAllOfEntitlements`

NewRoleDocumentAllOfEntitlementsWithDefaults instantiates a new RoleDocumentAllOfEntitlements object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHasPermissions

`func (o *RoleDocumentAllOfEntitlements) GetHasPermissions() bool`

GetHasPermissions returns the HasPermissions field if non-nil, zero value otherwise.

### GetHasPermissionsOk

`func (o *RoleDocumentAllOfEntitlements) GetHasPermissionsOk() (*bool, bool)`

GetHasPermissionsOk returns a tuple with the HasPermissions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPermissions

`func (o *RoleDocumentAllOfEntitlements) SetHasPermissions(v bool)`

SetHasPermissions sets HasPermissions field to given value.

### HasHasPermissions

`func (o *RoleDocumentAllOfEntitlements) HasHasPermissions() bool`

HasHasPermissions returns a boolean if a field has been set.

### GetDescription

`func (o *RoleDocumentAllOfEntitlements) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoleDocumentAllOfEntitlements) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoleDocumentAllOfEntitlements) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoleDocumentAllOfEntitlements) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *RoleDocumentAllOfEntitlements) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *RoleDocumentAllOfEntitlements) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAttribute

`func (o *RoleDocumentAllOfEntitlements) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *RoleDocumentAllOfEntitlements) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *RoleDocumentAllOfEntitlements) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *RoleDocumentAllOfEntitlements) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *RoleDocumentAllOfEntitlements) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *RoleDocumentAllOfEntitlements) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *RoleDocumentAllOfEntitlements) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *RoleDocumentAllOfEntitlements) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetSchema

`func (o *RoleDocumentAllOfEntitlements) GetSchema() string`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *RoleDocumentAllOfEntitlements) GetSchemaOk() (*string, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *RoleDocumentAllOfEntitlements) SetSchema(v string)`

SetSchema sets Schema field to given value.

### HasSchema

`func (o *RoleDocumentAllOfEntitlements) HasSchema() bool`

HasSchema returns a boolean if a field has been set.

### GetPrivileged

`func (o *RoleDocumentAllOfEntitlements) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *RoleDocumentAllOfEntitlements) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *RoleDocumentAllOfEntitlements) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.

### HasPrivileged

`func (o *RoleDocumentAllOfEntitlements) HasPrivileged() bool`

HasPrivileged returns a boolean if a field has been set.

### GetId

`func (o *RoleDocumentAllOfEntitlements) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleDocumentAllOfEntitlements) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleDocumentAllOfEntitlements) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleDocumentAllOfEntitlements) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *RoleDocumentAllOfEntitlements) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleDocumentAllOfEntitlements) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleDocumentAllOfEntitlements) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoleDocumentAllOfEntitlements) HasName() bool`

HasName returns a boolean if a field has been set.

### GetSourceSchemaObjectType

`func (o *RoleDocumentAllOfEntitlements) GetSourceSchemaObjectType() string`

GetSourceSchemaObjectType returns the SourceSchemaObjectType field if non-nil, zero value otherwise.

### GetSourceSchemaObjectTypeOk

`func (o *RoleDocumentAllOfEntitlements) GetSourceSchemaObjectTypeOk() (*string, bool)`

GetSourceSchemaObjectTypeOk returns a tuple with the SourceSchemaObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceSchemaObjectType

`func (o *RoleDocumentAllOfEntitlements) SetSourceSchemaObjectType(v string)`

SetSourceSchemaObjectType sets SourceSchemaObjectType field to given value.

### HasSourceSchemaObjectType

`func (o *RoleDocumentAllOfEntitlements) HasSourceSchemaObjectType() bool`

HasSourceSchemaObjectType returns a boolean if a field has been set.

### GetHash

`func (o *RoleDocumentAllOfEntitlements) GetHash() string`

GetHash returns the Hash field if non-nil, zero value otherwise.

### GetHashOk

`func (o *RoleDocumentAllOfEntitlements) GetHashOk() (*string, bool)`

GetHashOk returns a tuple with the Hash field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHash

`func (o *RoleDocumentAllOfEntitlements) SetHash(v string)`

SetHash sets Hash field to given value.

### HasHash

`func (o *RoleDocumentAllOfEntitlements) HasHash() bool`

HasHash returns a boolean if a field has been set.


