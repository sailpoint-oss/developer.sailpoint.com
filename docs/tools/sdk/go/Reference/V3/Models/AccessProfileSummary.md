---
id: access-profile-summary
title: AccessProfileSummary
pagination_label: AccessProfileSummary
sidebar_label: AccessProfileSummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessProfileSummary', 'AccessProfileSummary'] 
slug: /tools/sdk/go/v3/models/access-profile-summary
tags: ['SDK', 'Software Development Kit', 'AccessProfileSummary', 'AccessProfileSummary']
---

# AccessProfileSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique ID of the referenced object. | [optional] 
**Name** | Pointer to **string** | The human readable name of the referenced object. | [optional] 
**DisplayName** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **NullableString** | Description of access item. | [optional] 
**Type** | Pointer to **string** | Type of the access item. | [optional] 
**Source** | Pointer to [**Reference**](reference) |  | [optional] 
**Owner** | Pointer to [**DisplayReference**](display-reference) |  | [optional] 
**Revocable** | Pointer to **bool** |  | [optional] 

## Methods

### NewAccessProfileSummary

`func NewAccessProfileSummary() *AccessProfileSummary`

NewAccessProfileSummary instantiates a new AccessProfileSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileSummaryWithDefaults

`func NewAccessProfileSummaryWithDefaults() *AccessProfileSummary`

NewAccessProfileSummaryWithDefaults instantiates a new AccessProfileSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessProfileSummary) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessProfileSummary) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessProfileSummary) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessProfileSummary) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccessProfileSummary) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessProfileSummary) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessProfileSummary) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessProfileSummary) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDisplayName

`func (o *AccessProfileSummary) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *AccessProfileSummary) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *AccessProfileSummary) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *AccessProfileSummary) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *AccessProfileSummary) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessProfileSummary) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessProfileSummary) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessProfileSummary) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *AccessProfileSummary) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *AccessProfileSummary) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetType

`func (o *AccessProfileSummary) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessProfileSummary) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessProfileSummary) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccessProfileSummary) HasType() bool`

HasType returns a boolean if a field has been set.

### GetSource

`func (o *AccessProfileSummary) GetSource() Reference`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *AccessProfileSummary) GetSourceOk() (*Reference, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *AccessProfileSummary) SetSource(v Reference)`

SetSource sets Source field to given value.

### HasSource

`func (o *AccessProfileSummary) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetOwner

`func (o *AccessProfileSummary) GetOwner() DisplayReference`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *AccessProfileSummary) GetOwnerOk() (*DisplayReference, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *AccessProfileSummary) SetOwner(v DisplayReference)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *AccessProfileSummary) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetRevocable

`func (o *AccessProfileSummary) GetRevocable() bool`

GetRevocable returns the Revocable field if non-nil, zero value otherwise.

### GetRevocableOk

`func (o *AccessProfileSummary) GetRevocableOk() (*bool, bool)`

GetRevocableOk returns a tuple with the Revocable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocable

`func (o *AccessProfileSummary) SetRevocable(v bool)`

SetRevocable sets Revocable field to given value.

### HasRevocable

`func (o *AccessProfileSummary) HasRevocable() bool`

HasRevocable returns a boolean if a field has been set.


