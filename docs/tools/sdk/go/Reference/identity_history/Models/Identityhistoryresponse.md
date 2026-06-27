---
id: v1-identityhistoryresponse
title: Identityhistoryresponse
pagination_label: Identityhistoryresponse
sidebar_label: Identityhistoryresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identityhistoryresponse', 'V1Identityhistoryresponse'] 
slug: /tools/sdk/go/identityhistory/models/identityhistoryresponse
tags: ['SDK', 'Software Development Kit', 'Identityhistoryresponse', 'V1Identityhistoryresponse']
---

# Identityhistoryresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the identity ID | [optional] 
**DisplayName** | Pointer to **string** | the display name of the identity | [optional] 
**Snapshot** | Pointer to **string** | the date when the identity record was created | [optional] 
**DeletedDate** | Pointer to **string** | the date when the identity was deleted | [optional] 
**AccessItemCount** | Pointer to **map[string]int32** | A map containing the count of each access item | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | A map containing the identity attributes | [optional] 

## Methods

### NewIdentityhistoryresponse

`func NewIdentityhistoryresponse() *Identityhistoryresponse`

NewIdentityhistoryresponse instantiates a new Identityhistoryresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityhistoryresponseWithDefaults

`func NewIdentityhistoryresponseWithDefaults() *Identityhistoryresponse`

NewIdentityhistoryresponseWithDefaults instantiates a new Identityhistoryresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Identityhistoryresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Identityhistoryresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Identityhistoryresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Identityhistoryresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDisplayName

`func (o *Identityhistoryresponse) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Identityhistoryresponse) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Identityhistoryresponse) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Identityhistoryresponse) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetSnapshot

`func (o *Identityhistoryresponse) GetSnapshot() string`

GetSnapshot returns the Snapshot field if non-nil, zero value otherwise.

### GetSnapshotOk

`func (o *Identityhistoryresponse) GetSnapshotOk() (*string, bool)`

GetSnapshotOk returns a tuple with the Snapshot field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSnapshot

`func (o *Identityhistoryresponse) SetSnapshot(v string)`

SetSnapshot sets Snapshot field to given value.

### HasSnapshot

`func (o *Identityhistoryresponse) HasSnapshot() bool`

HasSnapshot returns a boolean if a field has been set.

### GetDeletedDate

`func (o *Identityhistoryresponse) GetDeletedDate() string`

GetDeletedDate returns the DeletedDate field if non-nil, zero value otherwise.

### GetDeletedDateOk

`func (o *Identityhistoryresponse) GetDeletedDateOk() (*string, bool)`

GetDeletedDateOk returns a tuple with the DeletedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeletedDate

`func (o *Identityhistoryresponse) SetDeletedDate(v string)`

SetDeletedDate sets DeletedDate field to given value.

### HasDeletedDate

`func (o *Identityhistoryresponse) HasDeletedDate() bool`

HasDeletedDate returns a boolean if a field has been set.

### GetAccessItemCount

`func (o *Identityhistoryresponse) GetAccessItemCount() map[string]int32`

GetAccessItemCount returns the AccessItemCount field if non-nil, zero value otherwise.

### GetAccessItemCountOk

`func (o *Identityhistoryresponse) GetAccessItemCountOk() (*map[string]int32, bool)`

GetAccessItemCountOk returns a tuple with the AccessItemCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessItemCount

`func (o *Identityhistoryresponse) SetAccessItemCount(v map[string]int32)`

SetAccessItemCount sets AccessItemCount field to given value.

### HasAccessItemCount

`func (o *Identityhistoryresponse) HasAccessItemCount() bool`

HasAccessItemCount returns a boolean if a field has been set.

### GetAttributes

`func (o *Identityhistoryresponse) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Identityhistoryresponse) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Identityhistoryresponse) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Identityhistoryresponse) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


