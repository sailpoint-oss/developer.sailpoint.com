---
id: v2024-resource-object
title: ResourceObject
pagination_label: ResourceObject
sidebar_label: ResourceObject
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ResourceObject', 'V2024ResourceObject'] 
slug: /tools/sdk/go/v2024/models/resource-object
tags: ['SDK', 'Software Development Kit', 'ResourceObject', 'V2024ResourceObject']
---

# ResourceObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Instance** | Pointer to **string** | Identifier of the specific instance where this object resides. | [optional] [readonly] 
**Identity** | Pointer to **string** | Native identity of the object in the Source. | [optional] [readonly] 
**Uuid** | Pointer to **string** | Universal unique identifier of the object in the Source. | [optional] [readonly] 
**PreviousIdentity** | Pointer to **string** | Native identity that the object has previously. | [optional] [readonly] 
**Name** | Pointer to **string** | Display name for this object. | [optional] [readonly] 
**ObjectType** | Pointer to **string** | Type of object. | [optional] [readonly] 
**Incomplete** | Pointer to **bool** | A flag indicating that this is an incomplete object. Used in special cases where the connector has to return account information in several phases and the objects might not have a complete set of all account attributes. The attributes in this object will replace the corresponding attributes in the Link, but no other Link attributes will be changed. | [optional] [readonly] 
**Incremental** | Pointer to **bool** | A flag indicating that this is an incremental change object. This is similar to incomplete but it also means that the values of any multi-valued attributes in this object should be merged with the existing values in the Link rather than replacing the existing Link value. | [optional] [readonly] 
**Delete** | Pointer to **bool** | A flag indicating that this object has been deleted. This is set only when doing delta aggregation and the connector supports detection of native deletes. | [optional] [readonly] 
**Remove** | Pointer to **bool** | A flag set indicating that the values in the attributes represent things to remove rather than things to add. Setting this implies incremental. The values which are always for multi-valued attributes are removed from the current values. | [optional] [readonly] 
**Missing** | Pointer to **[]string** | A list of attribute names that are not included in this object. This is only used with SMConnector and will only contain \"groups\". | [optional] [readonly] 
**Attributes** | Pointer to **map[string]interface{}** | Attributes of this ResourceObject. | [optional] [readonly] 
**FinalUpdate** | Pointer to **bool** | In Aggregation, for sparse object the count for total accounts scanned identities updated is not incremented. | [optional] [readonly] 

## Methods

### NewResourceObject

`func NewResourceObject() *ResourceObject`

NewResourceObject instantiates a new ResourceObject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResourceObjectWithDefaults

`func NewResourceObjectWithDefaults() *ResourceObject`

NewResourceObjectWithDefaults instantiates a new ResourceObject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInstance

`func (o *ResourceObject) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *ResourceObject) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *ResourceObject) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *ResourceObject) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetIdentity

`func (o *ResourceObject) GetIdentity() string`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *ResourceObject) GetIdentityOk() (*string, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *ResourceObject) SetIdentity(v string)`

SetIdentity sets Identity field to given value.

### HasIdentity

`func (o *ResourceObject) HasIdentity() bool`

HasIdentity returns a boolean if a field has been set.

### GetUuid

`func (o *ResourceObject) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *ResourceObject) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *ResourceObject) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *ResourceObject) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetPreviousIdentity

`func (o *ResourceObject) GetPreviousIdentity() string`

GetPreviousIdentity returns the PreviousIdentity field if non-nil, zero value otherwise.

### GetPreviousIdentityOk

`func (o *ResourceObject) GetPreviousIdentityOk() (*string, bool)`

GetPreviousIdentityOk returns a tuple with the PreviousIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousIdentity

`func (o *ResourceObject) SetPreviousIdentity(v string)`

SetPreviousIdentity sets PreviousIdentity field to given value.

### HasPreviousIdentity

`func (o *ResourceObject) HasPreviousIdentity() bool`

HasPreviousIdentity returns a boolean if a field has been set.

### GetName

`func (o *ResourceObject) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ResourceObject) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ResourceObject) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ResourceObject) HasName() bool`

HasName returns a boolean if a field has been set.

### GetObjectType

`func (o *ResourceObject) GetObjectType() string`

GetObjectType returns the ObjectType field if non-nil, zero value otherwise.

### GetObjectTypeOk

`func (o *ResourceObject) GetObjectTypeOk() (*string, bool)`

GetObjectTypeOk returns a tuple with the ObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectType

`func (o *ResourceObject) SetObjectType(v string)`

SetObjectType sets ObjectType field to given value.

### HasObjectType

`func (o *ResourceObject) HasObjectType() bool`

HasObjectType returns a boolean if a field has been set.

### GetIncomplete

`func (o *ResourceObject) GetIncomplete() bool`

GetIncomplete returns the Incomplete field if non-nil, zero value otherwise.

### GetIncompleteOk

`func (o *ResourceObject) GetIncompleteOk() (*bool, bool)`

GetIncompleteOk returns a tuple with the Incomplete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncomplete

`func (o *ResourceObject) SetIncomplete(v bool)`

SetIncomplete sets Incomplete field to given value.

### HasIncomplete

`func (o *ResourceObject) HasIncomplete() bool`

HasIncomplete returns a boolean if a field has been set.

### GetIncremental

`func (o *ResourceObject) GetIncremental() bool`

GetIncremental returns the Incremental field if non-nil, zero value otherwise.

### GetIncrementalOk

`func (o *ResourceObject) GetIncrementalOk() (*bool, bool)`

GetIncrementalOk returns a tuple with the Incremental field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncremental

`func (o *ResourceObject) SetIncremental(v bool)`

SetIncremental sets Incremental field to given value.

### HasIncremental

`func (o *ResourceObject) HasIncremental() bool`

HasIncremental returns a boolean if a field has been set.

### GetDelete

`func (o *ResourceObject) GetDelete() bool`

GetDelete returns the Delete field if non-nil, zero value otherwise.

### GetDeleteOk

`func (o *ResourceObject) GetDeleteOk() (*bool, bool)`

GetDeleteOk returns a tuple with the Delete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelete

`func (o *ResourceObject) SetDelete(v bool)`

SetDelete sets Delete field to given value.

### HasDelete

`func (o *ResourceObject) HasDelete() bool`

HasDelete returns a boolean if a field has been set.

### GetRemove

`func (o *ResourceObject) GetRemove() bool`

GetRemove returns the Remove field if non-nil, zero value otherwise.

### GetRemoveOk

`func (o *ResourceObject) GetRemoveOk() (*bool, bool)`

GetRemoveOk returns a tuple with the Remove field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemove

`func (o *ResourceObject) SetRemove(v bool)`

SetRemove sets Remove field to given value.

### HasRemove

`func (o *ResourceObject) HasRemove() bool`

HasRemove returns a boolean if a field has been set.

### GetMissing

`func (o *ResourceObject) GetMissing() []string`

GetMissing returns the Missing field if non-nil, zero value otherwise.

### GetMissingOk

`func (o *ResourceObject) GetMissingOk() (*[]string, bool)`

GetMissingOk returns a tuple with the Missing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMissing

`func (o *ResourceObject) SetMissing(v []string)`

SetMissing sets Missing field to given value.

### HasMissing

`func (o *ResourceObject) HasMissing() bool`

HasMissing returns a boolean if a field has been set.

### GetAttributes

`func (o *ResourceObject) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *ResourceObject) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *ResourceObject) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *ResourceObject) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetFinalUpdate

`func (o *ResourceObject) GetFinalUpdate() bool`

GetFinalUpdate returns the FinalUpdate field if non-nil, zero value otherwise.

### GetFinalUpdateOk

`func (o *ResourceObject) GetFinalUpdateOk() (*bool, bool)`

GetFinalUpdateOk returns a tuple with the FinalUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFinalUpdate

`func (o *ResourceObject) SetFinalUpdate(v bool)`

SetFinalUpdate sets FinalUpdate field to given value.

### HasFinalUpdate

`func (o *ResourceObject) HasFinalUpdate() bool`

HasFinalUpdate returns a boolean if a field has been set.


