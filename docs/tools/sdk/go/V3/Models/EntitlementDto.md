---
id: entitlement-dto
title: EntitlementDto
pagination_label: EntitlementDto
sidebar_label: EntitlementDto
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'EntitlementDto'] 
slug: /tools/sdk/go/v3/models/entitlement-dto
tags: ['SDK', 'Software Development Kit', 'EntitlementDto']
---

# EntitlementDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** |  **string** | Name of the Object | 
**Created** |  Pointer to **time.Time** | Creation date of the Object | [optional] [readonly] 
**Modified** |  Pointer to **time.Time** | Last modification date of the Object | [optional] [readonly] 
**Attribute** |  Pointer to **string** | Name of the entitlement attribute | [optional] 
**Value** |  Pointer to **string** | Raw value of the entitlement | [optional] 
**Description** |  Pointer to **string** | Entitlment description | [optional] 
**Attributes** |  Pointer to **map[string]interface{}** | Entitlement attributes | [optional] 
**SourceSchemaObjectType** |  Pointer to **string** | Schema objectType on the given application that maps to an Account Group | [optional] 
**Privileged** |  Pointer to **bool** | Determines if this Entitlement is privileged. | [optional] 
**CloudGoverned** |  Pointer to **bool** | Determines if this Entitlement is goverened in the cloud. | [optional] 
**Source** |  Pointer to [**EntitlementSource**](entitlement-source) |  | [optional] 

## Methods

### NewEntitlementDto

`func NewEntitlementDto(name string, ) *EntitlementDto`

NewEntitlementDto instantiates a new EntitlementDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementDtoWithDefaults

`func NewEntitlementDtoWithDefaults() *EntitlementDto`

NewEntitlementDtoWithDefaults instantiates a new EntitlementDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *EntitlementDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EntitlementDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EntitlementDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *EntitlementDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *EntitlementDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntitlementDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntitlementDto) SetName(v string)`

SetName sets Name field to given value.


### GetCreated

`func (o *EntitlementDto) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *EntitlementDto) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *EntitlementDto) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *EntitlementDto) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *EntitlementDto) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *EntitlementDto) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *EntitlementDto) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *EntitlementDto) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetAttribute

`func (o *EntitlementDto) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *EntitlementDto) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *EntitlementDto) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *EntitlementDto) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *EntitlementDto) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *EntitlementDto) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *EntitlementDto) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *EntitlementDto) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetDescription

`func (o *EntitlementDto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *EntitlementDto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *EntitlementDto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *EntitlementDto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAttributes

`func (o *EntitlementDto) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *EntitlementDto) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *EntitlementDto) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *EntitlementDto) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetSourceSchemaObjectType

`func (o *EntitlementDto) GetSourceSchemaObjectType() string`

GetSourceSchemaObjectType returns the SourceSchemaObjectType field if non-nil, zero value otherwise.

### GetSourceSchemaObjectTypeOk

`func (o *EntitlementDto) GetSourceSchemaObjectTypeOk() (*string, bool)`

GetSourceSchemaObjectTypeOk returns a tuple with the SourceSchemaObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceSchemaObjectType

`func (o *EntitlementDto) SetSourceSchemaObjectType(v string)`

SetSourceSchemaObjectType sets SourceSchemaObjectType field to given value.

### HasSourceSchemaObjectType

`func (o *EntitlementDto) HasSourceSchemaObjectType() bool`

HasSourceSchemaObjectType returns a boolean if a field has been set.

### GetPrivileged

`func (o *EntitlementDto) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *EntitlementDto) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *EntitlementDto) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.

### HasPrivileged

`func (o *EntitlementDto) HasPrivileged() bool`

HasPrivileged returns a boolean if a field has been set.

### GetCloudGoverned

`func (o *EntitlementDto) GetCloudGoverned() bool`

GetCloudGoverned returns the CloudGoverned field if non-nil, zero value otherwise.

### GetCloudGovernedOk

`func (o *EntitlementDto) GetCloudGovernedOk() (*bool, bool)`

GetCloudGovernedOk returns a tuple with the CloudGoverned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudGoverned

`func (o *EntitlementDto) SetCloudGoverned(v bool)`

SetCloudGoverned sets CloudGoverned field to given value.

### HasCloudGoverned

`func (o *EntitlementDto) HasCloudGoverned() bool`

HasCloudGoverned returns a boolean if a field has been set.

### GetSource

`func (o *EntitlementDto) GetSource() EntitlementSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *EntitlementDto) GetSourceOk() (*EntitlementSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *EntitlementDto) SetSource(v EntitlementSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *EntitlementDto) HasSource() bool`

HasSource returns a boolean if a field has been set.


[[Back to top]](#) 


